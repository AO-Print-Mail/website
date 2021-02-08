import { createStyled } from '@stitches/react'
import { breakpoints } from './breakpoints'
import { tokens } from './tokens'
import utils from './utils'

export const { styled, css } = createStyled({
  prefix: '',
  tokens,
  breakpoints,
  utils: {},
})
