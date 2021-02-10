import { styled, ThemeProps, ThemeVariants } from '..'

export type ContainerProps = ThemeProps<typeof Container>
export type ContainerVariants = ThemeVariants<typeof Container>

export const Container = styled('div', {
  maxWidth: '100%',
  width: '100%',
  position: 'relative',
  mx: '$3',
  m: {
    mx: '$4',
  },
  l: {
    mx: '$5',
  },
  xl: {
    maxWidth: '96rem',
  },
})
