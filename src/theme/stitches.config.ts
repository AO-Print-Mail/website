import createCss, {
  StitchesCss,
  StitchesVariants,
  StitchesComponent,
} from '@stitches/react'
import { breakpoints as conditions } from './breakpoints'
import { theme } from './theme'
import utils from './utils'

export const stitchesConfig = createCss({
  prefix: '',
  theme,
  conditions,
  utils,
})

export const { css, styled, getCssString, global } = stitchesConfig
export { theme }
export type CSS = StitchesCss<typeof stitchesConfig>
export type ThemeVariants<T> = StitchesVariants<T>
export type { StitchesComponent }
