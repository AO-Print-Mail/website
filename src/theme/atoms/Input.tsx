import { forwardRef, ReactNode } from 'react'
import { styled, UI3, Box, CSS } from '..'
import { Paragraph5 } from './typography'

interface InputProps {
  id: string
  increment?: number
  value?: string | number
  defaultValue?: string | number
  placeholder?: string | number
  children?: ReactNode
  name: string
  type?: string
  css?: CSS
}

export const InputStyles = styled(UI3, {
  backgroundColor: '$DA10',
  px: 'calc($3 - 2px)',
  py: 'calc($2 - 2px)',
  br: '$3',
  color: '$DBA70',
  overflow: 'hidden',
  borderColor: '$DBA20',
  borderStyle: 'solid',
  mt: '$2',
  mx: '0',
  mb: '0',
  width: '100%',
  '&::placeholder': {
    color: '$DBA50',
  },
  '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button,': {
    '-webkit-appearance': 'none',
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

export const TextAreaStyles = styled(InputStyles, {
  lineHeight: 1.5,

  variants: {
    resizeVertical: { true: { resize: 'vertical' } },
  },
})

const LabelStyles = styled(Paragraph5, { color: '$DA70' })

export const TextArea = (props) => <TextAreaStyles {...props} as="textarea" />

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, children, value, defaultValue, name, type, placeholder, ...props },
    ref
  ) => {
    const inputProps = !children && props
    const _input = (
      <InputStyles
        id={id}
        as="input"
        value={value}
        defaultValue={defaultValue}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...inputProps}
      />
    )
    if (!children) {
      return _input
    }
    return (
      <Box {...props}>
        <LabelStyles as="label" htmlFor={id}>
          {children}
        </LabelStyles>
        {_input}
      </Box>
    )
  }
)
