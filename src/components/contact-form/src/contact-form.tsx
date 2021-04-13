import { styled, Card } from '@theme'
import * as yup from 'yup'

interface ContactFormProps {}

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
  message: yup.string(),
})

const Background = styled(Card, {
  height: '768px',
  boxShadow: '$1',
})

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  return <Background {...props} />
}
