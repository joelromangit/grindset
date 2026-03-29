import { supabase, isSupabaseConfigured } from './supabase'

const db = isSupabaseConfigured()

// ============ STUDY ============
export const studyDb = {
  async getSubjects() {
    if (!db) return null
    const { data: subjects } = await supabase.from('subjects').select('*').order('created_at')
    if (!subjects) return null
    const { data: topics } = await supabase.from('subject_topics').select('*').order('sort_order')
    const { data: tasks } = await supabase.from('study_tasks').select('*').order('created_at')
    return subjects.map(s => ({
      id: s.id,
      name: s.name,
      icon: s.icon,
      color: s.color,
      topics: (topics || []).filter(t => t.subject_id === s.id).map(t => ({
        id: t.id, name: t.name, order: t.sort_order, status: t.status
      })),
      weeklyPlan: (tasks || []).filter(t => t.subject_id === s.id).map(t => ({
        id: t.id, day: t.day, task: t.task, topic: t.topic, done: t.done
      }))
    }))
  },

  async addSubject(subject) {
    if (!db) return null
    const { data } = await supabase.from('subjects')
      .insert({ name: subject.name, icon: subject.icon, color: subject.color })
      .select().single()
    return data
  },

  async updateSubject(id, updates) {
    if (!db) return
    await supabase.from('subjects').update(updates).eq('id', id)
  },

  async deleteSubject(id) {
    if (!db) return
    await supabase.from('subjects').delete().eq('id', id)
  },

  async addTopic(subjectId, name, order, status = 'pending') {
    if (!db) return null
    const { data } = await supabase.from('subject_topics')
      .insert({ subject_id: subjectId, name, sort_order: order, status })
      .select().single()
    return data
  },

  async updateTopic(id, updates) {
    if (!db) return
    await supabase.from('subject_topics').update(updates).eq('id', id)
  },

  async deleteTopic(id) {
    if (!db) return
    await supabase.from('subject_topics').delete().eq('id', id)
  },

  async addTask(subjectId, task) {
    if (!db) return null
    const { data } = await supabase.from('study_tasks')
      .insert({ subject_id: subjectId, day: task.day, task: task.task, topic: task.topic || '' })
      .select().single()
    return data
  },

  async updateTask(id, updates) {
    if (!db) return
    await supabase.from('study_tasks').update(updates).eq('id', id)
  },

  async deleteTask(id) {
    if (!db) return
    await supabase.from('study_tasks').delete().eq('id', id)
  },
}

// ============ SLEEP ============
export const sleepDb = {
  async getSchedules() {
    if (!db) return null
    const { data } = await supabase.from('sleep_schedules').select('*').order('created_at')
    return data?.map(s => ({ id: s.id, name: s.name, days: s.days, bedtime: s.bedtime, wakeup: s.wakeup }))
  },

  async addSchedule(schedule) {
    if (!db) return null
    const { data } = await supabase.from('sleep_schedules')
      .insert({ name: schedule.name, days: schedule.days, bedtime: schedule.bedtime, wakeup: schedule.wakeup })
      .select().single()
    return data
  },

  async updateSchedule(id, updates) {
    if (!db) return
    await supabase.from('sleep_schedules').update(updates).eq('id', id)
  },

  async deleteSchedule(id) {
    if (!db) return
    await supabase.from('sleep_schedules').delete().eq('id', id)
  },

  async getRecords() {
    if (!db) return null
    const { data } = await supabase.from('sleep_records').select('*').order('date', { ascending: false })
    return data?.map(r => ({ id: r.id, date: r.date, bedtime: r.bedtime, wakeup: r.wakeup }))
  },

  async addRecord(record) {
    if (!db) return null
    const { data } = await supabase.from('sleep_records')
      .upsert({ date: record.date, bedtime: record.bedtime, wakeup: record.wakeup }, { onConflict: 'date' })
      .select().single()
    return data
  },

  async updateRecord(id, updates) {
    if (!db) return
    await supabase.from('sleep_records').update(updates).eq('id', id)
  },

  async deleteRecord(id) {
    if (!db) return
    await supabase.from('sleep_records').delete().eq('id', id)
  },
}

