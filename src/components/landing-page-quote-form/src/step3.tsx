import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph3, UI3, styled, Phone } from '@theme'
import { Button } from '@components/button'
import { QuoteFormInputData } from './landing-page-quote-form'
import {
  updateContactInformation,
  updateMarketingInformation,
} from '@lib/little-state-machine'

export interface Step3Props extends QuoteFormInputData {
  changeStep: (step: string) => unknown
}

export interface ContactAndMarketingInformation {
  contactInformation: ContactInformation
  marketingInformation: MarketingInformation
}

export interface ContactInformation {
  firstName: ''
  lastName: ''
  email: ''
  phone: ''
  country: ''
}
export interface MarketingInformation {
  joinMailingList: boolean
  experienceRating: ''
  experienceComment: '[not provided]'
  ipAddress: ''
  hutk: ''
  gclid: ''
}

const Form = styled('form', {
  height: '100%',
})

export const Step3: React.FC<Step3Props> = ({ changeStep }) => {
  const { state, actions } = useStateMachine({
    updateContactInformation,
    updateMarketingInformation,
  })
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm<ContactAndMarketingInformation>()
  const onSubmit = ({ joinMailingList, ...rest }) => {
    //@ts-expect-error
    actions.updateMarketingInformation({ joinMailingList })
    //@ts-expect-error
    actions.updateContactInformation({ ...rest })
    changeStep('complete')
  }
  const {
    firstName,
    lastName,
    email,
    phone,
    //@ts-expect-error
  } = state.formData?.directMailForm?.contactInformation
  const {
    joinMailingList,
    //@ts-expect-error
  } = state.formData?.directMailForm?.marketingInformation
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex fillHeight column css={{ px: '$6', py: '$4' }}>
        {/* register your input into the hook by invoking the "register" function */}
        <Box css={{ flex: '1 1' }}>
          <Paragraph3 css={{ color: '$DA80' }}>
            Your contact information
          </Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <label htmlFor="firstName">First name</label>
            <input
              ref={register}
              id="firstName"
              name="firstName"
              placeholder="Jane"
              defaultValue={firstName}
            />
            <label htmlFor="lastName">Last name (optional)</label>
            <input
              ref={register}
              id="lastName"
              name="lastName"
              placeholder="Appleseed"
              defaultValue={lastName}
            />
            <label htmlFor="email">Email address</label>
            <input
              ref={register}
              id="email"
              name="email"
              placeholder="jane@example.com.au"
              type="email"
              defaultValue={email}
            />
            <label htmlFor="phone">Preferred contact number</label>
            <input
              ref={register}
              id="phone"
              name="phone"
              placeholder="04xx xxx xxx"
              defaultValue={phone}
            />
          </Box>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <input
              ref={register}
              id="joinMailingList"
              type="checkbox"
              name="joinMailingList"
              placeholder="04xx xxx xxx"
              defaultChecked={joinMailingList}
            />
          </Box>
          <label htmlFor="joinMailingList">
            I’d like to keep updated with news and special offers at A&O
          </label>
        </Box>
        <Flex column css={{ mt: '$4', pb: '$4', mx: '$6' }}>
          <Button fullWidth type="submit" css={{ alignSelf: 'center' }}>
            <UI3 css={{ color: '$white' }}>Next</UI3>
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}
