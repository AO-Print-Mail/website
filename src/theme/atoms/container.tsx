import { styled, ThemeVariants } from '@theme/stitches.config'

export type ContainerVariants = ThemeVariants<typeof Container>

export const Container = styled('div', {
  position: 'relative',
  mx: 'auto',
  px: '$3',
  '@m': {
    px: '$4',
    maxWidth: '60rem',
  },
  '@l': {
    maxWidth: '96rem',
    px: '$5',
  },
})
