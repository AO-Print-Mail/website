import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph3, UI3, styled } from '@theme'
import { Button } from '@components/button'
import { QuoteFormInputData } from './landing-page-quote-form'

export interface Step3Props extends QuoteFormInputData {}

export interface ContactAndMarketingInformation {
  contactInformation: ContactInformation
  marketingInformation: MarketingInformation
}

export interface ContactInformation {
  firstName: ''
  lastName: ''
  email: ''
  telephoneNumber: ''
  mobileNumber: ''
  country: ''
}
export interface MarketingInformation {
  joinMailingList: ''
  experienceRating: ''
  experienceComment: '[not provided]'
  ipAddress: ''
  hutk: ''
  gclid: ''
}

const Form = styled('form', {
  height: '100%',
})

export const Step3: React.FC<Step3Props> = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm<ContactAndMarketingInformation>()
  const onSubmit = (data) => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex fillHeight column css={{ px: '$6', py: '$4' }}>
        {/* register your input into the hook by invoking the "register" function */}
        <Box css={{ flex: '1 1' }}>
          <Paragraph3>Do you have artwork ready for printing?</Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <input
              type="radio"
              id="artworkReady1"
              name="artworkReady"
              value="yes"
            />
            <label htmlFor="artworkReady1">Yes</label>
            <input
              type="radio"
              id="artworkReady2"
              name="artworkReady"
              value="no"
            />
            <label htmlFor="artworkReady2">Not yet</label>
            <input
              type="radio"
              id="artworkReady3"
              name="artworkReady"
              value="interested in print design"
            />
            <label htmlFor="artworkReady3">Interested in print design</label>
          </Box>
          <Paragraph3>Is your address data ready to use?</Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <input
              type="radio"
              id="addressDataReady1"
              name="addressDataReady"
              value="yes"
            />
            <label htmlFor="addressDataReady1">Yes</label>
            <input
              type="radio"
              id="addressDataReady2"
              name="addressDataReady"
              value="no"
            />
            <label htmlFor="addressDataReady2">Not yet</label>
            <input
              type="radio"
              id="addressDataReady3"
              name="addressDataReady"
              value="interested in buying a list"
            />
            <label htmlFor="addressDataReady3">
              Interested in buying a list
            </label>
          </Box>
          <Paragraph3 as="label" htmlFor="additionalInformation">
            Additional information(optional)
          </Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <textarea
              id="additionalInformation"
              name="additionalInformation"
              rows={5}
              cols={33}
              placeholder="Please include any additional information that is applicable to your job."
            ></textarea>
          </Box>
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
