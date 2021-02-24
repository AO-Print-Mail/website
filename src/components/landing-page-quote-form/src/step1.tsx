import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph3, UI3, styled } from '@theme'
import { Button } from '@components/button'

export interface Step1Props extends JobInformation {}

export interface JobInformation {
  mailFormat: 'flyers' | 'brochures' | 'letters' | 'other' | '[not provided]'
  services: 'Print and mail' | 'Mail only' | '[not provided]'
  itemQuantity: number | '[not provided]'
  frequency: 'One-off' | 'daily' | 'weekly' | 'monthly' | '[not provided]'
  urgency: '[not provided]' //to be built
}

const Form = styled('form', {
  height: '100%',
})

export const Step1: React.FC<Step1Props> = ({}) => {
  const { register, handleSubmit, watch, errors } = useForm<JobInformation>()
  const onSubmit = (data) => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex fillHeight column css={{ px: '$6', py: '$4' }}>
        {/* register your input into the hook by invoking the "register" function */}
        <Box css={{ flex: '1 1' }}>
          <Paragraph3>What are you sending?</Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <input
              type="radio"
              id="format1"
              name="format"
              value="flyers"
              ref={register}
            />
            <label htmlFor="format1">Flyers</label>
            <input
              type="radio"
              id="format2"
              name="format"
              value="brochures"
              ref={register}
            />
            <label htmlFor="format2">Brochures</label>
            <input
              type="radio"
              id="format3"
              name="format"
              value="letters"
              ref={register}
            />
            <label htmlFor="format3">Letters</label>
            <input
              type="radio"
              id="format4"
              name="format"
              value="other"
              ref={register}
            />
            <label htmlFor="format4">Something else</label>
          </Box>
          <Paragraph3>Which services do you need?</Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <input
              type="radio"
              id="services1"
              name="services"
              value="Print and mail"
              ref={register}
            />
            <label htmlFor="services1">Printing and mailing</label>
            <input
              type="radio"
              id="services2"
              name="services"
              value="Mail only"
              ref={register}
            />
            <label htmlFor="services2">Mailing only</label>
          </Box>
          <Paragraph3>How many items? (approximate is fine)</Paragraph3>

          <Box css={{ mt: '$3', pb: '$2' }}>
            <input name="quantity" ref={register} type="number" />
          </Box>
          <Paragraph3>How often?</Paragraph3>
          <Box css={{ mt: '$3', pb: '$2' }}>
            <input
              type="radio"
              id="frequency1"
              name="frequency"
              value="One-off"
              ref={register}
            />
            <label htmlFor="frequency1">Once-off</label>
            <input
              type="radio"
              id="frequency1"
              name="frequency"
              value="daily"
              ref={register}
            />
            <label htmlFor="frequency1">Daily</label>
            <input
              type="radio"
              id="frequency2"
              name="frequency"
              value="weekly"
              ref={register}
            />
            <label htmlFor="frequency2">Weekly</label>
            <input
              type="radio"
              id="frequency3"
              name="frequency"
              value="monthly"
              ref={register}
            />
            <label htmlFor="frequency3">Monthly</label>
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
