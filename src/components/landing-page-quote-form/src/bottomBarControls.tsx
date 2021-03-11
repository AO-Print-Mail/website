import { IconButton, Button } from '@components/button'
import { Container, Flex, Rotateable } from '@theme'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnimationFeatures } from '@lib/react/animation-features'
import React from 'react'

export interface FormStepControlsProps {
  isOpen: boolean
  isSubmitting: boolean
  formName?: string
  toggleIsOpen: () => void
  buttonLabel: string
  buttonOnClick: (e: React.PointerEvent) => void
  buttonColor?: string
}

export const FormStepControls: React.FC<FormStepControlsProps> = ({
  isOpen,
  isSubmitting,
  formName,
  toggleIsOpen,
  buttonLabel,
  buttonOnClick,
  buttonColor,
  children,
  ...props
}) => {
  useAnimationFeatures(['exit'])
  return (
    <Container css={{ maxWidth: '32rem' }} as={AnimatePresence}>
      <Flex
        as={motion.div}
        css={{
          pt: '$3',
          flex: '0 0',
          pb: '$4',
          when: { l: { mx: '$6', pb: '$6' } },
        }}
      >
        <Button
          fullWidth
          size="cta"
          css={{
            display: 'block',
            zIndex: '$2',
            flex: '1',
            when: {
              l: {
                mt: '$6',
              },
            },
          }}
          isLoading={isSubmitting}
          type={formName ? 'submit' : undefined}
          form={formName ?? undefined}
          onClick={buttonOnClick}
          color={buttonColor}
        >
          {buttonLabel}
        </Button>
      </Flex>
    </Container>
  )
}
