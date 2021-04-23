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
  background: '$DA80',
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

export const Modal: React.FC<ModalProps> = ({
  layoutId,
  children,
  ...props
}) => {
  const { toggleScrollLock } = useContext(LayoutScrollContext)
  const controls = useAnimation()
  const [isPresent, safeToRemove] = usePresence()
  async function handleUnmount() {
    toggleScrollLock(true)
    await controls.start('hidden')
    safeToRemove()
  }
  useEffect(() => {
    //lock the layout when the modal opens
    toggleScrollLock()
    controls.start('visible')
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
        animate={controls}
        variants={backdropMotionVariants}
      >
        <Container layout css={{ height: '50%', mt: '300px' }}>
          <ModalBackground as={motion.div} layoutId={layoutId} />
          <Container layout>{children}</Container>
        </Container>
      </BackDrop>
    ),
    selector: '#portal-modal',
  })
}
