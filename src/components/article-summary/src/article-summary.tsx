import {
  Breadcrumbs,
  Box,
  Spacer,
  styled,
  Paragraph5,
  Paragraph4,
  Heading1,
} from '@theme'
import { isParagraph } from 'datocms-structured-text-utils'
import React from 'react'
import {
  renderRule,
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms'

interface ArticleSummaryProps {
  title: string
  lastUpdated?: string
  summary: StructuredTextDocument
  breadcrumbLinks?: { name: string; url: string }[]
}

const Title = styled(Heading1, {
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

export const ArticleSummary: React.FC<
  ArticleSummaryProps & React.ComponentProps<typeof Box>
> = ({ title, lastUpdated, summary, breadcrumbLinks, ...props }) => {
  return (
    <Box {...props}>
      {breadcrumbLinks && <Breadcrumbs links={breadcrumbLinks} />}
      <Spacer size={breadcrumbLinks ? 'small' : 'large'} />
      <Title>{title}</Title>
      {lastUpdated && <Updated>Last updated {lastUpdated}</Updated>}
      <StructuredText data={summary} customRules={structuredTextRulez} />
    </Box>
  )
}
