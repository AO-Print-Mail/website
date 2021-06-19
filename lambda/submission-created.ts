import { Handler } from '@netlify/functions'
import { encode } from '@lib/netlify/utils'
import fetch from 'node-fetch'

const ANALYTICS_URL = 'http://www.google-analytics.com/collect'
const AGA4_URL =
  'http://www.google-analytics.com/mp/collect?api_secret=ivC4IkA0TtuiMtd_uk4REQ&measurement_id=G-CTH78V19LN'

const serviceValues = {
  'Print and Mail': 250,
  Print: '150',
  Mail: '200',
  Fulfilment: '300',
}

function mapServiceToValue(service?: keyof typeof serviceValues) {
  return serviceValues[service] || 100
}

const handler: Handler = async (event, context, callback) => {
  const body = JSON.parse(event.body).payload
  console.log(JSON.stringify(body, null, 2))

  const value = mapServiceToValue(body?.data?.Service)

  const params = {
    v: '1',
    t: 'event',
    tid: 'UA-52577344-1',
    uid: body?.data?.hutk,
    ec: 'form_testing',
    ea: 'valid_submission',
    el: 'quote_request',
    ev: value,
    ds: 'web',
    uip: body?.data?.ip,
    ua: body?.data?.user_agent,
    gclid: body?.data?.gclid,
    dclid: body?.data?.dclid,
  }

  //Send to Universal Analytics
  const ua_response = await fetch(`${ANALYTICS_URL}`, {
    method: 'POST',
    body: JSON.stringify(params),
  })

  const ga4_params = {
    client_id: body?.data?.hutk,
    events: [{ name: 'generate_lead', params: { value } }],
  }

  const ga4_response = await fetch(AGA4_URL, {
    method: 'POST',
    body: JSON.stringify(ga4_params),
  })

  //Send to GA4
  console.log(ua_response)
  console.log(ga4_response)
  return { statusCode: 200, body: 'OK' }
}

export { handler }
