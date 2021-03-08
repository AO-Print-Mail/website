import { useStateMachine } from 'little-state-machine'
import { useRouter } from 'next/router'
import { QuoteIntro } from './intro'
import { JobInformation } from './step1'
import { AdditionalInformation } from './step2'
import { ContactInformation, MetaInformation } from './step3'
import { resetFormData } from '@lib/little-state-machine/actions'
import { useBreakpoints } from '@lib/react/breakpoints'
import { encode } from '@lib/netlify/utils'
import { useEffect, useState } from 'react'
import { classes } from '@theme'
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

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
  toggleIsOpen,
  isOpen,
  ...props
}) => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  const { state, actions } = useStateMachine({ resetFormData })
  //@ts-ignore
  const { isComplete, ...directMailForm } = state.formData.directMailForm
  //@ts-ignore
  const { userData } = state

  const breakpoints = useBreakpoints()

  function changeStep(step: string) {
    setSubmitting(true)
    //@ts-ignore
    const newPath = router.pathname.replace('[pageSlug]', router.query.pageSlug)
    router.push({
      pathname: `${newPath}`,
      query: { step },
    })
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

  const Step1 = () => dynamic(() => import('./step1').then((m) => m.Step1))
  switch (router.query.step) {
    case '1':
      Component = Step1()
      progress !== 30 && setProgress(30)
      break
    case '2':
      Component = dynamic(() => import('./step2').then((m) => m.Step2))
      progress !== 70 && setProgress(70)
      break
    case '3':
      Component = dynamic(() => import('./step3').then((m) => m.Step3))
      progress !== 90 && setProgress(90)
      break
    //@ts-ignore
    case 'success':
      Component = dynamic(() =>
        import('./confirmation').then((m) => m.ConfirmationPage)
      )
      progress !== 100 && setProgress(100)
      break
    default:
      Component = QuoteIntro
      progress !== 0 && setProgress(0)
  }

  useEffect(() => {
    if (router.query.resetForm) {
      resetForm()
    }

    setSubmitting(false)
  }, [router])

  const NetlifyWorkaroundForm = () => {
    return (
      <form
        method="POST"
        data-netlify="true"
        name="directMailForm"
        aria-hidden="true"
        hidden
        className={classes.visuallyHidden()}
      >
        <input
          type="hidden"
          hidden
          aria-hidden="true"
          name="form-name"
          value="directMailForm"
        />
        {Object.entries(directMailForm)
          .concat(Object.entries(userData))
          .map(([name, value]) => (
            <input
              type="hidden"
              hidden
              aria-hidden="true"
              tabIndex={-1}
              name={name}
              //@ts-ignore
              value={value || ''}
              key={name}
            />
          ))}
      </form>
    )
  }
  useAnimationFeatures(['animateLayout'])

  return (
    <AnimateSharedLayout>
      <FormWrapper breakpoints={breakpoints} isOpen={isOpen}>
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
      </FormWrapper>
      <NetlifyWorkaroundForm />
    </AnimateSharedLayout>
  )
}
