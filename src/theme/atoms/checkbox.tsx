import { Check } from '@theme/icons'
import { forwardRef, ReactNode } from 'react'
import { styled, Flex, CSS } from '..'
import { Paragraph } from './typography'

interface CheckboxProps {
  id: string
  checked?: boolean
  defaultChecked?: boolean
  children?: ReactNode
  name: string
  css?: CSS
}

const CheckboxStyles = styled('input', {
  backgroundColor: '$white',
  size: '$2',
  borderColor: '$DBA20',
  borderStyle: 'solid',
  mriu: '$3',
})

const LabelStyles = styled(Paragraph, { color: '$DA70' })

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, checked, defaultChecked, children, name, ...props }, ref) => {
    const inputProps = !children && props
    const _checkbox = (
      <CheckboxStyles
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        name={name}
        checked={checked}
        ref={ref}
        {...inputProps}
      />
    )
    if (!children) {
      return _checkbox
    }
    return (
      <Flex {...props}>
        {_checkbox}
        <LabelStyles size="5" as="label" htmlFor={id}>
          {children}
        </LabelStyles>
      </Flex>
    )
  }
)