// ============ GYM ============
export const gymDb = {
  async getTemplates() {
    if (!db) return null
    const { data: templates } = await supabase.from('gym_templates').select('*').order('created_at')
    const { data: exercises } = await supabase.from('gym_template_exercises').select('*').order('sort_order')
    return templates?.map(t => ({
      id: t.id, name: t.name, color: t.color,
      exercises: (exercises || []).filter(e => e.template_id === t.id).map(e => ({
        id: e.id, name: e.name, defaultSets: e.default_sets, defaultReps: e.default_reps
      }))
    }))
  },

  async addTemplate(template) {
    if (!db) return null
    const { data } = await supabase.from('gym_templates')
      .insert({ name: template.name, color: template.color })
      .select().single()
    if (data && template.exercises?.length > 0) {
      await supabase.from('gym_template_exercises').insert(
        template.exercises.map((e, i) => ({
          template_id: data.id, name: e.name,
          default_sets: e.defaultSets, default_reps: e.defaultReps, sort_order: i
        }))
      )
    }
    return data
  },

  async updateTemplate(id, template) {
    if (!db) return
    await supabase.from('gym_templates').update({ name: template.name, color: template.color }).eq('id', id)
    await supabase.from('gym_template_exercises').delete().eq('template_id', id)
    if (template.exercises?.length > 0) {
      await supabase.from('gym_template_exercises').insert(
        template.exercises.map((e, i) => ({
          template_id: id, name: e.name,
          default_sets: e.defaultSets, default_reps: e.defaultReps, sort_order: i
        }))
      )
    }
  },

  async deleteTemplate(id) {
    if (!db) return
    await supabase.from('gym_templates').delete().eq('id', id)
  },

  async getWorkouts() {
    if (!db) return null
    const { data: workouts } = await supabase.from('workouts').select('*').order('date', { ascending: false })
    if (!workouts) return null
    const wIds = workouts.map(w => w.id)
    const { data: exercises } = await supabase.from('workout_exercises').select('*').in('workout_id', wIds.length > 0 ? wIds : [0]).order('sort_order')
    const exIds = (exercises || []).map(e => e.id)
    const { data: sets } = await supabase.from('workout_sets').select('*').in('exercise_id', exIds.length > 0 ? exIds : [0]).order('sort_order')

    return workouts.map(w => ({
      id: w.id, date: w.date, templateName: w.template_name, color: w.color,
      startTime: w.start_time, endTime: w.end_time, durationMin: w.duration_min,
      exercises: (exercises || []).filter(e => e.workout_id === w.id).map(e => ({
        name: e.name,
        sets: (sets || []).filter(s => s.exercise_id === e.id).map(s => ({
          reps: s.reps, weight: parseFloat(s.weight)
        }))
      }))
    }))
  },

  async addWorkout(workout) {
    if (!db) return null
    const { data: w } = await supabase.from('workouts').insert({
      date: workout.date, template_name: workout.templateName, color: workout.color,
      start_time: workout.startTime, end_time: workout.endTime, duration_min: workout.durationMin
    }).select().single()
    if (!w) return null

    for (let ei = 0; ei < workout.exercises.length; ei++) {
      const ex = workout.exercises[ei]
      const { data: exData } = await supabase.from('workout_exercises')
        .insert({ workout_id: w.id, name: ex.name, sort_order: ei })
        .select().single()
      if (exData && ex.sets.length > 0) {
        await supabase.from('workout_sets').insert(
          ex.sets.map((s, si) => ({ exercise_id: exData.id, reps: s.reps, weight: s.weight, sort_order: si }))
        )
      }
    }
    return { ...workout, id: w.id }
  },

  async updateWorkoutTimer(id, startTime, endTime, durationMin) {
    if (!db) return
    await supabase.from('workouts').update({ start_time: startTime, end_time: endTime, duration_min: durationMin }).eq('id', id)
  },

  async deleteWorkout(id) {
    if (!db) return
    await supabase.from('workouts').delete().eq('id', id)
  },
}

// ============ READING ============
export const readingDb = {
  async getBooks() {
    if (!db) return null
    const { data: books } = await supabase.from('books').select('*').order('created_at', { ascending: false })
    const { data: logs } = await supabase.from('reading_log').select('*').order('date', { ascending: false })
    return books?.map(b => ({
      id: b.id, title: b.title, author: b.author,
      cover: b.cover_url, coverColor: b.cover_color,
      totalPages: b.total_pages, currentPage: b.current_page,
      status: b.status, startDate: b.start_date,
      goal: b.goal, notes: b.notes,
      dailyLog: (logs || []).filter(l => l.book_id === b.id).map(l => ({ date: l.date, pages: l.pages }))
    }))
  },

  async addBook(book) {
    if (!db) return null
    const { data } = await supabase.from('books').insert({
      title: book.title, author: book.author || '',
      cover_url: book.cover || null, cover_color: book.coverColor,
      total_pages: book.totalPages, current_page: book.currentPage || 0,
      status: book.status, start_date: book.startDate || null,
      goal: book.goal || '', notes: book.notes || ''
    }).select().single()
    return data ? { ...book, id: data.id } : null
  },

  async updateBook(id, updates) {
    if (!db) return
    const mapped = {}
    if (updates.title !== undefined) mapped.title = updates.title
    if (updates.author !== undefined) mapped.author = updates.author
    if (updates.cover !== undefined) mapped.cover_url = updates.cover
    if (updates.coverColor !== undefined) mapped.cover_color = updates.coverColor
    if (updates.totalPages !== undefined) mapped.total_pages = updates.totalPages
    if (updates.currentPage !== undefined) mapped.current_page = updates.currentPage
    if (updates.status !== undefined) mapped.status = updates.status
    if (updates.startDate !== undefined) mapped.start_date = updates.startDate
    if (updates.goal !== undefined) mapped.goal = updates.goal
    if (updates.notes !== undefined) mapped.notes = updates.notes
    if (Object.keys(mapped).length > 0) {
      await supabase.from('books').update(mapped).eq('id', id)
    }
  },

  async deleteBook(id) {
    if (!db) return
    await supabase.from('books').delete().eq('id', id)
  },

  async logPages(bookId, date, pages) {
    if (!db) return
    await supabase.from('reading_log').upsert(
      { book_id: bookId, date, pages },
      { onConflict: 'book_id,date' }
    )
  },

  async uploadCover(file) {
    if (!db) return null
    const ext = file.name.split('.').pop()
    const path = `${Date.now()}.${ext}`
    const { error } = await supabase.storage.from('covers').upload(path, file)
    if (error) return null
    const { data } = supabase.storage.from('covers').getPublicUrl(path)
    return data.publicUrl
  },
}
