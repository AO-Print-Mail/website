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
import { m as motion, MotionValue } from 'framer-motion'

export interface TopBarControlsProps {
  progress: MotionValue<number>
  toggleIsOpen: () => void
  css?: CSS
}

const Bg = styled(HeaderBar, {
  pt: '$2',
  when: {
    l: {
      border: 'none',
    },
  },
})

export const TopBarControls: React.FC<TopBarControlsProps> = ({
  progress,
  toggleIsOpen,
  ...props
}) => {
  return (
    <Bg as={motion.div} layout>
      <Container
        css={{
          maxWidth: '40rem',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          pt: '$4',
        }}
      >
        <Button
          size="small"
          leftIcon={<ArrowBack css={{ color: '$N70' }} />}
          style="naked"
          color="dark"
          offset="left"
          onClick={(e) => {
            e.preventDefault()
            router.back()
          }}
        >
          Back
        </Button>
        <ProgressBar progress={progress} css={{ flex: '1 1' }} />
        <Button
          size="small"
          rightIcon={<Close css={{ color: '$N70' }} />}
          style="naked"
          color="dark"
          css={{ when: { l: { display: 'none' } } }}
          onClick={(e) => {
            e.preventDefault()
            toggleIsOpen()
          }}
        >
          Close
        </Button>
      </Container>
    </Bg>
  )
}
