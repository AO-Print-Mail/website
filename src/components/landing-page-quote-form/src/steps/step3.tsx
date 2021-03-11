import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph3, styled, Input, Checkbox, classes } from '@theme'
import { updateDirectMailForm } from '@lib/little-state-machine'
import MaskedInput from 'react-text-mask'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { MotionValue } from 'framer-motion'
import { FormStepControls } from '../formStepControls'
import { StepWrapper } from './stepWrapper'
import type { BreakpointsAry } from '@lib/react/breakpoints'

export type ContactAndMetaInformation = ContactInformation & MetaInformation

export interface Step3Props extends ContactAndMetaInformation {
  changeStep: (step: string) => unknown
  sendForm: () => void
  isSubmitting: boolean
  setSubmitting: (a: boolean) => void
  header: React.ReactNode
  progress: MotionValue<number>
  breakpoints: BreakpointsAry
  isOpen: boolean
  toggleIsOpen: () => void
}

export interface ContactInformation {
  firstName?: string
  lastName?: string
  companyName?: string
  email?: string
  phone?: string
  country?: string
}

export interface MetaInformation {
  'bot-field-step3'?: any
  landingPageKeyword?: string
  joinMailingList?: boolean
}

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter a first name'),
  lastName: yup.string(),
  companyName: yup.string(),
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('We need an email to send your quote!'),
  phone: yup
    .string()
    .required(`Please enter a telephone number`)
    .min(9, 'Please enter a full telephone number')
    .max(14, 'The telephone number you entered seems too long.'),
  country: yup.string(),
})

const mobileMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
]

const Form = styled('form', {
  height: '100%',
})

export const Step3: React.FC<Step3Props> = ({
  sendForm,
  isSubmitting,
  header,
  progress,
  breakpoints,
  toggleIsOpen,
  setSubmitting,
  isOpen,
}) => {
  const { state, actions } = useStateMachine({
    updateDirectMailForm,
  })
  const {
    register,
    handleSubmit,
    formState,
    errors,
  } = useForm<ContactAndMetaInformation>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const submit = (data: ContactAndMetaInformation) => {
    actions.updateDirectMailForm(data)
    sendForm()
  }

  const onSubmit = (data: ContactAndMetaInformation) => {
    setSubmitting(true)
    window && window.setTimeout(submit, 1500, data)
  }
  progress.set(100)
  const {
    firstName,
    lastName,
    companyName,
    email,
    phone,
    joinMailingList,
    //@ts-ignore
  } = state.formData?.directMailForm
  const [submittable, setSubmittable] = useState(false)
  useEffect(() => {
    if (formState.isValid) {
      setSubmittable(true)
    } else {
      setSubmittable(false)
    }
  }, [formState])
  const formName = 'step3form'
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
          <Paragraph3 css={{ color: '$DA80', mt: '$2' }}>
            Your contact information
          </Paragraph3>
          <Box css={{ my: '$4', pb: '$2' }}>
            <Flex css={{ mx: '-$2' }}>
              <Input
                ref={register}
                id="firstName"
                name="firstName"
                placeholder="Jane"
                defaultValue={firstName}
                css={{ px: '$2' }}
                errors={errors}
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
                errors={errors}
              >
                Last name
              </Input>
            </Flex>
            <Input
              ref={register}
              id="companyName"
              name="companyName"
              placeholder="Acme inc"
              defaultValue={companyName}
              errors={errors}
            >
              Company name
            </Input>
            <Input
              ref={register}
              id="email"
              name="email"
              placeholder="jane@example.com.au"
              type="email"
              defaultValue={email}
              errors={errors}
            >
              Email address
            </Input>
            <MaskedInput
              id="phone"
              placeholder="04xx xxx xxx"
              mask={mobileMask}
              inputMode="numeric"
              guide={false}
              type="text"
              defaultValue={phone}
              errors={errors}
              render={(textMaskRef, props) => (
                <Input
                  ref={(node) => {
                    textMaskRef(node)
                    register(node)
                  }}
                  name="phone"
                  {...props}
                >
                  Contact number
                </Input>
              )}
            ></MaskedInput>
          </Box>
          <Checkbox
            ref={register}
            id="joinMailingList"
            name="joinMailingList"
            defaultChecked={joinMailingList}
          >
            I’d like to keep updated with news and special offers at A&O
          </Checkbox>
          <p aria-hidden="true" className={classes.visuallyHidden()}>
            <label>
              Skip this field if you’re human:
              <input tabIndex={-1} ref={register} name="bot-field-step3" />
            </label>
          </p>
        </>
      )}
      footer={
        <FormStepControls
          isOpen={isOpen}
          isSubmitting={isSubmitting}
          buttonLabel={isOpen ? 'Submit quote request' : 'Continue your quote'}
          buttonOnClick={(e: React.PointerEvent) => {
            if (!isOpen) {
              e.preventDefault()
              toggleIsOpen()
            }
          }}
          buttonColor="success"
          formName={formName}
          toggleIsOpen={toggleIsOpen}
        />
      }
    />
  )
}
