import { useState, useEffect, useCallback } from 'react'
import { isSupabaseConfigured } from '../lib/supabase'

/**
 * Hook that loads data from Supabase on mount, falls back to mock data.
 * When Supabase is configured, starts with empty state to avoid flash of mock data.
 * Returns [data, setData, { loading, isRemote, reload }]
 */
export function useDb(fetchFn, mockData) {
  const hasDb = isSupabaseConfigured()
  const initialData = hasDb ? (Array.isArray(mockData) ? [] : mockData) : mockData
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(hasDb)
  const [isRemote, setIsRemote] = useState(false)

  const load = useCallback(async () => {
    if (!hasDb) return
    setLoading(true)
    try {
      const result = await fetchFn()
      if (result !== null) {
        setData(result)
        setIsRemote(true)
      } else {
        // Supabase configured but fetch returned null - use mock
        setData(mockData)
      }
    } catch (e) {
      console.warn('DB fetch failed, using mock data:', e)
      setData(mockData)
    }
    setLoading(false)
  }, [fetchFn, hasDb, mockData])

  useEffect(() => { load() }, [load])

  return [data, setData, { loading, isRemote, reload: load }]
}
