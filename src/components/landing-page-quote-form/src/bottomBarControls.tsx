import { IconButton, Button } from '@components/button'
import { Container, Flex } from '@theme'
import { m as motion } from 'framer-motion'
import React from 'react'

export interface FormStepControlsProps {
  isOpen: boolean
  isSubmitting: boolean
  formName?: string
  buttonLabel: string
  buttonOnClick: (e: React.PointerEvent) => void
  buttonColor?: string
}

export const FormStepControls: React.FC<FormStepControlsProps> = ({
  isOpen,
  isSubmitting,
  formName,
  buttonLabel,
  buttonOnClick,
  buttonColor,
  children,
  ...props
}) => {
  return (
    <Container css={{ maxWidth: '32rem' }}>
      <Flex
        as={motion.div}
        css={{
          flex: '0 0',
          pb: '$2',
          '@l': { mx: '$6' },
        }}
      >
        <Button
          fullWidth
          size="cta"
          css={{
            display: 'block',
            flex: '1',

            '@l': {},
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
