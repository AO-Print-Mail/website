import { useStateMachine } from 'little-state-machine'
import { QuoteFormInputData } from './landing-page-quote-form'
import { Heading5, Paragraph4, Flex, Box, UI3 } from '@theme'
import { Button } from '@components/button'

export interface ConfirmationPageProps extends QuoteFormInputData {}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = (props) => {
  const { state } = useStateMachine()
  const name = state.formData.directMailForm.contactInformation.firstName
  console.log(JSON.stringify(state, null, 4))
  return (
    <Flex
      fillHeight
      column
      css={{ px: '$6', py: '$4', backgroundColor: '$green' }}
    >
      <Box css={{ flex: '1 1' }}>
        <Heading5 alignCenter css={{ color: '$white' }}>
          Your quote is in progress{name && `, ${name}`}!
        </Heading5>
        <Paragraph4 css={{ color: '$LA90' }} alignCenter>
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
        {/*<pre>{JSON.stringify(state, null, 2)}</pre>*/}
      </Box>
      <Flex column css={{ mt: '$4', pb: '$4', mx: '$6' }}>
        <Button
          color="light"
          fullWidth
          type="submit"
          css={{ alignSelf: 'center' }}
        >
          <UI3>Start again</UI3>
        </Button>
      </Flex>
    </Flex>
  )
}
