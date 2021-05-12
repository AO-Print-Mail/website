import React, { useContext, useEffect } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import { styled, Container, Card, Close, TextHolder } from '@theme'
import { LayoutScrollContext } from '@components/layout'
import { m as motion, useAnimation, usePresence, Variants } from 'framer-motion'
import { Button } from '@components/button'
import { StitchesVariants } from '@stitches/core'

interface ModalProps {
  layoutId?: string
  children?: React.ReactElement
  toggle?: (e?: React.MouseEvent) => void
  showCloseButton?: boolean
  mobileWidth?: 'full' | 'contain'
}

const BackDrop = styled(motion.div, {
  position: 'fixed',
  top: '0',
  width: '100%',
  bottom: '0',
  left: '0',
  background: '$DA50',
  zIndex: '$4',
  backdropFilter: 'blur(16px)',
  moz: {
    background: '$DA80',
  },
})

const ModalWrapper = styled(Container, {
  top: '25%',
  height: '50%',
  variants: {
    mobileWidth: {
      full: {
        position: 'absolute',
        maxWidth: 'auto',
        height: 'auto',
        tlbr: '0',
        minWidth: '100%',
        px: '0',
        '@l': {
          position: 'relative',
          height: '50%',
          top: '25%',
          px: '$5',
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
  height: '100%',
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
  return ClientOnlyPortal({
    children: (
      <BackDrop
        initial="hidden"
        animate={backDropControls}
        variants={backdropMotionVariants}
        onClick={toggle}
      >
        <ModalWrapper as={motion.div} mobileWidth={mobileWidth}>
          <ModalBackground
            as={motion.div}
            layoutId={layoutId}
            initial={layoutId && modalMotionVariants}
            animate={layoutId && modalControls}
            variants={modalMotionVariants}
            mobileWidth={mobileWidth}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <TextHolder
              css={{ position: 'relative', py: '$2' }}
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
                    right: '$3',
                    '@m': { right: '$4' },
                  }}
                  onClick={toggle}
                >
                  Close
                </Button>
              )}
            </TextHolder>
          </ModalBackground>
        </ModalWrapper>
      </BackDrop>
    ),
    selector: '#portal-modal',
  })
}
