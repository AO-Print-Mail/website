import { styled } from '@theme'

export const Box = styled('div', {
  variants: {
    rel: {
      true: { position: 'relative' },
    },
    fillHeight: {
      true: { height: '100%' },
    },
    alignCenter: {
      true: { mx: 'auto', alignSelf: 'center' },
    },
  },
})
export const Flex = styled(Box, {
  display: 'flex',
  variants: {
    column: { true: { flexDirection: 'column' } },
    wrap: { true: { flexWrap: 'wrap' } },
  },
})
export const Grid = styled(Box, { display: 'grid' })

export const Column = styled(Box, {
  px: 'calc($space$3 / 2)',
  '@m': { px: 'calc($space$4 / 2)' },
  '@l': { px: 'calc($space$4 / 2)' },
  '@xl': { px: 'calc($space$5 / 2)' },
})

export const ColumnWrapper = styled(Flex, {
  position: 'relative',
  mx: 'calc(-$space$3 / 2)',
  '@m': { mx: 'calc(-$space$4 / 2)' },
  '@l': { mx: 'calc(-$space$4 / 2)' },
  '@xl': { mx: 'calc(-$space$5 / 2)' },
})

export const TextHolder = styled('div', {
  px: '$2',
  '@m': { px: '$3' },
  '@l': { px: '$4' },
})

export const BreakoutTextHolder = styled('div', {
  mx: '-$2',
  '@m': { mx: '-$3' },
  '@l': { mx: '-$4' },
})
