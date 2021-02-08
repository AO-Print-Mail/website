import { colors } from './colors'
import * as fonts from './fonts'
import { space, sizes } from './space'

export const tokens = {
  colors,
  ...fonts,
  space,
  sizes,
  borderWidths: {
    $thin: '1px',
    $regular: '2px',
    $bold: '3px',
  },
  borderStyles: {},
  radii: {
    $1: '2px',
    $2: '4px',
    $3: '8px',
    $4: '12px',
    $5: '16px',
    $round: '50%',
    $pill: '9999px',
  },
  shadows: {
    $1:
      '0px 2px 12px -2px rgba(0, 35, 125, 0.02), 0px 4px 7px -2px rgba(17, 16, 43, 0.06)',
    $2:
      '0px 3px 20px -4px rgba(0, 35, 125, 0.04), 0px 8px 24px -2px rgba(17, 16, 43, 0.09)',
    $3:
      '0px 4px 36px -7px rgba(0, 35, 125, 0.06), 0px 10px 26px -4px rgba(17, 16, 43, 0.12)',
  },
  zIndices: {
    $1: '1',
    $2: '2',
    $3: '3',
    $behind: '-1',
    $max: '1000',
  },
  transitions: {},
}
