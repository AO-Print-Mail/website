import { styled, ThemeProps, ThemeVariants } from '..'

export type PageWrapperProps = ThemeProps<typeof PageWrapper>
export type PageWrapperVariants = ThemeVariants<typeof PageWrapper>

export const PageWrapper = styled('main', {
  maxWidth: '100%',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'stretch',
})
