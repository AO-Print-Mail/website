import { useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import { QuoteFormInputData } from '../landing-page-quote-form'
import { Heading4, Paragraph4, Box } from '@theme'
import {
  resetFormData,
  updateFeedbackFormForm,
} from '@lib/little-state-machine'

export interface ConfirmationPageProps extends QuoteFormInputData {
  changeStep: (step?: string) => unknown
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  changeStep,
  ...props
}) => {
  const { state, actions } = useStateMachine({
    resetFormData,
    updateFeedbackFormForm,
  })
  //@ts-ignore
  const { firstName, email } = state.formData?.directMailForm

  useEffect(() => {
    actions.updateFeedbackFormForm({ firstName, email })
  }, [])

  return (
    <Box>
      <Box css={{ flex: '1 1' }}>
        <Heading4 alignCenter css={{ color: '$white' }}>
          Your quote is in progress{firstName && `, ${firstName}`}!
        </Heading4>
        <Paragraph4 css={{ color: '$LA90', mt: '$6' }} alignCenter>
          Thanks so much for giving us the opportunity to quote on your next
          job!
        </Paragraph4>
        <Paragraph4 css={{ color: '$LA90' }} alignCenter>
          A direct mail specialist is reviewing your requirements. Please keep
          checking your inbox for your quote to arrive.
        </Paragraph4>
        <Paragraph4 css={{ color: '$LA90' }} alignCenter>
          If we have any questions we will contact you via email or your
          preferred contact number.
        </Paragraph4>
      </Box>
    </Box>
  )
}
