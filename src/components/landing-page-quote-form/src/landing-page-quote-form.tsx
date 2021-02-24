import { StateMachineProvider, createStore } from 'little-state-machine'
import { useRouter } from 'next/router'
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
  const {
    query: { step },
  } = useRouter()
  let Component
  switch (step) {
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

  return (
    <StateMachineProvider>
      <Component keyword={keyword} {...props} />
    </StateMachineProvider>
  )
}
