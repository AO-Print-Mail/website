import { IconButton, Button } from '@components/button'
import { Container, Flex } from '@theme'
import { m as motion } from 'framer-motion'
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
  return (
    <Container css={{ maxWidth: '32rem' }}>
      <Flex
        as={motion.div}
        css={{
          pt: '$3',
          flex: '0 0',
          pb: '$3',
          when: { l: { mx: '$6', pb: '$6' } },
        }}
      >
        <Button
          fullWidth
          size="cta"
          css={{
            display: 'block',
            flex: '1',
            when: {
              l: {},
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
