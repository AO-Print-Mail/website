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
}

export const StepWrapper: React.FC<StepWrapperProps> = ({
  header,
  form,
  footer,
  ...props
}) => {
  return { header }
}
