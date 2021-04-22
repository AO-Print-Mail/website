import { useContext, useEffect, useRef, useState } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import { styled, Container, Card } from '@theme'
import { LayoutScrollContext } from '@components/layout'
import { m as motion } from 'framer-motion'

interface ModalProps {
  layoutId?: string
  children?: React.ReactElement
}

const BackDrop = styled('div', {
  position: 'fixed',
  top: '0',
  width: '100%',
  bottom: '0',
  left: '0',
  background: '$DA80',
  zIndex: '$4',
  backdropFilter: 'blur(12px)',
})

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
  useEffect(() => {
    //lock the layout when the modal opens
    toggleScrollLock()
    //unlock the layout when the modal unmounts, pass true to stop it updating the current position to 0
    return () => {
      toggleScrollLock(true)
    }
  }, [])
  return (
    <BackDrop
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container css={{ height: '50%', mt: '300px' }}>
        <ModalBackground as={motion.div} layoutId={layoutId} />
        <Container layout>{children}</Container>
      </Container>
    </BackDrop>
  )
}
