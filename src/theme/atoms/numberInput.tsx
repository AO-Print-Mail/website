import { forwardRef, ReactNode } from 'react'
import { styled } from '..'
import { Paragraph3 } from './typography'

interface NumberInputProps {
  id: string
  increment?: number
  value?: number
  defaultValue?: number
  children?: ReactNode
  name: string
  type: string
}

const Input = styled(Paragraph3, {
  backgroundColor: '$DA10',
  px: 'calc($3 - 2px)',
  py: 'calc($2 - 2px)',
  br: '$3',
  color: '$DBA70',
  overflow: 'hidden',
  borderColor: '$DBA20',
  borderStyle: 'solid',

  '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button,': {
    '-webkit-appearance': 'none',
    '@m': '0',
  },
  '&:hover': {
    borderColor: '$DBA40',
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$blue',
    color: '$DBA80',
  },
})

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ ...props }, ref) => (
    <Input alignCenter as="input" ref={ref} {...props}></Input>
  )
)
