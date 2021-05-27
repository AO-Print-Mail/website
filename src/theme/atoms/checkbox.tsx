import { forwardRef, ReactNode } from 'react'
import { styled, CSS } from '@theme/stitches.config'
import { Paragraph } from '@theme/typography/text'
import { Flex } from './layout'

interface CheckboxProps {
  id: string
  checked?: boolean
  defaultChecked?: boolean
  children?: ReactNode
  name: string
  css?: CSS
  onChange?: (any) => void
  onBlur?: (any) => void
}

const CheckboxStyles = styled('input', {
  backgroundColor: '$white',
  size: '$2',
  borderColor: '$DBA20',
  borderStyle: 'solid',
  mr: '$3',
})

const LabelStyles = styled(Paragraph, { color: '$DA70' })

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { id, checked, defaultChecked, children, name, onChange, onBlur, ...props },
    ref
  ) => {
    const inputProps = !children && props
    const _checkbox = (
      <CheckboxStyles
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        name={name}
        checked={checked}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        {...inputProps}
      />
    )
    if (!children) {
      return _checkbox
    }
    return (
      <Flex {...props}>
        {_checkbox}
        <LabelStyles size="xs" as="label" htmlFor={id}>
          {children}
        </LabelStyles>
      </Flex>
    )
  }
)
