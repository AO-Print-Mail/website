import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, RadioButton, Input, Paragraph3, styled } from '@theme'
import type { FormSteps } from '../landing-page-quote-form'
import { FormStepControls } from '../formStepControls'
import { updateDirectMailForm } from '@lib/little-state-machine'
import { MotionValue } from 'framer-motion'
import { StepWrapper } from './stepWrapper'
import type { BreakpointsAry } from '@lib/react/breakpoints'

export interface Step1Props extends JobInformation {
  changeStep: (step: string) => unknown
  isSubmitting: boolean
  setSubmitting: () => void
  header: React.ReactNode
  progress: MotionValue<number>
  breakpoints: BreakpointsAry
  step: FormSteps
  isOpen: boolean
  toggleIsOpen: () => void
}

export interface JobInformation {
  mailFormat?:
    | 'flyers/postcards'
    | 'brochures'
    | 'letters'
    | 'plastic wrap'
    | 'other'
    | 'not provided'
  services?: 'Print and mail' | 'Mail only' | 'not provided'
  itemQuantity?: number | 'not provided'
  frequency?: 'One-off' | 'daily' | 'weekly' | 'monthly' | 'not provided'
  urgency?: 'not provided' //to be built
}

const Form = styled('form', {
  height: '100%',
})

export const Step1: React.FC<Step1Props> = ({
  changeStep,
  isSubmitting,
  header,
  progress,
  breakpoints,
  isOpen,
  setSubmitting,
  step,
  toggleIsOpen,
  ...props
}) => {
  const { state, actions } = useStateMachine({ updateDirectMailForm })
  const { register, handleSubmit, errors } = useForm<JobInformation>()
  const onSubmit = (data) => {
    actions.updateDirectMailForm({ ...data })
    changeStep('2')
  }
  const {
    mailFormat,
    services,
    itemQuantity,
    frequency,
    //@ts-ignore
  } = state.formData?.directMailForm
  progress.set(30)
  const formName = 'step1form'

  return (
    <StepWrapper
      breakpoints={breakpoints}
      onSubmit={handleSubmit(onSubmit)}
      header={header}
      isOpen={isOpen}
      formName={formName}
      isSubmitting={isSubmitting}
      setSubmitting={setSubmitting}
      toggleIsOpen={toggleIsOpen}
      formFields={({ childrenAnimationVariants }) => (
        <>
          <Paragraph3 css={{ color: '$DA80' }}>
            What are you sending?
          </Paragraph3>
          <Flex wrap css={{ mt: '$3', pb: '$3' }}>
            <RadioButton
              id="format1"
              name="mailFormat"
              ref={register}
              value="flyers/postcards"
              defaultChecked={mailFormat === 'flyers/postcards'}
            >
              Flyers / Postcards
            </RadioButton>
            <RadioButton
              id="format2"
              name="mailFormat"
              ref={register}
              value="brochures"
              defaultChecked={mailFormat === 'brochures'}
            >
              Brochures
            </RadioButton>
            <RadioButton
              id="format3"
              name="mailFormat"
              ref={register}
              value="letters"
              defaultChecked={mailFormat === 'letters'}
            >
              Letters
            </RadioButton>
            <RadioButton
              id="format4"
              name="mailFormat"
              ref={register}
              value="plastic wrap"
              defaultChecked={mailFormat === 'plastic wrap'}
            >
              Plastic wrap
            </RadioButton>
            <RadioButton
              id="format5"
              name="mailFormat"
              ref={register}
              value="other"
              defaultChecked={mailFormat === 'other'}
            >
              Something else
            </RadioButton>
          </Flex>
          <Paragraph3 css={{ color: '$DA80' }}>
            Which services do you need?
          </Paragraph3>
          <Flex wrap css={{ mt: '$3', pb: '$3' }}>
            <RadioButton
              id="services1"
              name="services"
              ref={register}
              value="Print and mail"
              defaultChecked={services === 'Print and mail'}
            >
              Printing and mailing
            </RadioButton>
            <RadioButton
              id="services2"
              name="services"
              ref={register}
              value="Mail only"
              defaultChecked={services === 'Mail only'}
            >
              Mailing only
            </RadioButton>
          </Flex>
          <Paragraph3
            as="label"
            htmlFor="quantity"
            css={{ display: 'block', color: '$DA80' }}
          >
            How many items? (approximate is fine)
          </Paragraph3>

          <Box css={{ mt: '$3', pb: '$2' }}>
            <Input
              name="itemQuantity"
              id="quantity"
              ref={register}
              type="number"
              defaultValue={itemQuantity}
            />
          </Box>
          <Paragraph3 css={{ color: '$DA80' }}>How often?</Paragraph3>
          <Flex wrap css={{ mt: '$3', pb: '$3' }}>
            <RadioButton
              id="frequency1"
              name="frequency"
              ref={register}
              value="One-off"
              defaultChecked={frequency === 'One-off'}
            >
              Once-off
            </RadioButton>
            <RadioButton
              id="frequency2"
              name="frequency"
              ref={register}
              value="daily"
              defaultChecked={frequency === 'daily'}
            >
              Daily
            </RadioButton>
            <RadioButton
              id="frequency3"
              name="frequency"
              ref={register}
              value="weekly"
              defaultChecked={frequency === 'weekly'}
            >
              Weekly
            </RadioButton>
            <RadioButton
              id="frequency4"
              name="frequency"
              ref={register}
              value="monthly"
              defaultChecked={frequency === 'monthly'}
            >
              Monthly
            </RadioButton>
          </Flex>
        </>
      )}
      footer={
        <FormStepControls
          isOpen={isOpen}
          isSubmitting={isSubmitting}
          buttonLabel={isOpen ? 'Next' : 'Continue your quote'}
          buttonOnClick={(e: React.PointerEvent) => {
            if (!isOpen) {
              e.preventDefault()
              toggleIsOpen()
            }
          }}
          formName={formName}
          toggleIsOpen={toggleIsOpen}
        />
      }
    />
  )
}
