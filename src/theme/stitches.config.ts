import { createStyled, StitchesProps, StitchesVariants } from '@stitches/react'
import { breakpoints } from './breakpoints'
import { tokens } from './tokens'
import utils from './utils'

export const { styled, css } = createStyled({
  prefix: '',
  tokens,
  breakpoints,
  utils,
})
export type { StitchesProps as ThemeProps, StitchesVariants as ThemeVariants }
