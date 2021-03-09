import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import {
  Flex,
  Box,
  RadioButton,
  Input,
  Paragraph3,
  UI3,
  styled,
  classes,
} from '@theme'
import { Button } from '@components/button'
import { updateDirectMailForm } from '@lib/little-state-machine'
import { MotionValue } from 'framer-motion'

export interface StepWrapperProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  form?: React.ReactNode
}

export const StepWrapper: React.FC<StepWrapperProps> = ({
  header,
  form,
  footer,
  ...props
}) => {
  return (
    <>
      {header}
      <Flex css={{ pt: '$3', when: { l: { mx: '$6' } } }}>
        <IconButton
          label="Read more about online quotes"
          onClick={() => toggleIsOpen()}
          icon={
            <Rotateable direction={isOpen ? 'down' : 'up'} size="regular" />
          }
          css={{ flex: '0 0', mr: '$3', when: { l: { display: 'none' } } }}
          color="subtle"
        ></IconButton>
        <Button
          fullWidth
          size="cta"
          css={{
            flex: '1',
            when: {
              l: {
                mt: '$6',
              },
            },
          }}
          isLoading={isSubmitting}
          onClick={() => {
            setSubmitting(true)
            toggleIsOpen()
            changeStep('1')
          }}
        >
          Start your quote
        </Button>
      </Flex>
    </>
  )
}
