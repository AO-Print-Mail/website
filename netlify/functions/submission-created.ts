import { Handler } from '@netlify/functions'
import { encode } from '@lib/netlify/utils'
import fetch from 'node-fetch'

const ANALYTICS_URL = 'http://www.google-analytics.com/collect'

const handler: Handler = async (event, context, callback) => {
  const body = JSON.parse(event.body).payload
  console.log(JSON.stringify(body, null, 2))
  const params = encode({
    v: 1,
    t: 'event',
    tid: 'UA-52577344-1',
    cid: '42587263459',
    ec: 'form_testing',
    ea: 'valid_submission',
    el: 'quote_request',
    ev: '200',
  })
  const response = await fetch(`${ANALYTICS_URL}?${params}`, { method: 'POST' })
  return response.json()
}

export { handler }
