import { styled, Card } from '@theme'
interface ContactFormProps {}

const Background = styled(Card, {
  height: '768px',
  boxShadow: '$1',
})

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  return <Background {...props} />
}
