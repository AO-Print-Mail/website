import { styled, ThemeVariants } from '..'

export type ContainerVariants = ThemeVariants<typeof Container>

export const Container = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '96rem',
  px: '$3',
  when: {
    m: {
      px: '$4',
    },
    l: {
      px: '$5',
    },
  },
})
