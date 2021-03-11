import { useState } from 'react'
import { JobInformation, Step1Form, Step1Controls } from './step1'
import { AdditionalInformation, Step2Form, Step2Controls } from './step2'
import {
  ContactInformation,
  MetaInformation,
  Step3Form,
  Step3Controls,
} from './step3'
import { useStateMachine } from 'little-state-machine'
import { resetFormData } from '@lib/little-state-machine/actions'
import dynamic from 'next/dynamic'
import { encode } from '@lib/netlify/utils'
import { MotionValue, AnimatePresence, motion } from 'framer-motion'
import { TopBarControls } from '../topBarControls'
import { FormSteps } from '../landing-page-quote-form'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { Box } from '@theme'
import { StepWrapper } from './stepWrapper'
import { ConfirmationPage } from './confirmation'
import { useAnimationFeatures } from '@lib/react/animation-features'

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
  useAnimationFeatures(['exit', 'animation'])

  let Main, Footer

  switch (step) {
    case '1':
      Main = Step1Form
      Footer = Step1Controls
      break
    case '2':
      Main = Step2Form
      Footer = Step2Controls
      break
    case '3':
      Main = Step3Form
      Footer = Step3Controls
      break
    case 'success':
      Main = ConfirmationPage
      Footer = null
      break
    default:
      changeStep()
  }

  return (
    <Box
      css={{
        when: {
          l: {
            height: 'calc(800px - 20vh)',
            position: 'sticky',
            top: '$5',
          },
        },
      }}
      as={motion.div}
      layout
    >
      <StepWrapper
        isSubmitting={isSubmitting}
        isOpen={isOpen}
        breakpoints={breakpoints}
        success={step === 'success'}
        main={
          <Main
            sendForm={step === '3' && sendForm}
            resetForm={resetForm}
            isSubmitting={isSubmitting}
            setSubmitting={setSubmitting}
            changeStep={changeStep}
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            progress={progress}
            breakpoints={breakpoints}
          />
        }
        header={
          <TopBarControls
            success={step === 'success'}
            toggleIsOpen={toggleIsOpen}
            progress={progress}
          />
        }
        footer={
          Footer && (
            <Footer
              isSubmitting={isSubmitting}
              isOpen={isOpen}
              toggleIsOpen={toggleIsOpen}
            ></Footer>
          )
        }
      />
      <WorkaroundForm formData={{ ...directMailForm, ...userData }} />
    </Box>
  )
}
