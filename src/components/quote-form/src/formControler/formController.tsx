import { ModalLayout } from '@components/modal/src/layout'
import { CloseControls } from '@theme/atoms'
import { useMotionValue } from 'framer-motion'
import { useRouter } from 'next/router'
import { FormStep } from '../components/formStep'
import dynamic from 'next/dynamic'
import { schemas } from '../schema'
import { useStateMachine } from 'little-state-machine'
import { createQuote } from '@lib/little-state-machine/actions'
import { useEffect, useMemo } from 'react'
import { newQuote } from '../scripts/newQuote'
import { ServiceType } from '../types'

const Controls = dynamic(
  import('../components/controls').then((res) => res.Controls)
)

interface FormControllerProps {
  toggle: (e: React.MouseEvent) => void
  service: ServiceType
}

export const FormController: React.FC<FormControllerProps> = ({
  toggle,
  service,
  ...props
}) => {
  const { state, actions } = useStateMachine({ createQuote })

  const { query } = useRouter()

  const prevQuote = useMemo(
    () =>
      state.quoteRequests.find(
        (q) => q.service_id === service && q.submission_response !== 'Success'
      ),
    [service]
  )
  const formSchema = useMemo(() => schemas[service], [service])

  const step: string = prevQuote?.current_step || formSchema

  useEffect(() => {
    if (!prevQuote) {
      newQuote({ service_id: service }).then((res) => {
        const newQuote = Object.assign({}, { current_step: step }, res)
        actions.createQuote(newQuote)
      })
    }
  }, [])

  const progress = useMotionValue(60)

  return (
    <ModalLayout
      controls={<Controls handleClose={toggle} progress={progress} />}
      //hideControlsBorder={true}
      {...props}
    >
      {/* <FormStep /> */}
    </ModalLayout>
  )
}
