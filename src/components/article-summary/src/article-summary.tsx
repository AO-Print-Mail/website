import { Breadcrumbs, Box, Heading3, styled } from '@theme'
interface ArticleSummaryProps {
  title: string
}

const Title = styled(Heading3, {
  color: '$darkBlue',
  textGradient: 'linear-gradient(272.88deg, #0072CE 14.59%, #00237D 101%)',
  mt: '0',
})

const Spacer = styled('span', {
  display: 'block',
  height: '$space$3',
  minHeight: '$space$3',
})

export const ArticleSummary: React.FC<ArticleSummaryProps> = ({
  title,
  ...props
}) => {
  return (
    <Box {...props}>
      <Breadcrumbs links={[{ name: 'Blog', url: '/blog' }]} />
      <Spacer />
      <Title as="h1">{title}</Title>
      <Spacer />
    </Box>
  )
}
