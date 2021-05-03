import { StitchesCss, StitchesVariants, createCss } from '@stitches/react'
import { breakpoints as media } from './breakpoints'
import { theme } from './tokens'
import utils from './utils/utils'

export const stitchesConfig = createCss({
  prefix: '',
  theme,
  media,
  utils,
})

export { theme }
export type CSS = StitchesCss<typeof stitchesConfig>
export const { css, styled, keyframes, getCssString, global } = stitchesConfig
export type ThemeVariants<T> = StitchesVariants<T>
