import { createStyled } from '@stitches/react'
import { breakpoints } from './breakpoints'
import { colors } from './tokens'

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors,
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
