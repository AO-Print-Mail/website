import { useStateMachine } from 'little-state-machine'
import { useRouter } from 'next/router'
import { QuoteIntro } from './steps/intro'
import { JobInformation } from './steps/step1'
import { AdditionalInformation } from './steps/step2'
import { ContactInformation, MetaInformation } from './steps/step3'
import { resetFormData } from '@lib/little-state-machine/actions'
import { useBreakpoints } from '@lib/react/breakpoints'
import { useEffect, useState } from 'react'
import { FormWrapper } from './quoteFormWrapper'
import dynamic from 'next/dynamic'
import { useCycle, useMotionValue } from 'framer-motion'

export type FormSteps = '1' | '2' | '3' | 'success'

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

interface LandingPageQuoteFormProps {
  keyword: string
}

const FormStepper = dynamic(() =>
  import('./steps').then((res) => res.FormStepper)
)

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
}) => {
  const [isSubmitting, setSubmitting] = useState(false)
  const router = useRouter()
  const {
    step,
    resetForm,
    ...queries
  }: { [k: string]: any; step?: FormSteps } = router.query
  const { actions } = useStateMachine({ resetFormData })

  const breakpoints = useBreakpoints()
  const progress = useMotionValue(0)
  const [isOpen, toggleIsOpen] = useCycle(false, true)

  function changeStep(newStep?: string) {
    //@ts-ignore
    const newPath = router.pathname.replace('[pageSlug]', router.query.pageSlug)
    router.push(
      {
        pathname: `${newPath}`,
        query: newStep ? { ...queries, step: newStep } : queries,
      },
      null,
      { shallow: true }
    )
  }

  const reset = () => actions.resetFormData('directMailForm')
  const isNotDesktop = !breakpoints.includes('l')

  useEffect(() => {
    if (resetForm) {
      reset()
      changeStep()
    }
  }, [step])

  useEffect(() => {
    switch (step) {
      case '1':
        break
      case '2':
        break
      case '3':
        break
      //@ts-ignore
      case 'success':
        break
      default:
        progress.set(0)
    }
  }, [router])

  const formControls = {
    step,
    isOpen: isNotDesktop ? isOpen : true,
    isSubmitting,
    changeStep,
    toggleIsOpen,
    setSubmitting,
    progress,
    breakpoints,
    keyword,
  }

  return (
    <FormWrapper {...formControls}>
      {step ? (
        <FormStepper {...formControls} />
      ) : (
        <QuoteIntro {...formControls} />
      )}
    </FormWrapper>
  )
}
