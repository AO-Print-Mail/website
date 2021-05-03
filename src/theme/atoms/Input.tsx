import { forwardRef, ReactNode } from 'react'
import { visuallyHidden } from '@theme/utils/utilityClasses'
import { styled, Paragraph, Box, CSS } from '..'

interface InputProps
  extends React.ComponentProps<typeof TextAreaStyles & typeof InputStyles> {
  id: string
  increment?: number
  value?: string | number
  defaultValue?: string | number
  placeholder?: string | number
  children?: ReactNode
  name: string
  type?: string
  css?: CSS
  required?: boolean
}

export const InputStyles = styled(Paragraph, {
  willChange: 'border-color',
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
  variants: {
    state: {
      error: {
        backgroundColor: '$R10',
        borderColor: '$R30',
        color: '$red',
        '&:hover': {
          borderColor: '$red',
        },
        '&:focus': {
          borderColor: '$R40',
          color: '$R40',
        },
        '&::placeholder': {
          color: '$R30',
        },
      },
    },
  },
})

export const TextAreaStyles = styled(InputStyles, {
  lineHeight: 1.5,
  variants: {
    resizeVertical: { true: { resize: 'vertical' } },
  },
})

export const InputLabel = styled(Paragraph, {
  color: '$DA70',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
})

export const TextArea = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <TextAreaStyles ref={ref} {...props} as="textarea" />
)

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      children,
      value,
      defaultValue,
      name,
      type,
      placeholder,
      errors,
      required,
      ...props
    },
    ref
  ) => {
    const inputProps = !children && props
    const error = errors && !!errors[name]
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
        state={error && 'error'}
        aria-invalid={error ? 'true' : 'false'}
        {...inputProps}
      />
    )
    if (!children) {
      return _input
    }
    return (
      <Box css={{ mt: '$3' }} {...props}>
        <InputLabel as="label" size="s" htmlFor={id}>
          {children}
          {!required && (
            <>
              <span className={visuallyHidden()}>—</span>
              <Paragraph size="xs" css={{ color: '$DA50' }}>
                optional
              </Paragraph>
            </>
          )}
        </InputLabel>
        {_input}
        {error && (
          <Box
            css={{
              backgroundColor: '$R30',
              display: 'inline-block',
              mt: '$2',
              px: '$2',
              br: '$2',
            }}
          >
            <Paragraph
              size="xs"
              css={{ my: '0', display: 'inline-block', color: '$white' }}
              role="alert"
            >
              {errors[name].message}
            </Paragraph>
          </Box>
        )}
      </Box>
    )
  }
)
