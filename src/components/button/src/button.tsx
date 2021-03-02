import { styled, ResetButton, theme, CSS, UI1, keyframes } from '@theme'
import { forwardRef } from 'react'
import * as React from 'react'
import { __DEV__ } from '@utils/src'

interface ButtonProps extends React.ComponentProps<typeof ButtonBg> {
  style?: 'naked' | 'solid' | 'border' | 'icon'
  color?: 'primary' | 'light' | 'dark' | 'success' | 'error'
  isLoading?: boolean
  disabled?: boolean
  size?: 'cta' | 'small'
  offset?: 'left' | 'right'
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  iconSpacing?: keyof typeof theme['space']
  as?: string
  href?: string
  css?: CSS
  children?: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
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

const SpinnerKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(-50%, -50%, 0) rotate(0deg)',
  },
  '100%': {
    transform: 'translate3d(-50%, -50%, 0) rotate(360deg)',
  },
})

const Spinner = styled('div', {
  height: '100%',
  width: '100%',
  position: 'relative',
  '&::before': {
    willChange: 'transform',
    border: 'solid 4px $LA20',
    borderBottomColor: '$white',
    borderRadius: '50%',
    content: '""',
    height: '1.5em',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    width: '1.5em',
    animation: `${SpinnerKeyframes} 0.5s`,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
})

const ButtonBg = styled(ResetButton, {
  display: 'flex',
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
    disabled: { true: { cursor: 'not-allowed', opacity: '50%' } },
    color: {
      primary: {
        backgroundColor: '$blue',
        color: '$white',
        '&:hover': {
          backgroundColor: '$B50',
          color: '$white',
        },
      },
      success: {
        backgroundColor: '$green',
        color: '$white',
        '&:hover': {
          backgroundColor: '$G30',
          color: '$white',
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
      cta: {
        height: '$5',
        boxShadow: '$1',
        '&:hover': {
          boxShadow: '$2',
        },
        when: {
          m: {
            height: '$6',
          },
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
    { color: 'success', state: 'disabled', css: { opacity: '50%' } },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'regular',
    fullWidth: 'false',
    offset: 'center',
  },
})

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
const smallSpacing = (direction: 'left' | 'right') => {
  const key = {
    left: 'marginLeft',
    right: 'marginRight',
  }[direction]
  return {
    [key]: '$1',
    when: {
      m: {
        [key]: '$2',
      },
    },
  }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      style = 'solid',
      color = 'primary',
      size = 'regular',
      isLoading,
      state,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const LeftIcn = leftIcon && (
      <ButtonIcon
        css={
          size === 'small'
            ? { ...smallSpacing('right') }
            : { ...defaultSpacing('right') }
        }
      >
        {leftIcon}
      </ButtonIcon>
    )

    const RightIcn = rightIcon && (
      <ButtonIcon
        css={
          size === 'small'
            ? { ...smallSpacing('left') }
            : { ...defaultSpacing('left') }
        }
      >
        {rightIcon}
      </ButtonIcon>
    )

    const _children =
      typeof children === 'string' ? (
        <UI1 color="unset">{children}</UI1>
      ) : (
        children
      )

    return (
      <ButtonBg style={style} color={color} size={size} ref={ref} {...props}>
        {!isLoading && LeftIcn && LeftIcn}
        {!isLoading ? _children : <Spinner />}
        {!isLoading && RightIcn && RightIcn}
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
