import { createStyled } from '@stitches/react'
import { breakpoints } from './breakpoints'

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $gray500: 'hsl(206,10%,76%)',
      $blue500: 'hsl(206,100%,50%)',
      $purple500: 'hsl(252,78%,60%)',
      $green500: 'hsl(148,60%,60%)',
      $red500: 'hsl(352,100%,62%)',
    },
    fontSizes: {
      $1: '12px',
      $2: '13px',
      $3: '15px',
    },
    fontFamilies: {
      $system:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  breakpoints,
  utils: {},
})
