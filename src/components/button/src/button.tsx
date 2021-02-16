import { styled, ResetButton, theme, CSS, UI1 } from '@theme'
import { forwardRef } from 'react'
import * as Icons from '@theme/icons'
import * as React from 'react'
import { __DEV__ } from '@utils/src'

export const NakedButton = styled(ResetButton, {
  backgroundColor: 'transparent',
  border: 'none',
  color: '$DBA90',
  '&:hover': {
    backgroundColor: '$BA10',
    color: '$DBA100',
  },
  px: '$2',
  py: '$2',
  br: '$3',
  fontSize: '$p3m',
  when: {
    m: { fontSize: '$p3t', px: '$2', py: '$3', br: '$3' },
    l: { fontSize: '$p3d', px: '$3', py: '$3', br: '$4' },
  },
})

const ButtonBg = styled(ResetButton, {
  color: '$white',
  border: 'none',
  borderRadius: '$2',
  px: '$2',
  py: '$2',
  br: '$3',
  fontSize: '$p3m',
  when: {
    m: { fontSize: '$p3t', px: '$3', py: '$3', br: '$3' },
    l: { fontSize: '$p3d', px: '$4', py: '$3', br: '$4' },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '$blue',
        color: '$white',
        '&:hover': {
          backgroundColor: '$BA10',
          color: '$DBA100',
        },
      },
      light: {
        backgroundColor: '$N10',
        color: '$BA90',
        '&:hover': {
          backgroundColor: '$white',
          color: '$BA100',
        },
      },
    },
    size: {
      small: {
        fontSize: '$p4m',
        when: {
          m: { fontSize: '$p4t', px: '$2', py: '$2', br: '$2' },
          l: { fontSize: '$p4d', px: '$2', py: '$2', br: '$2' },
        },
      },
    },
    fullWidth: {
      true: {
        width: '$fill',
      },
      false: {
        minWidth: '$5',
      },
    },
    style: {
      solid: {},
      naked: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '$DBA90',
        '&:hover': {
          backgroundColor: '$BA10',
          color: '$DBA100',
        },
      },
    },
    bgHover: { none: {} },
    offset: {
      center: {},
      left: {
        //NEGATIVE MARGIN BEING FIXED IN BETA https://github.com/modulz/stitches/issues/370
        ml: 'calc(var(--space-2) * -1)',
        when: {
          m: { ml: 'calc(var(--space-3) * -1)' },
          l: { ml: 'calc(var(--space-4) * -1)' },
        },
      },
      right: {
        mr: 'calc(var(--space-2) * -1)',
        when: {
          m: { mr: 'calc(var(--space-3) * -1)' },
          l: { mr: 'calc(var(--space-4) * -1)' },
        },
      },
    },
  },
  compoundVariants: [
    {
      style: 'naked',
      color: 'light',
      css: {
        backgroundColor: 'transparent',
        color: '$LA80',
        '&:hover': {
          backgroundColor: '$LA10',
          color: '$LA100',
        },
      },
    },
    {
      style: 'naked',
      color: 'dark',
      css: {
        backgroundColor: 'transparent',
        color: '$DA80',
        '&:hover': {
          backgroundColor: '$DA10',
          color: '$DA100',
        },
      },
    },
    {
      style: 'naked',
      color: 'primary',
      css: {
        backgroundColor: 'transparent',
        color: '$DBA80',
        '&:hover': {
          backgroundColor: '$BA10',
          color: '$DBA100',
        },
      },
    },
    {
      style: 'naked',
      bgHover: 'none',
      css: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    {
      offset: 'left',
      size: 'small',
      css: {
        ml: 'calc(var(--space-2) * -1)',
        when: {
          m: { ml: 'calc(var(--space-2) * -1)' },
          l: { ml: 'calc(var(--space-2) * -1)' },
        },
      },
    },
    {
      offset: 'right',
      size: 'small',
      css: {
        mr: 'calc(var(--space-2) * -1)',
        when: {
          m: { mr: 'calc(var(--space-2) * -1)' },
          l: { mr: 'calc(var(--space-2) * -1)' },
        },
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'regular',
    fullWidth: 'false',
    offset: 'center',
  },
})

interface ButtonProps {
  style?: 'naked' | 'solid' | 'border' | 'icon'
  color?: 'primary' | 'light' | 'dark' | 'success' | 'error'
  state?: 'disabled' | 'loading'
  size?: 'regular' | 'small'
  offset?: 'left' | 'right'
  fullWidth?: 'true' | 'false'
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  iconSpacing?: keyof typeof theme['space']
  isFullWidth?: boolean
  as?: string
  href?: string
  css?: CSS
}

const defaultSpacing = (direction: 'left' | 'right') => {
  const key = {
    left: 'marginLeft',
    right: 'marginRight',
  }[direction]
  return {
    [key]: '$2',
    when: {
      m: {
        [key]: '$3',
      },
    },
  }
}

export const Button: React.FC<ButtonProps> = forwardRef(
  (
    {
      style = 'solid',
      color = 'primary',
      size = 'regular',
      state,
      leftIcon,
      rightIcon,
      isFullWidth,
      children,
      ...props
    },
    ref
  ) => {
    const LeftIcn = leftIcon && (
      <ButtonIcon css={{ ...defaultSpacing('right') }}>{leftIcon}</ButtonIcon>
    )

    const RightIcn = rightIcon && (
      <ButtonIcon css={{ ...defaultSpacing('left') }}>{rightIcon}</ButtonIcon>
    )

    const _children =
      typeof children === 'string' ? (
        <UI1 color="unset">{children}</UI1>
      ) : (
        children
      )

    return (
      <ButtonBg style={style} color={color} size={size} {...props} ref={ref}>
        {LeftIcn && LeftIcn}
        {children}
        {RightIcn && RightIcn}
      </ButtonBg>
    )
  }
)

if (__DEV__) {
  Button.displayName = 'Button'
}

interface ButtonIconProps {
  css?: CSS
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ children, ...props }) => {
  const Span = styled('span', {})
  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        'aria-hidden': true,
      })
    : children
  return <Span {...props}>{_children}</Span>
}
