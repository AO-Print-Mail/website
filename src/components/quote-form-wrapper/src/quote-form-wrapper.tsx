import { styled, keyframes } from '@theme'
import { useContext, useEffect } from 'react'
import { LayoutSpaceContext } from '@components/layout'

const footerReveal = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0%)' },
})

interface QuoteFormWrapperProps {}

const FormBackground = styled('div', {
  willChange: 'transform',
  transform: 'translateY(100%)',
  background: '$white',
  position: 'fixed',
  display: 'block',
  zIndex: '$1',
  left: '0',
  bottom: '0',
  right: '0',
  top: '0',
  boxShadow: '$footer',
  overflow: 'hidden',
  minHeight: '$7',
  animation: `${footerReveal} 0.4s ease-out forwards`,
  btlr: '$5',
  btrr: '$5',
  when: {
    l: {
      transform: 'translateY(0%)',
      animation: 'none',
      minHeight: '$10',
      boxShadow: '$3',
      position: 'relative',
      br: '$5',
      ml: '$2',
      mr: '$2',
      mt: '$6',
      width: '50%',
    },
    xl: {
      width: 'calc(100% / 12 * 5 - 64px)',
    },
  },
})

export const QuoteFormWrapper: React.FC<QuoteFormWrapperProps> = ({
  children,
  ...props
}) => {
  const { setFooterSpace } = useContext(LayoutSpaceContext)
  useEffect(() => {
    setFooterSpace('80px')
  }, [])
  return <FormBackground {...props}>{children}</FormBackground>
}
