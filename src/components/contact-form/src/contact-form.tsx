import {
  styled,
  Card,
  Flex,
  Box,
  Input,
  Checkbox,
  classes,
  TextArea,
  InputLabel,
  Heading,
  Paragraph,
  Heading2,
} from '@theme'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { encode } from '@lib/netlify/utils'
import { Button } from '@components/button'
import { m as motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'

const WorkaroundForm = dynamic(() =>
  import('@components/netlify-workaraound-form').then(
    (res) => res.NetlifyWorkaroundForm
  )
)

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
  'bot-field': '',
}

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter a first name'),
  lastName: yup.string(),
  companyName: yup.string(),
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('We need an email to send your quote!'),
  phone: yup.lazy((value) =>
    value.length > 0
      ? yup
          .string()
          .min(9, 'Please enter a full telephone number')
          .max(14, 'The telephone number you entered seems too long.')
      : yup.string()
  ),

  message: yup.string(),
  'bot-field': yup.string(),
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
  boxShadow: '$1',
  px: '$4',
  pb: '$6',
  '@m': { px: '$6' },
  '@xl': { px: '$7' },
})

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<typeof inputs>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })
  const router = useRouter()
  const SuccessBackground = styled(Background, {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    background: '$green',
    zIndex: '$3',
  })
  const [submitting, setSubmitting] = useState(false)
  const [firstName, setFirstname] = useState('')

  const {
    state: { userData },
  } = useStateMachine({})

  const onSubmit = (data: typeof inputs) => {
    setSubmitting(true)
    setFirstname(data.firstName)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': FORM_NAME, ...data, ...userData }),
    })
      .then(() => {
        const newPath = router.pathname.replace('[pageSlug]', '/contact')
        router.push(
          {
            pathname: `${newPath}`,
            query: { success: 'true' },
          },
          null,
          { shallow: true }
        )
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setSubmitting(false)
        reset()
      })
  }
  return (
    <Background {...props}>
      {router.query['success'] && (
        <SuccessBackground
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Flex css={{ alignItems: 'center', height: '100%' }}>
            <Box css={{ flex: '1 1', pb: '$9' }}>
              <Heading2 alignCenter css={{ color: '$white' }}>
                Thanks for your message{firstName && `, ${firstName}`}!
              </Heading2>
              <Paragraph
                size="4"
                css={{ color: '$LA90', mt: '$6' }}
                alignCenter
              >
                We'll get back to you very soon.
              </Paragraph>
            </Box>
          </Flex>
        </SuccessBackground>
      )}
      <Heading2 level="4" color="primary">
        Send a message
      </Heading2>
      <form id={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
        <Box css={{ my: '$4', pb: '$2' }}>
          <Flex css={{ mx: '-$2' }}>
            <Input
              {...register('firstName')}
              id="firstName"
              name="firstName"
              placeholder="Jane"
              defaultValue={inputs.firstName}
              css={{ px: '$2', flexBasis: '50%' }}
              errors={errors}
              required
            >
              First name
            </Input>
            <Input
              {...register('lastName')}
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
            {...register('companyName')}
            id="companyName"
            name="companyName"
            placeholder="Acme inc"
            defaultValue={inputs.companyName}
            errors={errors}
          >
            Company name
          </Input>
          <Input
            {...register('email')}
            id="email"
            name="email"
            placeholder="jane@example.com.au"
            type="email"
            defaultValue={inputs.email}
            errors={errors}
            required
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
            {...register('phone')}
            render={(textMaskRef, props) => (
              <Input
                ref={(node) => {
                  textMaskRef(node)
                }}
                name="phone"
                {...props}
              >
                Contact number
              </Input>
            )}
          />
          <Box css={{ mt: '$3' }}>
            <InputLabel as="label" size="4" htmlFor="message">
              Message
            </InputLabel>
            <TextArea
              {...register('message')}
              resizeVertical
              id="message"
              name="message"
              rows={8}
              cols={30}
              placeholder="Please include any additional information that is applicable to your job."
              autoComplete="off"
              defaultValue={inputs.message}
              css={{ width: '100%' }}
            />
          </Box>
          <Checkbox
            {...register('joinMailingList')}
            id="joinMailingList"
            name="joinMailingList"
            defaultChecked={inputs.joinMailingList}
            css={{ mt: '$3' }}
          >
            Keep me up to date with news and special offers
          </Checkbox>
        </Box>
        <p aria-hidden="true" className={classes.visuallyHidden()}>
          <label>
            Skip this field if you’re human:
            <input tabIndex={-1} {...register('bot-field')} name="bot-field" />
          </label>
        </p>
        <Button
          fullWidth
          size="cta"
          isLoading={submitting}
          type="submit"
          color="primary"
        >
          Send Message
        </Button>
      </form>
      <WorkaroundForm formFields={inputs} name={FORM_NAME} />
    </Background>
  )
}
