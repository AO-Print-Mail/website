import { m as motion } from 'framer-motion'
import { Button } from '@components/button'
import { Flex } from '@theme/atoms'
import { ArrowForward } from '@theme/icons'
import { Paragraph } from '@theme/typography'
import { Variants } from 'framer-motion'
import { FormStepProps } from './formStep'

const skipLinkVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) =>
    custom
      ? {
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }
      : { opacity: 1, pointerEvents: 'auto', userSelect: 'auto' },
}

export const StepTitleBar: React.FC<
  Pick<FormStepProps, 'mandatory' | 'step_title'> & {
    handleSkip: (e: React.MouseEvent) => void
  }
> = ({ step_title, mandatory, handleSkip }) => {
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
      <Button
        style="naked"
        rightIcon={<ArrowForward />}
        size="small"
        as={motion.a}
        href="#"
        css={{
          flex: '0 0 auto',
          ml: '$4',
          color: '$blue',
          '@m': { alignSelf: 'flex-end' },
        }}
        aria-hidden={mandatory}
        initial="hidden"
        animate="visible"
        custom={mandatory}
        variants={skipLinkVariants}
        exit="hidden"
        onClick={handleSkip}
      >
        Skip
      </Button>
    </Flex>
  )
}
