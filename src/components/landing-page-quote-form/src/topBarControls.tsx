import {
  Container,
  ArrowBack,
  ProgressBar,
  HeaderBar,
  styled,
  CSS,
  Close,
} from '@theme'
import router from 'next/router'
import { Button } from '@components/button'
import { m as motion, MotionValue, Variants } from 'framer-motion'

export interface TopBarControlsProps {
  progress: MotionValue<number>
  success: boolean
  toggleIsOpen: () => void
  css?: CSS
}

const Bg = styled(HeaderBar, {
  backgroundColor: '$transparent',
  pt: '$2',
  variants: { success: { true: { border: 'none' } } },

  '@l': {
    borderColor: '$DA10',
  },
})

const variants: Variants = {
  hide: {
    opacity: 0,
    pointerEvents: 'none',
  },
  show: {
    opacity: 1,
    pointerEvents: 'auto',
  },
}

export const TopBarControls: React.FC<TopBarControlsProps> = ({
  progress,
  toggleIsOpen,
  success,
  ...props
}) => {
  return (
    <Bg as={motion.div} success={success} layout>
      <Container
        css={{
          maxWidth: '32rem',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        as={motion.div}
      >
        {!success && (
          <div>
            <Button
              initial="hide"
              animate="show"
              exit="hide"
              size="small"
              leftIcon={<ArrowBack css={{ color: '$N80' }} as={motion.svg} />}
              style="naked"
              color="dark"
              offset="left"
              onClick={(e) => {
                e.preventDefault()
                router.back()
              }}
              as={motion.button}
              variants={variants}
            >
              Back
            </Button>
          </div>
        )}
        {!success && (
          <ProgressBar
            initial="hide"
            animate="show"
            exit="hide"
            as={motion.div}
            progress={progress}
            css={{ flex: '1 1' }}
            variants={variants}
          />
        )}
        <Button
          initial="hide"
          animate="show"
          exit="hide"
          size="small"
          rightIcon={
            <Close
              css={{ color: success ? '$LA70' : '$N80' }}
              as={motion.svg}
            />
          }
          style="naked"
          color={success ? 'light' : 'dark'}
          css={{ '@l': { display: 'none' } }}
          onClick={(e) => {
            e.preventDefault()
            toggleIsOpen()
          }}
          as={motion.button}
          variants={variants}
        >
          Close
        </Button>
      </Container>
    </Bg>
  )
}
