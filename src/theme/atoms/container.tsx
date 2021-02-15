import { styled, ThemeVariants } from '..'

export type ContainerVariants = ThemeVariants<typeof Container>

export const Container = styled('div', {
  position: 'relative',
  alignSelf: 'stretch',
  mx: '$3',
  when: {
    m: {
      mx: '$4',
    },
    l: {
      mx: '$5',
    },
    xl: {
      maxWidth: '96rem',
    },
  },
})
