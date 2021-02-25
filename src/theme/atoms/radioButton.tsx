import { forwardRef } from 'react'
import { styled, UI3 } from '..'

interface RadioButtonProps {
  id?: string
  value?: string
  name: string
  checked?: boolean
  defaultChecked?: boolean
  children?: React.ReactNode
}

const HiddenRadio = styled('input', {
  opacity: 0,
  position: 'fixed',
  width: 0,
})

const Block = styled('div', {
  mr: '$2',
  mt: '$2',
  '& > label:hover': {
    color: '$DBA80',
    backgroundColor: '$GA20',
  },
  '& > input[type="radio"]:focus + label': {
    boxShadow: '$1',
    backgroundColor: '$DA20',
    border: '2px solid $GA75',
    color: '$DBA80',
    py: 'calc($2 - 2px)',
    px: 'calc($2 - 2px)',
    '&:hover': { backgroundColor: '$GA40' },
  },
  '& > input[type="radio"]:checked + label': {
    backgroundColor: '$green',
    color: '$LA90',
    '&:hover': { backgroundColor: '$G40' },
    '&:focus': { border: '1px solid black' },
  },
})

const Label = styled(UI3, {
  py: '$2',
  px: '$2',
  display: 'block',
  br: '$3',
  backgroundColor: '$DA10',
  color: '$DBA70',
})

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ id, children, value, name, defaultChecked, checked, ...props }, ref) => {
    return (
      <Block {...props}>
        <HiddenRadio
          type="radio"
          id={id}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          checked={checked}
          ref={ref}
        />
        <Label as="label" htmlFor={id}>
          {children}
        </Label>
      </Block>
    )
  }
)
