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
import { AnimateSharedLayout, useMotionValue } from 'framer-motion'
import { useAnimationFeatures } from '@lib/react/animation-features'
import { TopBarControls } from './topBarControls'
import dynamic from 'next/dynamic'

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

const formSteps = {
  Step1: Step1, //dynamic(() => import('./step1').then((m) => m.Step1)),
  Step2: Step2, //dynamic(() => import('./step2').then((m) => m.Step2)),
  Step3: Step3, //dynamic(() => import('./step3').then((m) => m.Step3)),
  Success: dynamic(() =>
    import('./confirmation').then((m) => m.ConfirmationPage)
  ),
}

const WorkaroundForm = dynamic(() =>
  import('@components/netlify-workaraound-form').then(
    (res) => res.NetlifyWorkaroundForm
  )
)

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
  toggleIsOpen,
  isOpen,
  ...props
}) => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  const { step } = router.query
  const { state, actions } = useStateMachine({ resetFormData })
  useAnimationFeatures(['animateLayout', 'animation'])
  //@ts-ignore
  const { isComplete, ...directMailForm } = state.formData.directMailForm
  //@ts-ignore
  const { userData } = state

  const breakpoints = useBreakpoints()

  function changeStep(step: string) {
    setSubmitting(true)
    //@ts-ignore
    const newPath = router.pathname.replace('[pageSlug]', router.query.pageSlug)
    router.push(
      {
        pathname: `${newPath}`,
        query: { step },
      },
      null,
      { scroll: false, shallow: true }
    )
  }

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
        console.log(JSON.stringify(state, null, 4))
        resetForm()
      })
      .catch((error) => console.error(error))
  }

  let Component

  switch (step) {
    case '1':
      Component = formSteps.Step1
      break
    case '2':
      Component = formSteps.Step2
      break
    case '3':
      Component = formSteps.Step3
      break
    //@ts-ignore
    case 'success':
      Component = formSteps.Success
      break
    default:
      Component = QuoteIntro
  }

  useEffect(() => {
    if (router.query.resetForm) {
      resetForm()
    }
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

    setSubmitting(false)
  }, [step])

  return (
    <>
      <FormWrapper breakpoints={breakpoints} isOpen={isOpen}>
        <AnimateSharedLayout>
          <Component
            keyword={keyword}
            sendForm={router.query.step === '3' && sendForm}
            resetForm={resetForm}
            isSubmitting={isSubmitting}
            setSubmitting={setSubmitting}
            {...props}
            changeStep={changeStep}
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            header={<TopBarControls progress={progress} />}
          />
        </AnimateSharedLayout>
      </FormWrapper>
      <WorkaroundForm formData={{ ...directMailForm, ...userData }} />
    </>
  )
}
