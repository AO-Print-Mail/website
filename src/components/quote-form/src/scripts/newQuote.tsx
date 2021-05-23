import fetch from 'isomorphic-unfetch'
import { Quote, ServiceType } from '../types'

export const serviceTypes: ServiceType[] = [
  'print',
  'mail',
  'fulfilment',
  'callback',
]

export async function newQuote(
  quote: Partial<Quote> & Pick<Quote, 'service_id'>
) {
  const quotePayload: Partial<Quote> &
    Pick<Quote, 'service_id' | 'id' | 'created_at'> = await fetch(
    '/api/create-quote',
    {
      method: 'POST',
      body: JSON.stringify(quote),
    }
  )
    .then((res) => res.json())
    .catch((err) => err.error)
  return quotePayload
}
