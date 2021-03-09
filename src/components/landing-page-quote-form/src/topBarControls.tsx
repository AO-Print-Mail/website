import { ArrowBack, ProgressBar, HeaderBar, styled, CSS } from '@theme'
import router from 'next/router'
import { Button } from '@components/button'
import { m as motion, MotionValue } from 'framer-motion'

export interface TopBarControlsProps {
  progress: MotionValue<number>
  css?: CSS
}

const Bg = styled(HeaderBar, {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  mt: '$2',
  when: {
    l: {
      border: 'none',
    },
  },
})

export const TopBarControls: React.FC<TopBarControlsProps> = ({
  progress,
  ...props
}) => {
  return (
    <Bg as={motion.div} css={{ alignItems: 'center', px: '$6', pt: '$4' }}>
      <Button
        size="small"
        offset="left"
        leftIcon={<ArrowBack css={{ color: '$N70' }} />}
        style="naked"
        color="dark"
        onClick={(e) => {
          e.preventDefault()
          router.back()
        }}
      >
        Back
      </Button>
      <ProgressBar progress={progress} css={{ mr: 0, flex: '1 1 100%' }} />
    </Bg>
  )
}
