import {
  styled,
  Flex,
  Box,
  Input,
  Checkbox,
  classes,
  TextArea,
  InputLabel,
  Paragraph,
  Heading2,
  RadioButton,
  CloseControls,
} from '@theme'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { encode } from '@lib/netlify/utils'
import { Button } from '@components/button'
import { m as motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import { ModalLayout } from '@components/modal/src/layout'
import { FormSuccess } from '@components/notifications/confirmations/formSuccess'

const WorkaroundForm = dynamic(
  () =>
    import('@components/netlify-workaraound-form').then(
      (res) => res.NetlifyWorkaroundForm
    ),
  { ssr: false }
)

const FORM_NAME = 'tempQuoteForm'

interface TempQuoteFormProps {
  toggle: (e: React.MouseEvent) => void
  modalLayoutId?: string
  active: boolean
}

const inputs = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  deadline: '',
  service: '',
  quantity: '',
  message: '',
  joinMailingList: false,
  'bot-field': '',
}

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter a first name'),
  lastName: yup.string(),
  service: yup.string(),
  deadline: yup.string(),
  quantity: yup.string(),
  companyName: yup.string(),
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('We need an email to send your quote!'),
  phone: yup.string(),
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

const Background = styled('div', {})

export const TempQuoteForm: React.FC<TempQuoteFormProps> = ({
  toggle,
  modalLayoutId,
  active,
  ...props
}) => {
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
        router.push(
          {
            pathname: router.pathname,
            query: { success: 'true', ...router.query },
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
  const { ref: phoneRef, ...phoneFormProps } = register('phone')
  return (
    <ModalLayout
      hideControlsBorder
      controls={<CloseControls handleClose={toggle} />}
    >
      <Background {...props}>
        {router.query['success'] && (
          <FormSuccess
            heading="Thanks for your message!"
            paragraph="We'll get back to you very soon."
          />
        )}
        <Heading2 marginTop="small" level="4">
          Request a quote
        </Heading2>
        <form id={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
          <Box css={{ my: '$4', pb: '$2' }}>
            <Flex css={{ mx: '-$2' }}>
              <Input
                {...register('firstName')}
                id="firstName"
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
              placeholder="Acme inc"
              defaultValue={inputs.companyName}
              errors={errors}
            >
              Company name
            </Input>
            <Input
              {...register('email')}
              id="email"
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
              render={(textMaskRef, props) => (
                <Input
                  {...phoneFormProps}
                  ref={(node) => {
                    textMaskRef(node)
                    phoneRef(node)
                  }}
                  {...props}
                  name="phone"
                >
                  Contact number
                </Input>
              )}
            />
            <InputLabel
              css={{ mt: '$8' }}
              size="s"
              as="label"
              htmlFor="service"
            >
              Which service do you need?
            </InputLabel>
            <Flex wrap css={{ pb: '$3' }}>
              <RadioButton
                id="services1"
                {...register('service')}
                value="Print and mail"
              >
                Printing and mailing
              </RadioButton>
              <RadioButton id="services2" {...register('service')} value="Mail">
                Mailing only
              </RadioButton>
              <RadioButton
                id="services3"
                {...register('service')}
                value="Print"
              >
                Printing only
              </RadioButton>
              <RadioButton
                id="services4"
                {...register('service')}
                value="Fulfilment"
              >
                Fulfilment
              </RadioButton>
            </Flex>
            <InputLabel as="label" size="s" htmlFor="deadline">
              How urgent is the job?
            </InputLabel>
            <Flex wrap css={{ mt: '$3', pb: '$3' }}>
              <RadioButton
                id="deadline1"
                {...register('deadline')}
                value="none"
              >
                No deadline yet
              </RadioButton>
              <RadioButton
                id="deadline2"
                {...register('deadline')}
                value="3_weeks"
              >
                3 weeks or more
              </RadioButton>
              <RadioButton
                id="deadline3"
                {...register('deadline')}
                value="'2_weeks"
              >
                2 weeks or more
              </RadioButton>
              <RadioButton
                id="deadline4"
                {...register('deadline')}
                value="next_week"
              >
                Next week
              </RadioButton>
              <RadioButton
                id="deadline5"
                {...register('deadline')}
                value="urgently"
              >
                Urgently!
              </RadioButton>
            </Flex>

            <Box css={{ mt: '$3', pb: '$2' }}>
              <InputLabel as="label" size="s" htmlFor="quantity">
                How many items?
              </InputLabel>
              <Input name="quantity" {...register('quantity')} type="number" />
            </Box>
            <Box css={{ mt: '$3' }}>
              <InputLabel as="label" size="s" htmlFor="message">
                Message
              </InputLabel>
              <TextArea
                {...register('message')}
                resizeVertical
                id="message"
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
              defaultChecked={inputs.joinMailingList}
              css={{ mt: '$3' }}
            >
              Keep me up to date with news and special offers
            </Checkbox>
          </Box>
          <p aria-hidden="true" className={classes.visuallyHidden()}>
            <label>
              Skip this field if you’re human:
              <input tabIndex={-1} {...register('bot-field')} />
            </label>
          </p>
          <Button fullWidth size="cta" isLoading={submitting} type="submit">
            Request quote
          </Button>
        </form>
        <WorkaroundForm formFields={inputs} name={FORM_NAME} />
      </Background>
    </ModalLayout>
  )
}
