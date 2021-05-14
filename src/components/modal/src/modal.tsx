import React, { useContext, useEffect } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import { styled, Container, Card, Close, TextHolder } from '@theme'
import { LayoutScrollContext } from '@components/layout'
import { m as motion, useAnimation, usePresence, Variants } from 'framer-motion'
import { Button } from '@components/button'

interface ModalProps {
  layoutId?: string
  children?: React.ReactElement
  toggle?: (e?: React.MouseEvent) => void
  showCloseButton?: boolean
  mobileWidth?: 'full' | 'contain'
}

const ScreenWrapper = styled(motion.div, {
  position: 'fixed',
  tlbr: '0',
  zIndex: '$4',
  overflow: 'auto',
})

const BackDrop = styled(motion.div, {
  position: 'sticky',
  top: '0',
  left: '0',
  right: '0',
  minHeight: '100vh',
  background: '$DA50',
  backdropFilter: 'blur(16px)',
  moz: {
    background: '$DA80',
  },
})

const ModalWrapper = styled(Container, {
  boxSizing: 'margin-box',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  py: '$6',
  height: '480px',
  '@s': { height: '640px' },
  '@m': { height: '848px', py: '$7' },
  '@l': {
    height: '768px',
    py: '$6',
  },
  '@xl': { height: '912px', py: '$7' },
  variants: {
    mobileWidth: {
      full: {
        '@m_max': {
          position: 'absolute',
          maxWidth: 'auto',
          height: 'auto',
          tlbr: '0',
          minWidth: '100%',
          p: '0',
        },
      },
      contain: {},
    },
  },
  defaultVariants: {
    mobileWidth: 'contain',
  },
})

const backdropMotionVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export const ModalBackground = styled(Card, {
  position: 'relative',
  height: '100%',
  zIndex: '1',
  mx: 'auto',
  '@l': {
    width: '83.33%',
  },
  '@xl': {
    width: '66.67%',
  },
  variants: {
    mobileWidth: {
      full: {
        br: '0',
        '@l': {
          br: '$5',
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

export const Modal: React.FC<ModalProps> = ({
  layoutId,
  children,
  toggle,
  mobileWidth,
  showCloseButton = true,
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

  const animationProps = layoutId
    ? { layoutId }
    : {
        initial: 'hidden',
        animate: modalControls,
        variants: modalMotionVariants,
      }

  return ClientOnlyPortal({
    children: (
      <ScreenWrapper onClick={toggle}>
        <BackDrop
          initial="hidden"
          animate={backDropControls}
          variants={backdropMotionVariants}
        />
        <ModalWrapper as={motion.div} mobileWidth={mobileWidth}>
          <ModalBackground
            as={motion.div}
            {...animationProps}
            mobileWidth={mobileWidth}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <TextHolder
              css={{
                py: '$2',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'stretch',
              }}
              as={motion.div}
              layout
            >
              {children}
              {showCloseButton && toggle && (
                <Button
                  leftIcon={<Close />}
                  size="small"
                  style="naked"
                  color="dark"
                  css={{
                    position: 'absolute',
                    right: '0',
                    p: 'inherit',
                  }}
                  onClick={toggle}
                >
                  Close
                </Button>
              )}
            </TextHolder>
          </ModalBackground>
        </ModalWrapper>
      </ScreenWrapper>
    ),
    selector: '#portal-modal',
  })
}
