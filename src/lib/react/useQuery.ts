import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function useQuery() {
  const [processedQueries, setProcessedQueries] = useState<boolean>(false)
  const [queries, setQueries] = useState<{ [key: string]: any }>({})
  const router = useRouter()
  const { query, asPath } = router
  const urlHasQueries = /\?(.*)=/.test(asPath)
  useEffect(() => {
    if (!processedQueries && router) {
      if (urlHasQueries) {
        if (Object.keys(query).length > 0) {
          setQueries(query)
          setProcessedQueries(true)
        }
      } else {
        setProcessedQueries(true)
      }
    }
  }, [router])
  return {
    processedQueries,
    queries,
  }
}
