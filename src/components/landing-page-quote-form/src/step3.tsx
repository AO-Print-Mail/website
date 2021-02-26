import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph3, UI3, styled, Input, Checkbox } from '@theme'
import { Button } from '@components/button'
import { QuoteFormInputData } from './landing-page-quote-form'
import { updateDirectMailForm } from '@lib/little-state-machine'

export interface Step3Props extends QuoteFormInputData {
  changeStep: (step: string) => unknown
}

export type ContactAndMarketingInformation = ContactInformation &
  MarketingInformation

export interface ContactInformation {
  firstName?: ''
  lastName?: ''
  email?: ''
  phone?: ''
  country?: ''
}
export interface MarketingInformation {
  joinMailingList?: boolean
  experienceRating?: ''
  experienceComment?: '[not provided]'
  ipAddress?: ''
  hutk?: ''
  gclid?: ''
}

const Form = styled('form', {
  height: '100%',
})

export const Step3: React.FC<Step3Props> = ({ changeStep }) => {
  const { state, actions } = useStateMachine({
    updateDirectMailForm,
  })
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm<ContactAndMarketingInformation>()
  const onSubmit = (data: ContactAndMarketingInformation) => {
    actions.updateDirectMailForm(data)
    changeStep('complete')
  }
  const {
    firstName,
    lastName,
    email,
    phone,
    joinMailingList,
    //@ts-ignore
  } = state.formData?.directMailForm
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex fillHeight column css={{ px: '$6', py: '$4' }}>
        {/* register your input into the hook by invoking the "register" function */}
        <Box css={{ flex: '1 1' }}>
          <Paragraph3 css={{ color: '$DA80' }}>
            Your contact information
          </Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <Flex css={{ mx: '-$2' }}>
              <Input
                ref={register}
                id="firstName"
                name="firstName"
                placeholder="Jane"
                defaultValue={firstName}
                css={{ px: '$2' }}
              >
                First name
              </Input>
              <Input
                ref={register}
                id="lastName"
                name="lastName"
                placeholder="Appleseed"
                defaultValue={lastName}
                css={{ px: '$2' }}
              >
                Last name
              </Input>
            </Flex>
            <Input
              ref={register}
              id="email"
              name="email"
              placeholder="jane@example.com.au"
              type="email"
              defaultValue={email}
            >
              Email Address
            </Input>
            <Input
              ref={register}
              id="phone"
              name="phone"
              placeholder="04xx xxx xxx"
              defaultValue={phone}
            >
              Phone number
            </Input>
          </Box>
          <Checkbox
            ref={register}
            id="joinMailingList"
            name="joinMailingList"
            defaultChecked={joinMailingList}
          >
            I’d like to keep updated with news and special offers at A&O
          </Checkbox>
        </Box>
        <Flex column css={{ mt: '$4', pb: '$4', mx: '$6' }}>
          <Button
            fullWidth
            size="cta"
            type="submit"
            css={{ alignSelf: 'center' }}
            color="success"
          >
            <UI3 css={{ color: '$white' }}>Submit</UI3>
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}
