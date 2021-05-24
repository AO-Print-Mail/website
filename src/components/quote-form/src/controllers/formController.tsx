import { ModalLayout } from '@components/modal/src/layout'
import { useMotionValue } from 'framer-motion'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { schemas } from '../schema'
import { useStateMachine } from 'little-state-machine'
import { createQuote } from '@lib/little-state-machine/actions'
import { useEffect, useMemo } from 'react'
import { newQuote } from '../scripts/newQuote'
import { FormSeedData, ServiceType } from '../types'

const Controls = dynamic(
  import('../components/controls').then((res) => res.Controls)
)

export interface FormControllerProps {
  toggle: (e: React.MouseEvent) => void
  service: ServiceType
  quoteId?: string
  initialData?: FormSeedData
  step: string
}

export const FormController: React.FC<FormControllerProps> = ({
  toggle,
  service,
  quoteId,
  step,
  ...props
}) => {
  const { state } = useStateMachine({ createQuote })
  const { query } = useRouter()

  const formSchema = useMemo(() => schemas[service], [service])

  async function setQuoteData(serviceType?: ServiceType) {
    let existingQuote
    if (serviceType && state.quoteRequests.length > 0) {
      existingQuote = state.quoteRequests.find(
        (q) =>
          q.service_id === serviceType && q.submission_response !== 'Success'
      )
      const { id, current_step } = existingQuote
      return [id, current_step]
    }
  }

  //belongs outside in the layout somewhere
  function validateStepQuery(): string | false {
    if (!query || !query['quote'] || !query['service']) {
      return false
    }
    const { step, service } = query
  }

  async function startFormSteps(serviceType: ServiceType) {
    Promise.all([loadSchema(serviceType), setQuoteData(serviceType)])
  }

  const progress = useMotionValue(60)

  return (
    <ModalLayout
      controls={<Controls handleClose={toggle} progress={progress} />}
      //hideControlsBorder={true}
      {...props}
    >
      {/* <FormStep /> */}
      {quoteId}
    </ModalLayout>
  )
}
