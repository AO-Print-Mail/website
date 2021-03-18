import { useStateMachine } from 'little-state-machine'
import { useRouter } from 'next/router'
import { QuoteIntro, BlankSkeletonScreen } from './intro'
import { resetFormData } from '@lib/little-state-machine/actions'
import { useBreakpoints } from '@lib/react/breakpoints'
import { useEffect, useState } from 'react'
import { FormWrapper } from './quoteFormWrapper'
import dynamic from 'next/dynamic'
import { useCycle, useMotionValue } from 'framer-motion'

export type FormSteps = '1' | '2' | '3' | 'success'

export type { QuoteFormInputData, FeedbackFormData } from './steps'

interface LandingPageQuoteFormProps {
  keyword: string
}

const FormStepper = dynamic(
  () => import('./steps').then((res) => res.FormStepper),
  {
    loading: () => <BlankSkeletonScreen />,
  }
)

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
}) => {
  const [isSubmitting, setSubmitting] = useState(false)
  const router = useRouter()
  const {
    step,
    resetForm,
    pageSlug,
  }: { [k: string]: any; step?: FormSteps } = router.query
  const { actions } = useStateMachine({ resetFormData })

  const breakpoints = useBreakpoints()
  const progress = useMotionValue(0)
  const [isOpen, toggleIsOpen] = useCycle(false, true)

  function changeStep(newStep?: string) {
    //@ts-ignore
    const newPath = router.pathname.replace('[pageSlug]', pageSlug)
    router.push(
      {
        pathname: `${newPath}`,
        query: newStep ? { step: newStep } : {},
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
