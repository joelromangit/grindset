import { useState, useEffect, useCallback } from 'react'

/**
 * Hook that loads data from Supabase on mount, falls back to mock data.
 * Returns [data, setData, { loading, isRemote, reload }]
 */
export function useDb(fetchFn, mockData) {
  const [data, setData] = useState(mockData)
  const [loading, setLoading] = useState(true)
  const [isRemote, setIsRemote] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const result = await fetchFn()
      if (result !== null) {
        setData(result)
        setIsRemote(true)
      }
    } catch (e) {
      console.warn('DB fetch failed, using mock data:', e)
    }
    setLoading(false)
  }, [fetchFn])

  useEffect(() => { load() }, [load])

  return [data, setData, { loading, isRemote, reload: load }]
}
