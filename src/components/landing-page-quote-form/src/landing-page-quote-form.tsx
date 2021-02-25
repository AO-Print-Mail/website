import { useStateMachine } from 'little-state-machine'
import { useRouter } from 'next/router'
import { QuoteIntro } from './intro'
import { JobInformation, Step1 } from './step1'
import { AdditionalInformation, Step2 } from './step2'
import { ContactInformation, MarketingInformation, Step3 } from './step3'
import { ConfirmationPage } from './confirmation'
import { resetFormData } from '@lib/little-state-machine/actions'
import { useEffect } from 'react'

export type QuoteFormInputData = JobInformation &
  AdditionalInformation &
  ContactInformation &
  MarketingInformation

interface LandingPageQuoteFormProps {
  keyword: string
}

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
  ...props
}) => {
  const router = useRouter()

  const { actions } = useStateMachine({ resetFormData })
  useEffect(() => {
    if (router.query.resetForm) {
      actions.resetFormData('directMailForm')
    }
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
    case 'complete':
      Component = ConfirmationPage
      break
    default:
      Component = QuoteIntro
  }
  function changeStep(step: string) {
    router.push({
      pathname: `/promos/${router.query.pageSlug}`,
      query: { step },
    })
  }

  return <Component keyword={keyword} {...props} changeStep={changeStep} />
}
