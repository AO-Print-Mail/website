import { useStateMachine } from 'little-state-machine'
import { useRouter } from 'next/router'
import { QuoteIntro } from './intro'
import { JobInformation, Step1 } from './step1'
import { AdditionalInformation, Step2 } from './step2'
import { ContactInformation, MarketingInformation, Step3 } from './step3'
import { ConfirmationPage } from './confirmation'
import { resetFormData } from '@lib/little-state-machine/actions'
import { useBreakpoints } from '@lib/react/window-size'
import { encode } from '@lib/netlify/utils'
import { useEffect, useState } from 'react'
import {
  Flex,
  classes,
  ProgressBar,
  styled,
  ArrowBack,
  breakpoints,
} from '@theme'
import { Button } from '@components/button'
import { FormWrapper } from './wrapper'

export type QuoteFormInputData = JobInformation &
  AdditionalInformation &
  ContactInformation &
  MarketingInformation

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

const FormBackground = styled(Flex, { minHeight: '100%' })

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
  toggleIsOpen,
  isOpen,
  ...props
}) => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [progress, setProgress] = useState({ show: false, progress: 0 })
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

  useEffect(() => {
    if (router.query.resetForm) {
      resetForm()
    }
    setSubmitting(false)
  }, [router])

  let Component: React.FC<any>
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
    //@ts-ignore
    case 'success':
      Component = ConfirmationPage

      break
    default:
      Component = QuoteIntro
  }

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

  const form = (
    <Component
      keyword={keyword}
      sendForm={router.query.step === '3' && sendForm}
      resetForm={resetForm}
      isSubmitting={isSubmitting}
      setSubmitting={setSubmitting}
      {...props}
      changeStep={changeStep}
      setProgress={setProgress}
      isOpen={isOpen}
      toggleIsOpen={toggleIsOpen}
    />
  )

  return (
    <>
      <FormWrapper breakpoints={breakpoints} isOpen={isOpen}>
        {form}
      </FormWrapper>
      <NetlifyWorkaroundForm />
    </>
  )
}
