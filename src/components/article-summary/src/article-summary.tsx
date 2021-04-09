import {
  Breadcrumbs,
  Box,
  Heading3,
  styled,
  Paragraph5,
  Paragraph4,
} from '@theme'
import { isParagraph } from 'datocms-structured-text-utils'
import {
  renderRule,
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms'
interface ArticleSummaryProps {
  title: string
  lastUpdated: string
  summary: StructuredTextDocument
}

const Title = styled(Heading3, {
  color: '$darkBlue',
  textGradient: 'linear-gradient(272.88deg, #0072CE 14.59%, #00237D 101%)',
  mt: '0',
})

const Spacer = styled('span', {
  display: 'block',
  height: '$space$2',
  minHeight: '$space$2',
})

const Updated = styled(Paragraph5, {
  color: '$DBA70',
})

const structuredTextRulez = [
  renderRule(isParagraph, ({ key, children }) => (
    <Paragraph4 css={{ color: '$DBA80' }} key={key}>
      {children}
    </Paragraph4>
  )),
]

export const ArticleSummary: React.FC<ArticleSummaryProps> = ({
  title,
  lastUpdated,
  summary,
  ...props
}) => {
  return (
    <Box {...props}>
      <Breadcrumbs links={[{ name: 'Blog', url: '/blog' }]} />
      <Spacer />
      <Title as="h1">{title}</Title>
      <Updated>Last updated {lastUpdated}</Updated>
      <StructuredText data={summary} customRules={structuredTextRulez} />
    </Box>
  )
}
