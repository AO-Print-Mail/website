import { styled, css } from '@theme'
import { CSS } from '@theme/stitches.config'
import { forwardRef } from 'react'
import { ResetButton } from '../atoms/resetButton'

const Text = styled('span', {
  fontWeight: '$regular',
  fontFamily: '$paragraph',
})

const textSizes: CSS = {
  large: {
    fontSize: '',
    '@m': {
      fontSize: '$p1t',
      letterSpacing: '$cosy',
    },
    '@l': {
      fontSize: '$p1d',
      letterSpacing: '$cosy',
    },
  },
}
