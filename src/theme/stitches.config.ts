import createCss, { StitchesCss, StitchesVariants } from '@stitches/react'
import { breakpoints as conditions } from './breakpoints'
import { theme } from './theme'
import utils from './utils'

export const stitchesConfig = createCss({
  prefix: '',
  theme,
  conditions,
  utils,
})

export { theme }
export type CSS = StitchesCss<typeof stitchesConfig>
export const { css, styled, getCssString, global } = stitchesConfig
export type ThemeVariants<T> = StitchesVariants<T>
