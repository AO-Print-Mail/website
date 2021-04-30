import { StitchesVariants } from '@stitches/core'
import { Component, forwardRef } from 'react'
import { styled, CSS } from '..'

const headingSizes: CSS = {
  1: {
    fontSize: '$h1m',
    lineHeight: '$h1m',
    marginBottom: '-9px',
    letterSpacing: '$xcosy',
    color: '$DBA100',
    '@m': {
      fontSize: '$h1t',
      lineHeight: '$h1t',
      marginBottom: '-7px',
    },
    '@l': {
      fontSize: '$h1d',
      lineHeight: '$h1d',
      marginBottom: '-7px',
    },
  },
  2: {
    fontSize: '$h2m',
    lineHeight: '$h2m',
    marginBottom: '-8px',
    color: '$DBA90',
    '@m': {
      fontSize: '$h2t',
      lineHeight: '$h2t',
      marginBottom: '-6px',
      letterSpacing: '$xcosy',
    },
    '@l': {
      fontSize: '$h2d',
      lineHeight: '$h2d',
      marginBottom: '-5px',
    },
  },
  3: {
    fontSize: '$h3m',
    lineHeight: '$h3m',
    marginBottom: '-8px',
    color: '$DBA85',
    '@m': {
      fontSize: '$h3t',
      lineHeight: '$h3t',
      marginBottom: '-7px',
    },
    '@l': {
      fontSize: '$h3d',
      lineHeight: '$h3d',
      marginBottom: '-6px',
    },
  },
  4: {
    fontSize: '$h4m',
    lineHeight: '$h4m',
    marginBottom: '-7px',
    color: '$DBA80',
    '@m': {
      fontSize: '$h4t',
      lineHeight: '$h4t',
      marginBottom: '-6px',
    },
    '@l': {
      fontSize: '$h4d',
      lineHeight: '$h4d',
      marginBottom: '-5px',
    },
  },
  5: {
    fontSize: '$h5m',
    lineHeight: '$h5m',
    marginBottom: '-8px',
    fontWeight: '$semibold',
    color: '$DBA80',
    '@m': {
      fontSize: '$h5t',
      lineHeight: '$h5t',
      marginBottom: '-5px',
    },
    '@l': {
      fontSize: '$h5d',
      lineHeight: '$h5d',
      marginBottom: '-5px',
    },
  },
  6: {
    fontSize: '$h6m',
    lineHeight: '$h6m',
    marginBottom: '-6px',
    fontWeight: '$semibold',
    color: '$DBA80',
    '@m': {
      fontSize: '$h6t',
      lineHeight: '$h6t',
      marginBottom: '-5px',
    },
    '@l': {
      fontSize: '$h6d',
      lineHeight: '$h6d',
      marginBottom: '-4px',
    },
  },
}

const Heading = styled('h1', {
  fontWeight: '$bold',
  marginTop: '$4',
  overflow: 'visible',
  letterSpacing: '$cosy',
  '@m': {
    marginTop: '$5',
  },
  '@l': {
    marginTop: '$6',
  },
  variants: {
    size: { ...headingSizes },
    color: {
      primary: {
        color: '$DBA100',
      },
      light: {
        color: '$LA100',
      },
    },
    alignLeft: { true: { textAlign: 'left' } },
    alignRight: { true: { textAlign: 'right' } },
    alignCenter: { true: { textAlign: 'center' } },
  },
  compoundVariants: [
    { level: '1', color: 'light', css: { color: '$LA100' } },
    { level: '2', color: 'light', css: { color: '$LA90' } },
    { level: '3', color: 'light', css: { color: '$LA85' } },
    { level: '4', color: 'light', css: { color: '$LA80' } },
    { level: '5', color: 'light', css: { color: '$LA80' } },
    { level: '6', color: 'light', css: { color: '$LA80' } },
  ],
})

interface DefaultProps {
  as?: string
}

function setComponentProps<T>(
  Component: React.FC<any>,
  defaultProps: StitchesVariants<Component>
): React.ForwardRefExoticComponent<
  Pick<any, string | number | symbol> & React.RefAttributes<HTMLHeadingElement>
> {
  //@ts-expect-error
  return forwardRef<T, StitchesVariants<Component>>((componentProps, ref) => (
    <Component ref={ref} {...defaultProps} {...componentProps} />
  ))
}

export const Heading2 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h2',
  size: '2',
})
export const Heading3 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h3',
  size: '3',
})
export const Heading4 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h4',
  size: '4',
})
export const Heading5 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h5',
  size: '5',
})
export const Heading6 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h6',
  size: '6',
})
