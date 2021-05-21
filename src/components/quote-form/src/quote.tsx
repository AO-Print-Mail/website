import fetch from 'isomorphic-unfetch'

import { Box } from '@theme/atoms'
import { ServiceType } from './types'
import { useEffect, useState } from 'react'

interface QuoteProps {}

export const serviceTypes: ServiceType[] = [
  'print',
  'mail',
  'fulfilment',
  'callback',
]

export const Quote: React.FC<QuoteProps> = () => {
  const [quote, setQuote] = useState({})
  async function getQuote(serviceType: ServiceType) {
    const quotePayload = await fetch('/api/get-quote', {
      method: 'POST',
      body: JSON.stringify({ service: serviceType }),
    }).then((res) => res.json())
    return quotePayload
  }
  useEffect(() => {
    getQuote('print').then((res) => setQuote(res))
  }, [])
  return <>{Math.sin((Math.PI / 2) * 0.1)}</>
}
