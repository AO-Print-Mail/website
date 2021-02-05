import { createStyled } from '@stitches/react'
import { breakpoints } from './breakpoints'
import tokens from './tokens'

export const { styled, css } = createStyled({
  prefix: '',
  tokens,
  breakpoints,
  utils: {},
})
