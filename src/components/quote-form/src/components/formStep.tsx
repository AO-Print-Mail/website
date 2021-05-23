import { Button } from '@components/button'
import { CtaLink, Flex } from '@theme/atoms'
import { ArrowForward } from '@theme/icons'
import { Paragraph } from '@theme/typography'
import { ButtonSelectType, InputType } from '../types'

interface FormStepProps {
  step_id: string
  step_title: string
  mandatory: boolean
  fields: FieldObject[]
}

type FieldObject = ButtonSelectType | InputType

const StepTitleBar: React.FC<
  Pick<FormStepProps, 'mandatory' | 'step_title'>
> = ({ step_title, mandatory }) => {
  return (
    <Flex
      css={{
        alignItems: 'center',
        '@m': { flexDirection: 'column-reverse' },
      }}
    >
      <Paragraph css={{ '@m': { alignSelf: 'flex-start' } }} as="h1">
        {step_title}
      </Paragraph>
      {!mandatory && (
        <Button
          style="naked"
          rightIcon={<ArrowForward />}
          size="small"
          as="a"
          href="#"
          css={{
            flex: '0 0 auto',
            ml: '$4',
            color: '$blue',
            '@m': { alignSelf: 'flex-end' },
          }}
        >
          Skip
        </Button>
      )}
    </Flex>
  )
}

export const FormStep: React.FC<FormStepProps> = ({
  step_id,
  step_title,
  mandatory,
}) => {
  return (
    <>
      <StepTitleBar
        mandatory={mandatory}
        step_title={step_title}
      ></StepTitleBar>
    </>
  )
}
