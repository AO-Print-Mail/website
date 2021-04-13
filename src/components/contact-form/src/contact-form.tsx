import { styled, Card, Flex, Box, Input, Checkbox, classes } from '@theme'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { encode } from '@lib/netlify/utils'

const FORM_NAME = 'contactForm'

interface ContactFormProps {}

const inputs = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  message: '',
  joinMailingList: false,
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
  message: yup.string(),
  joinMailingList: yup.boolean(),
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

const Background = styled(Card, {
  height: '768px',
  boxShadow: '$1',
})

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { register, handleSubmit, formState, errors } = useForm<typeof inputs>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })
  const [submitting, setSubmitting] = useState(false)
  const onSubmit = (data) => {
    setSubmitting(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactUsForm', ...data }),
    })
      .then(() => {
        //success stuff
      })
      .catch((error) => console.error(error))
      .finally(() => {})
  }
  return (
    <Background {...props}>
      <form id={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
        <Box css={{ my: '$4', pb: '$2' }}>
          <Flex css={{ mx: '-$2' }}>
            <Input
              ref={register}
              id="firstName"
              name="firstName"
              placeholder="Jane"
              defaultValue={inputs.firstName}
              css={{ px: '$2', flexBasis: '50%' }}
              errors={errors}
            >
              First name
            </Input>
            <Input
              ref={register}
              id="lastName"
              name="lastName"
              placeholder="Appleseed"
              defaultValue={inputs.lastName}
              css={{ px: '$2', flexBasis: '50%' }}
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
            defaultValue={inputs.companyName}
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
            defaultValue={inputs.email}
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
            defaultValue={inputs.phone}
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
          />
        </Box>
        <Checkbox
          ref={register}
          id="joinMailingList"
          name="joinMailingList"
          defaultChecked={inputs.joinMailingList}
        >
          I’d like to keep updated with news and special offers
        </Checkbox>
        <p aria-hidden="true" className={classes.visuallyHidden()}>
          <label>
            Skip this field if you’re human:
            <input tabIndex={-1} ref={register} name="bot-field-step3" />
          </label>
        </p>
      </form>
    </Background>
  )
}
