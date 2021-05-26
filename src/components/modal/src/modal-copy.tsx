import React, { useContext, useEffect, useState } from 'react'
import { ClientOnlyPortal } from '@lib/react'
import {
  styled,
  Container,
  Card,
  TextHolder,
  ColumnWrapper,
  Column,
} from '@theme'
import { LayoutContext } from '@components/layout/src/layoutContext'
import {
  AnimatePresence,
  m as motion,
  useAnimation,
  usePresence,
  Variants,
} from 'framer-motion'
import { StitchesVariants } from '@stitches/core'

type ModalRenderProps = ({
  modalIsOpen,
  toggleModal,
}: {
  modalIsOpen: boolean
  toggleModal: () => void
}) => React.ReactNode

export interface ModalProps extends React.ComponentProps<typeof TextHolder> {
  layoutId?: string
  toggle?: (e?: React.MouseEvent) => void
  showCloseButton?: boolean
  mobileWidth?: 'full' | 'contain'
  width?: StitchesVariants<typeof ModalWrapper>
  controls?: React.ReactNode
  main?: React.ReactNode
  hideControlsBorder?: boolean
  opens: ModalRenderProps
  children: ModalRenderProps
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
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
    // height: {
    //   s: { height: '' },
    //   m: { height: '' },
    //   l: { height: '' },
    // },
    mobileWidth: {
      full: {
        '@m_max': {
          height: 'auto',
          minHeight: '100vh',
          minWidth: '100vw',
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
  p: '0',
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
  main,
  controls,
  hideControlsBorder,
  opens,
  ...props
}) => {
  const [modalIsOpen, toggleModal] = useState<boolean>()
  const [isPresent, safeToRemove] = usePresence()
  const { toggleScrollLock, setShowNav } = useContext(LayoutContext)
  const backDropControls = useAnimation()
  const closeButtonControls = useAnimation()

  async function modalAnimateOut() {
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

  const [bgAnimations, wpAnimations] = layoutId
    ? [{ layoutId }, {}]
    : [
        {
          variants: modalMotionVariants,
          initial: 'hidden',
          animate: backDropControls,
        },
        {
          variants: modalMotionVariants,
          initial: 'hidden',
          animate: backDropControls,
        },
      ]

  function stopPropagationOnClick(e: React.MouseEvent) {
    e.stopPropagation()
  }

  async function handleClick() {
    await closeButtonControls.start('clicked')
    toggleModal(!modalIsOpen)
  }

  return ClientOnlyPortal({
    children: (
      <>
        {children({ modalIsOpen, toggleModal: handleClick })}
        <AnimatePresence>
          {modalIsOpen && (
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
                        {...wpAnimations}
                        {...props}
                      >
                        <ModalBackground
                          as={motion.div}
                          layout
                          {...bgAnimations}
                          mobileWidth={mobileWidth}
                        />
                        {opens({ modalIsOpen, toggleModal: handleClick })}
                      </ModalWrapper>
                    </Column>
                  </ColumnWrapper>
                </Container>
              </ScreenWrapper>
              )
            </>
          )}
        </AnimatePresence>
      </>
    ),
    selector: '#portal-modal',
  })
}
