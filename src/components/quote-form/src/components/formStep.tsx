import { Button } from '@components/button'
import { CtaLink, Flex } from '@theme/atoms'
import { ArrowForward } from '@theme/icons'
import { Paragraph } from '@theme/typography'

interface FormStepProps {}

const StepTitleBar: React.FC<{}> = ({}) => {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <Paragraph as="h1">What format would you like to send?</Paragraph>
      <Button
        style="naked"
        rightIcon={<ArrowForward />}
        size="small"
        as="a"
        href="#"
        css={{ flex: '0 0 auto', ml: '$4', color: '$blue' }}
      >
        Skip
      </Button>
    </Flex>
  )
}

export const FormStep: React.FC<FormStepProps> = () => {
  return <StepTitleBar></StepTitleBar>
}
