import { css, styled } from '@theme'

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
  variants: {
    layout: {
      fullWidth: {
        mx: '50%',
        position: 'relative',
        width: '100vw',
        left: '-50vw',
        right: '-50vw',
        padding: '0',
      },
    },
  },
})

export const ColumnWrapper = styled(Flex, {
  position: 'relative',
  mx: 'calc(-$space$3 / 2)',
  '@m': { mx: 'calc(-$space$4 / 2)' },
  '@l': { mx: 'calc(-$space$4 / 2)' },
  '@xl': { mx: 'calc(-$space$5 / 2)' },
})

export const TextHolder = styled('div', {
  p: '$2',
  '@m': { p: '$3' },
  '@l': { p: '$4' },
})

export const TextHolderClass = css({
  p: '$2',
  '@m': { p: '$3' },
  '@l': { p: '$4' },
})

export const BreakoutTextHolder = styled('div', {
  mx: '-$2',
  '@m': { mx: '-$3' },
  '@l': { mx: '-$4' },
})

export const HoverGroup = styled(Box, {})
export const HoverGroupFlex = styled(Flex, {})
