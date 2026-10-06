import { useQuery } from '@tanstack/react-query'
import { api } from '@/api/client'

export function useSystemStatus() {
  return useQuery({
    queryKey: ['system', 'status'],
    queryFn: async () => {
      const { data, response } = await api.GET('/api/v1/system/status')
      if (!data) throw new Error(`Status request failed (HTTP ${response.status})`)
      return data
    },
    refetchInterval: 30_000,
  })
}
