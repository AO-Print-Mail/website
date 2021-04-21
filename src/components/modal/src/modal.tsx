import { useContext, useEffect, useState } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import { styled, Container } from '@theme'
import { LayoutScrollContext } from '@components/layout'
import { m as motion } from 'framer-motion'

interface ModalProps {
  layoutId?: string
  children?: React.ReactElement
}

const BackDrop = styled('div', {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  background: '$DA60',
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

export const ModalBackground = styled('div', {
  boxShadow: '$footer',
  position: 'absolute',
  margin: '0',
  background: '$white',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  overflow: 'hidden',
  '@m': {
    boxShadow: '$3',
    top: '$4',
    br: '$5',
    gridColumnStart: '2',
    gridColumnEnd: 'span 6',
  },
  '@l': {
    top: '$6',
    gridColumnStart: '7',
    gridColumnEnd: 'span 5',
  },
})

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  const { toggleScrollLock } = useContext(LayoutScrollContext)
  useEffect(() => {
    //lock the layout when the modal opens
    toggleScrollLock()
    //unlock the layout when the modal unmounts
    return toggleScrollLock()
  })
  return ClientOnlyPortal({
    children: (
      <BackDrop>
        <ModalWrapper>
          <ModalBackground>{children}</ModalBackground>
        </ModalWrapper>
      </BackDrop>
    ),
    selector: '#portal-modal',
  })
}
