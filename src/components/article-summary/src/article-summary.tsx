import {
  Breadcrumbs,
  Box,
  Spacer,
  styled,
  Paragraph5,
  Paragraph4,
  Heading,
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

const Title = styled(Heading, {
  textGradient: 'linear-gradient(272.88deg, #0072CE 14.59%, #00237D 101%)',
  my: '0',
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
      <Spacer size="small" />
      <Title as="h1">{title}</Title>
      <Updated>Last updated {lastUpdated}</Updated>
      <StructuredText data={summary} customRules={structuredTextRulez} />
    </Box>
  )
}
