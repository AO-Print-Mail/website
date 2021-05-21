import type { NextApiRequest, NextApiResponse } from 'next'
import type { Quote } from '@components/quote-form/src/types'
import { serviceTypes } from '@components/quote-form/src/quote'
import { v4 as uuidv4 } from 'uuid'

type Error = {
  error: string
}

export default (req: NextApiRequest, res: NextApiResponse<Quote | Error>) => {
  if (req.method === 'POST') {
    if (req.body) {
      const body = JSON.parse(req.body)
      const service = body?.service
      const service_id = service && serviceTypes.find((id) => id === service)
      if (service_id) {
        res
          .status(200)
          .json({ id: uuidv4(), created_at: new Date(), service_id })
      } else {
        res.status(400).json({ error: 'The service type is invalid' })
      }
    } else {
      res.status(400).json({ error: 'No service was specified' })
    }
  } else {
    res.status(405).json({ error: 'This endpoint only accepts POST' })
  }
}
