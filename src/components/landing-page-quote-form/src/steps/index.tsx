import { useState } from 'react'
import { JobInformation, Step1 } from './step1'
import { AdditionalInformation, Step2 } from './step2'
import { ContactInformation, MetaInformation, Step3 } from './step3'
import { useStateMachine } from 'little-state-machine'
import { resetFormData } from '@lib/little-state-machine/actions'
import dynamic from 'next/dynamic'
import { encode } from '@lib/netlify/utils'
import { MotionValue } from 'framer-motion'
import { TopBarControls } from '../topBarControls'
import { FormSteps } from '../landing-page-quote-form'
import type { BreakpointsAry } from '@lib/react/breakpoints'

export type QuoteFormInputData = JobInformation &
  AdditionalInformation &
  ContactInformation &
  MetaInformation

export type FeedbackFormData = {
  email: string
  hutk: string
  ipAddress: string
  experienceRating: string
  experienceComment: string
  breakpoints: BreakpointsAry
}

const WorkaroundForm = dynamic(() =>
  import('@components/netlify-workaraound-form').then(
    (res) => res.NetlifyWorkaroundForm
  )
)

const SuccessPage = dynamic(() =>
  import('../confirmation').then((res) => res.ConfirmationPage)
)

export interface FormStepsProps {
  step: FormSteps
  isOpen: boolean
  toggleIsOpen: () => void
  changeStep: (a?: string) => void
  progress: MotionValue<number>
  breakpoints: BreakpointsAry
}

export const FormStepper: React.FC<FormStepsProps> = ({
  step,
  breakpoints,
  isOpen,
  toggleIsOpen,
  changeStep,
  progress,
}) => {
  const [isSubmitting, setSubmitting] = useState(false)

  const { state, actions } = useStateMachine({ resetFormData })

  const {
    //@ts-ignore
    formData: { directMailForm },
    //@ts-ignore
    userData,
  } = state

  const resetForm = () => actions.resetFormData('directMailForm')

  const sendForm = () => {
    setSubmitting(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'directMailForm', ...directMailForm }),
    })
      .then(() => {
        changeStep('success')
        resetForm()
      })
      .catch((error) => console.error(error))
  }

  let Component

  switch (step) {
    case '1':
      Component = Step1
      break
    case '2':
      Component = Step2
      break
    case '3':
      Component = Step3
      break
    case 'success':
      Component = SuccessPage
      break
    default:
      changeStep()
  }

  return (
    <>
      <Component
        sendForm={step === '3' && sendForm}
        resetForm={resetForm}
        isSubmitting={isSubmitting}
        setSubmitting={setSubmitting}
        changeStep={changeStep}
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
        progress={progress}
        header={
          <TopBarControls toggleIsOpen={toggleIsOpen} progress={progress} />
        }
        breakpoints={breakpoints}
      />
      <WorkaroundForm formData={{ ...directMailForm, ...userData }} />
    </>
  )
}
