import { useState } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import { styled, Container } from '@theme'
interface ModalProps {}

const BackDrop = styled('div', {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  background: '$DA60',
})

const ModalWrapper = styled(Container, {
  height: '100%',
  when: {
    m: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridGap: '$3',
    },
    l: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridGap: '$4',
    },
  },
})

const ModalBackground = styled('div', {
  shadow: '$3',
  position: 'absolute',
  m: '0',
  background: '$white',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  when: {
    m: {
      top: '$4',
      br: '$5',
      gridColumnStart: '2',
      gridColumnEnd: 'span 6',
    },
    l: {
      top: '$6',
      gridColumnStart: '7',
      gridColumnEnd: 'span 5',
    },
  },
})

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
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
