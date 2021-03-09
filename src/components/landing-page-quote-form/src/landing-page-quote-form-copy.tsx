import { useStateMachine } from 'little-state-machine'
import { useRouter } from 'next/router'
import { QuoteIntro } from './intro'
import { JobInformation, Step1 } from './step1'
import { AdditionalInformation, Step2 } from './step2'
import { ContactInformation, MetaInformation, Step3 } from './step3'
import { resetFormData } from '@lib/little-state-machine/actions'
import { useBreakpoints } from '@lib/react/breakpoints'
import { encode } from '@lib/netlify/utils'
import { useEffect, useState } from 'react'
import { FormWrapper } from './wrapper'
import dynamic from 'next/dynamic'

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
  isOpen: boolean
  toggleIsOpen: () => void
}

const FormStepper = dynamic(() =>
  import('./steps').then((res) => res.FormStepper)
)

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
  toggleIsOpen,
  isOpen,
  ...props
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

  function changeStep(newStep?: string) {
    setSubmitting(true)
    //@ts-ignore
    const newPath = router.pathname.replace('[pageSlug]', router.query.pageSlug)
    router.push(
      {
        pathname: `${newPath}`,
        query: newStep ? { ...queries, step: newStep } : queries,
      },
      null,
      { shallow: true, scroll: false }
    )
  }

  const reset = () => actions.resetFormData('directMailForm')

  useEffect(() => {
    if (resetForm) {
      reset()
      changeStep()
    }
    setSubmitting(false)
  }, [step])

  const formControls = {
    step,
    isOpen,
    isSubmitting,
    changeStep,
    toggleIsOpen,
  }

  return (
    <FormWrapper breakpoints={breakpoints} isOpen={isOpen}>
      {step ? (
        <FormStepper {...formControls} />
      ) : (
        <QuoteIntro {...formControls} />
      )}
    </FormWrapper>
  )
}
