import { useStateMachine, GlobalState } from 'little-state-machine'
import { useRouter } from 'next/router'
import { QuoteIntro } from './intro'
import { JobInformation, Step1 } from './step1'
import { AdditionalInformation, Step2 } from './step2'
import { ContactInformation, MarketingInformation, Step3 } from './step3'
import { ConfirmationPage } from './confirmation'
import { resetFormData } from '@lib/little-state-machine/actions'
import { encode } from '@lib/netlify/utils'
import { useEffect } from 'react'

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
}

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
  ...props
}) => {
  const router = useRouter()

  const { state, actions } = useStateMachine({ resetFormData })
  function changeStep(step: string) {
    router.push({
      pathname: `/promos/${router.query.pageSlug}`,
      query: { step },
    })
  }
  useEffect(() => {
    //@ts-ignore
    const { isComplete, ...formData } = state.formData.directMailForm
    if (router.query.resetForm) {
      actions.resetFormData('directMailForm')
    }
    if (router.query.step !== 'success' && isComplete) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .catch((error) => console.error(error))
        .finally(() => {
          changeStep('success')
        })
    }
  }, [router, state])

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
    case 'success' && state.formData.directMailForm.isComplete:
      Component = ConfirmationPage
      break
    default:
      Component = QuoteIntro
  }

  return <Component keyword={keyword} {...props} changeStep={changeStep} />
}