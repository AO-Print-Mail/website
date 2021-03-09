import { useState, useEffect } from 'react'
import { JobInformation, Step1 } from './step1'
import { AdditionalInformation, Step2 } from './step2'
import { ContactInformation, MetaInformation, Step3 } from './step3'
import { useStateMachine } from 'little-state-machine'
import { resetFormData } from '@lib/little-state-machine/actions'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { encode } from '@lib/netlify/utils'
import { AnimateSharedLayout, useMotionValue } from 'framer-motion'
import { useAnimationFeatures } from '@lib/react/animation-features'
import { TopBarControls } from '../topBarControls'
import { FormSteps } from '../landing-page-quote-form-copy'

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
}

export const FormStepper: React.FC<FormStepsProps> = ({
  step,
  isOpen,
  toggleIsOpen,
  changeStep,
}) => {
  const [isSubmitting, setSubmitting] = useState(false)

  const [progress, setProgress] = useState(0)

  const router = useRouter()

  const { state, actions } = useStateMachine({ resetFormData })

  useAnimationFeatures(['animateLayout', 'animation'])

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

  switch (router.query.step) {
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

  useEffect(() => {
    switch (step) {
      case '1':
        setProgress(30)
        break
      case '2':
        setProgress(60)
        break
      case '3':
        setProgress(90)
        break
      //@ts-ignore
      case 'success':
        setProgress(100)
        break
      default:
        setProgress(0)
    }
  }, [step])

  return (
    <>
      <AnimateSharedLayout>
        <Component
          sendForm={router.query.step === '3' && sendForm}
          resetForm={resetForm}
          isSubmitting={isSubmitting}
          setSubmitting={setSubmitting}
          changeStep={changeStep}
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
          header={<TopBarControls progress={progress} />}
        />
      </AnimateSharedLayout>
      <WorkaroundForm formData={{ ...directMailForm, ...userData }} />
    </>
  )
}
