import React, { useContext, useEffect } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import {
  styled,
  Container,
  Card,
  Close,
  TextHolder,
  Box,
  ColumnWrapper,
  Column,
} from '@theme'
import { LayoutContext } from '@components/layout/src/layoutContext'
import { m as motion, useAnimation, usePresence, Variants } from 'framer-motion'
import { Button } from '@components/button'
import { StitchesVariants } from '@stitches/core'

interface ModalProps extends React.ComponentProps<typeof TextHolder> {
  layoutId?: string
  children?: React.ReactElement
  toggle?: (e?: React.MouseEvent) => void
  showCloseButton?: boolean
  mobileWidth?: 'full' | 'contain'
  width?: StitchesVariants<typeof ModalWrapper>
}

const ScreenWrapper = styled('div', {
  position: 'fixed',
  tlbr: '0',
  zIndex: '$5',
  overflow: 'auto',
})

const BackDrop = styled(motion.div, {
  zIndex: '$4',
  position: 'fixed',
  tlbr: '0',
  background: '$DA50',
  backdropFilter: 'blur(16px)',
  moz: {
    background: '$DA80',
  },
})

const ModalWrapper = styled('div', {
  position: 'relative',
  my: '$6',
  mx: 'auto',
  height: '480px',

  '@s': { height: '640px' },
  '@m': { height: '848px' },
  '@l': {
    height: '640px',
  },
  '@xl': { height: '768px' },
  variants: {
    width: {
      s: {
        width: '100%',
        '@m': { width: '83.33%' },
        '@l': { width: '66.67%' },
        '@xl': { width: '50%' },
      },
      m: {
        width: '100%',
        '@l': { width: '83.33%' },
        '@xl': { width: '66.67%' },
      },
      l: { width: '100%', '@xl': { width: '83.33%' } },
      full: { width: '100%' },
    },
    height: {
      s: { width: '' },
      m: { width: '' },
      l: { width: '' },
    },
    mobileWidth: {
      full: {
        '@m_max': {
          minHeight: '100vh',
          width: '100vw',
          my: '0',
          mx: '50%',
          left: '-50vw',
          right: '-50vw',
          p: '0',
        },
      },
    },
  },
  defaultVariants: {
    width: 'full',
  },
})

const backdropMotionVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export const ModalBackground = styled(Card, {
  position: 'absolute',
  tlbr: '0',
  variants: {
    mobileWidth: {
      full: {
        '@m_max': {
          m: 0,
          br: '0',
        },
      },
      contain: {},
    },
  },
  defaultVariants: {
    mobileWidth: 'contain',
  },
})

const modalMotionVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 48 },
}

const closeButtonVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  clicked: { opacity: 0, scale: 1.5, transition: { duration: 0.2 } },
}

export const Modal: React.FC<ModalProps> = ({
  layoutId,
  children,
  toggle,
  mobileWidth,
  width,
  showCloseButton = false,
  ...props
}) => {
  const hasCloseButton = toggle && showCloseButton

  const { toggleScrollLock, setShowNav } = useContext(LayoutContext)
  const backDropControls = useAnimation()
  const modalControls = useAnimation()
  const closeButtonControls = useAnimation()

  const [isPresent, safeToRemove] = usePresence()

  async function modalAnimateOut() {
    !layoutId && modalControls.start('hidden')
    await backDropControls.start('hidden')
    safeToRemove()
  }

  async function handleUnmount() {
    toggleScrollLock()
    setTimeout(modalAnimateOut, 50)
  }

  function handleMount() {
    toggleScrollLock()
    setTimeout(setShowNav, 50, false)
    backDropControls.start('visible')
    !layoutId && modalControls.start('visible')
    closeButtonControls.start('visible')
  }

  useEffect(() => {
    handleMount()
  }, [])
  useEffect(() => {
    if (!isPresent) {
      handleUnmount()
    }
  }, [isPresent])

  const animationProps = layoutId
    ? { layoutId }
    : {
        initial: 'hidden',
        animate: modalControls,
        variants: modalMotionVariants,
      }

  function stopPropagationOnClick(e: React.MouseEvent) {
    e.stopPropagation()
  }

  async function handleToggle(e: React.MouseEvent) {
    await closeButtonControls.start('clicked')
    toggle(e)
  }

  function handleClick(e: React.MouseEvent) {
    handleToggle(e)
  }

  return ClientOnlyPortal({
    children: (
      <>
        <BackDrop
          initial="hidden"
          animate={backDropControls}
          variants={backdropMotionVariants}
        />
        <ScreenWrapper onClick={handleClick}>
          <Container>
            <ColumnWrapper css={{ display: 'block' }}>
              <Column>
                <ModalWrapper
                  as={motion.div}
                  mobileWidth={mobileWidth}
                  onClick={stopPropagationOnClick}
                  width={width}
                >
                  <ModalBackground
                    as={motion.div}
                    layout
                    {...animationProps}
                    mobileWidth={mobileWidth}
                  />
                  <TextHolder
                    css={{
                      position: 'relative',
                      py: '$3',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'stretch',
                      zIndex: '$3',
                      overflow: 'hidden',
                    }}
                    {...props}
                  >
                    {children}
                    {hasCloseButton && (
                      <Box
                        css={{
                          position: 'absolute',
                          right: '0',
                          p: 'inherit',
                        }}
                        as={motion.div}
                        variants={closeButtonVariants}
                        animate={closeButtonControls}
                        initial={'hidden'}
                      >
                        <Button
                          leftIcon={<Close />}
                          size="small"
                          style="naked"
                          color="dark"
                          onClick={handleClick}
                        >
                          Close
                        </Button>
                      </Box>
                    )}
                  </TextHolder>
                </ModalWrapper>
              </Column>
            </ColumnWrapper>
          </Container>
        </ScreenWrapper>
      </>
    ),
    selector: '#portal-modal',
  })
}
