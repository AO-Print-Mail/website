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
