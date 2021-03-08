import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import {
  Flex,
  Box,
  Paragraph3,
  UI3,
  styled,
  Input,
  Checkbox,
  classes,
} from '@theme'
import { Button } from '@components/button'
import { QuoteFormInputData } from './landing-page-quote-form'
import { updateDirectMailForm } from '@lib/little-state-machine'
import MaskedInput from 'react-text-mask'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export type ContactAndMarketingInformation = ContactInformation &
  MarketingInformation

export interface ContactInformation {
  firstName?: string
  lastName?: string
  companyName?: string
  email?: string
  phone?: string
  country?: string
}

export interface MarketingInformation {
  joinMailingList?: boolean
  experienceRating?: string
  experienceComment?: string
  ipAddress?: string
  hutk?: string
  gclid?: string
  'bot-field-step3'?: any
  isComplete?: boolean
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

export interface Step3Props extends QuoteFormInputData {
  changeStep: (step: string) => unknown
  sendForm: () => void
  isSubmitting: boolean
  setSubmitting: () => void
  header: React.ReactNode
}

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

const phoneMask = [
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
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
}) => {
  const { state, actions } = useStateMachine({
    updateDirectMailForm,
  })
  const {
    register,
    handleSubmit,
    formState,
    errors,
  } = useForm<ContactAndMarketingInformation>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })
  const onSubmit = (data: ContactAndMarketingInformation) => {
    actions.updateDirectMailForm(data)
    sendForm()
  }
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
  return (
    <Form
      className={classes.fullHeight()}
      onSubmit={handleSubmit(onSubmit)}
      netlify-honeypot="bot-field-step3"
    >
      <Flex fillHeight column css={{ pb: '$4' }}>
        {header}
        <Box css={{ px: '$6', pb: '$4', flex: '1 1' }}>
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
        </Box>
        <Flex column css={{ mt: '$4', pb: '$4', mx: '$6' }}>
          <Button
            fullWidth
            size="cta"
            type="submit"
            css={{ alignSelf: 'center' }}
            color="success"
            disabled={!submittable}
            isLoading={isSubmitting}
          >
            <UI3 css={{ color: '$white' }}>Submit</UI3>
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}
