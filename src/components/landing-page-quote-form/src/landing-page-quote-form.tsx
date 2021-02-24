import { StateMachineProvider, createStore } from 'little-state-machine'
import { Router, useRouter } from 'next/router'
import { QuoteIntro } from './intro'
import { JobInformation, Step1 } from './step1'
import { AdditionalInformation, Step2 } from './step2'
import { ContactInformation, MarketingInformation, Step3 } from './step3'
import { ConfirmationPage } from './confirmation'

export type QuoteFormInputData = {
  jobInformation: JobInformation
  additionalInformation: AdditionalInformation
  contactInformation: ContactInformation
  marketingInformation: MarketingInformation
}

interface LandingPageQuoteFormProps {
  keyword: string
}

export const LandingPageQuoteForm: React.FC<LandingPageQuoteFormProps> = ({
  keyword,
  ...props
}) => {
  const router = useRouter()

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

  return (
    <StateMachineProvider>
      <Component keyword={keyword} {...props} changeStep={changeStep} />
    </StateMachineProvider>
  )
}
