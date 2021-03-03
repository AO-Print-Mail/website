import { styled, ThemeVariants } from '..'

export type ContainerVariants = ThemeVariants<typeof Container>

export const Container = styled('div', {
  position: 'relative',
  width: '100%',
  mx: 'auto',
  px: '$3',
  when: {
    m: {
      px: '$4',
      maxWidth: '60rem',
    },
    l: {
      maxWidth: '96rem',
      px: '$5',
    },
  },
})
