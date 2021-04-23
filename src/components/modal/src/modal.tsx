import { useContext, useEffect } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import { styled, Container, Card } from '@theme'
import { LayoutScrollContext } from '@components/layout'
import { m as motion, useAnimation, usePresence, Variants } from 'framer-motion'

interface ModalProps {
  layoutId?: string
  children?: React.ReactElement
}

const BackDrop = styled(motion.div, {
  position: 'fixed',
  top: '0',
  width: '100%',
  bottom: '0',
  left: '0',
  background: '$DA60',
  zIndex: '$4',
  backdropFilter: 'blur(12px)',
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
  right: '0',
  left: '0',
  bottom: '0',
})

const modalMotionVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
}

export const Modal: React.FC<ModalProps> = ({
  layoutId,
  children,
  ...props
}) => {
  const { toggleScrollLock } = useContext(LayoutScrollContext)
  const backDropControls = useAnimation()
  const modalControls = !layoutId ? useAnimation() : null
  const [isPresent, safeToRemove] = usePresence()
  async function modalAnimateOut() {
    modalControls && modalControls.start('hidden')
    await backDropControls.start('hidden')
  }
  async function handleUnmount() {
    toggleScrollLock(true)
    await modalAnimateOut()
    safeToRemove()
  }
  useEffect(() => {
    //lock the layout when the modal opens
    toggleScrollLock()
    backDropControls.start('visible')
    modalControls && modalControls.start('visible')
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
      >
        <Container layout css={{ height: '50%', mt: '300px' }}>
          <ModalBackground
            as={motion.div}
            layoutId={layoutId}
            variants={modalControls ? { modalMotionVariants } : undefined}
            animate={modalControls}
          />
          <Container layout>{children}</Container>
        </Container>
      </BackDrop>
    ),
    selector: '#portal-modal',
  })
}
