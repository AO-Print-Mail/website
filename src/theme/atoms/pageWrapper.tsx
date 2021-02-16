import { styled, ThemeVariants } from '..'

export type PageWrapperVariants = ThemeVariants<typeof PageWrapper>

export const PageWrapper = styled('main', {
  minHeight: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'stretch',
  alignItems: 'stretch',
  boxSizing: 'content-box',
})
