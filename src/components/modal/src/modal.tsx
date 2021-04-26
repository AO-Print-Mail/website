import { useContext, useEffect } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import { styled, Container, Card, PageWrapper, Close } from '@theme'
import { LayoutScrollContext } from '@components/layout'
import { m as motion, useAnimation, usePresence, Variants } from 'framer-motion'
import { Button } from '@components/button'

interface ModalProps {
  layoutId?: string
  children?: React.ReactElement
  toggle?: (e?: React.MouseEvent) => void
}

const BackDrop = styled(motion.div, {
  position: 'fixed',
  top: '0',
  width: '100%',
  bottom: '0',
  left: '0',
  background: '$DA50',
  zIndex: '$4',
  backdropFilter: 'blur(16px)',
  moz: {
    background: '$DA80',
  },
})

const backdropMotionVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export const ModalWrapper = styled(Container, {
  height: '100%',
  '@m': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridGap: '$3',
  },
  '@l': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridGap: '$4',
  },
})

export const ModalBackground = styled(Card, {
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  width: '100%',
})

const modalMotionVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 48 },
}

export const Modal: React.FC<ModalProps> = ({
  layoutId,
  children,
  toggle,
  ...props
}) => {
  const { toggleScrollLock } = useContext(LayoutScrollContext)
  const backDropControls = useAnimation()
  const modalControls = useAnimation()
  const [isPresent, safeToRemove] = usePresence()
  async function modalAnimateOut() {
    !layoutId && modalControls.start('hidden')
    await backDropControls.start('hidden')
    safeToRemove()
  }
  async function handleUnmount() {
    toggleScrollLock(true)
    setTimeout(modalAnimateOut, 50)
  }
  useEffect(() => {
    //lock the layout when the modal opens
    toggleScrollLock()
    backDropControls.start('visible')
    !layoutId && modalControls.start('visible')
    //unlock the layout when the modal unmounts, pass true to stop it updating the current position to 0
  }, [])
  useEffect(() => {
    if (!isPresent) {
      handleUnmount()
    }
  }, [isPresent])
  return ClientOnlyPortal({
    children: (
      <BackDrop
        initial="hidden"
        animate={backDropControls}
        variants={backdropMotionVariants}
        onClick={toggle}
      >
        <Container css={{ height: '50%', mt: '300px' }}>
          <Card
            as={motion.div}
            layoutId={layoutId}
            initial={layoutId && modalMotionVariants}
            animate={layoutId && modalControls}
            variants={modalMotionVariants}
            css={{ height: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Container
              css={{ position: 'relative', py: '$2' }}
              as={motion.div}
              layout
            >
              {children}
              {toggle && (
                <Button
                  leftIcon={<Close />}
                  size="small"
                  style="naked"
                  color="dark"
                  css={{
                    position: 'absolute',
                    right: '$3',
                    '@m': { right: '$4' },
                  }}
                  onClick={toggle}
                >
                  Close
                </Button>
              )}
            </Container>
          </Card>
        </Container>
      </BackDrop>
    ),
    selector: '#portal-modal',
  })
}
