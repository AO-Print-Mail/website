import { styled, ResetButton, theme } from '@theme'
import { ReactChild } from 'react'
import * as Icons from '@theme/icons'
import * as React from 'react'
import { __DEV__ } from '@utils/src'

interface ButtonProps {
  onClick: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => any
}

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
  backgroundColor: '$blue',
  color: '$white',
  border: 'none',
  borderRadius: '$2',
  minWidth: '$5',
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
  variants: {
    color: { light: {} },
    size: {
      small: {
        fontSize: '$p4m',
        when: {
          m: { fontSize: '$p4t', px: '$2', py: '$2', br: '$2' },
          l: { fontSize: '$p4d', px: '$2', py: '$2', br: '$2' },
        },
      },
    },
    style: {
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
  },
  compoundVariants: [
    {
      style: 'naked',
      color: 'light',
    },
    {
      color: '$LA80',
      '&:hover': {
        backgroundColor: '$LA10',
        color: '$LA100',
      },
    },
  ],
})

interface CleverButtonProps {
  style?: 'naked' | 'solid' | 'border' | 'icon'
  color?: 'primary' | 'light' | 'dark' | 'success' | 'error'
  state?: 'disabled' | 'loading'
  size?: 'regular' | 'small'
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  iconSpacing?: keyof typeof theme['space']
  isFullWidth?: boolean
  as?: string
}

const CleverButton: React.FC<CleverButtonProps> = ({
  style = 'solid',
  color = 'primary',
  size = 'regular',
  state,
  leftIcon,
  rightIcon,
  iconSpacing,
  isFullWidth,
  children,
  ...props
}) => {
  {
    leftIcon && state !== 'loading' && (
      <ButtonIcon css={{ mr: iconSpacing }}>{leftIcon}</ButtonIcon>
    )
  }
  {
    rightIcon && state !== 'loading' && (
      <ButtonIcon css={{ mr: iconSpacing }}>{rightIcon}</ButtonIcon>
    )
  }
  return <ButtonBg>{children}</ButtonBg>
}

if (__DEV__) {
  CleverButton.displayName = 'Button'
}

interface ButtonIconProps {
  css?: {}
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ children, ...props }) => {
  const Span = styled('span', {})
  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        'aria-hidden': true,
        size: 'unset',
      })
    : children
  return <Span {...props}>{_children}</Span>
}
