import { Card, styled } from '@theme'
import { useEffect, useRef } from 'react'

export interface WrapperProps extends React.ComponentProps<typeof Frame> {}

const Frame = styled(Card, {
  position: 'fixed',
  zIndex: '$3',
  left: '0',
  right: '0',
  bottom: '0',
  minHeight: '$8',
  '@l': {
    minHeight: '42rem',
    height: '100%',
    maxHeight: '100%',
    position: 'relative',
    top: '$3',
    ml: '$3',
    mr: '$3',
    mt: '$3',
    width: 'calc(50% - 48px)',
  },
  '@xl': {
    width: 'calc(100% / 12 * 5 - 64px)',
  },
  '@m_max': {
    br: '0',
  },
})

export const Wrapper: React.FC<WrapperProps> = ({ ...props }) => {
  const frameRef: React.Ref<HTMLDivElement> = useRef()
  const setVisible = () => frameRef.current.classList.add('visible')
  useEffect(() => {
    setTimeout(setVisible, 2000)
  }, [])
  return <Frame ref={frameRef} {...props} />
}
