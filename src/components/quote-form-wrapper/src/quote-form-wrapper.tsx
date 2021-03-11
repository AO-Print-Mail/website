import { styled, keyframes } from '@theme'
import { useContext, useEffect } from 'react'
import { LayoutSpaceContext } from '@components/layout'
import { m as motion } from 'framer-motion'
import { useAnimationFeatures } from '@lib/react/animation-features'

const footerReveal = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0%)' },
})

interface QuoteFormWrapperProps {
  isOpen?: boolean
}

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

const animationVariants = {
  open: {
    height: '100%',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    height: 'auto',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
}

export const QuoteFormWrapper: React.FC<QuoteFormWrapperProps> = ({
  children,
  isOpen,
  ...props
}) => {
  const { setFooterSpace } = useContext(LayoutSpaceContext)
  useEffect(() => {
    setFooterSpace('80px')
  }, [])
  useAnimationFeatures(['animation', 'animateLayout'])

  return (
    <FormBackground
      as={motion.div}
      isOpen={isOpen}
      variants={animationVariants}
      animate={isOpen ? 'open' : 'closed'}
      {...props}
      layout
    >
      {children}
    </FormBackground>
  )
}
