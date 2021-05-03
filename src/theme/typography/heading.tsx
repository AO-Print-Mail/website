import { setComponentProps } from '@theme/utils/setComponentProps'
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

export const Heading = styled('h1', {
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
    level: { ...headingSizes },
    color: {
      primary: {
        color: '$DBA100',
      },
      light: {
        color: '$LA100',
      },
      primaryGradient: {
        textGradient:
          'linear-gradient(272.88deg, #0072CE 14.59%, #00237D 101%)',
      },
      lightGradient: {
        textGradient:
          'linear-gradient(272.88deg, #B6DDF6 14.59%, #0072CE 101%)',
      },
      orangeGradient: {
        textGradient: 'linear-gradient(90deg, #EE3131 0.03%, #F89E33 100.02%)',
      },
    },
    alignLeft: { true: { textAlign: 'left' } },
    alignRight: { true: { textAlign: 'right' } },
    alignCenter: { true: { textAlign: 'center' } },
    marginTop: {
      none: { mt: '0' },
      small: {
        mt: '$2',
        '@m': {
          marginTop: '$3',
        },
        '@l': {
          marginTop: '$4',
        },
      },
    },
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

export const Heading1 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h1',
  level: '1',
})
export const Heading2 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h2',
  level: '2',
})
export const Heading3 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h3',
  level: '3',
})
export const Heading4 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h4',
  level: '4',
})
export const Heading5 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h5',
  level: '5',
})
export const Heading6 = setComponentProps<HTMLHeadingElement>(Heading, {
  as: 'h6',
  level: '6',
})
