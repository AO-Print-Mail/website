import { Breadcrumbs, Box, Spacer, styled, Paragraph, Title } from '@theme'
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

const Updated = styled(Paragraph, {
  color: '$DBA70',
})

const structuredTextRulez = [
  renderRule(isParagraph, ({ key, children }) => (
    <Paragraph size="m" key={key}>
      {children}
    </Paragraph>
  )),
]

export const ArticleSummary: React.FC<
  ArticleSummaryProps & React.ComponentProps<typeof Box>
> = ({ title, lastUpdated, summary, breadcrumbLinks, ...props }) => {
  return (
    <Box {...props}>
      {breadcrumbLinks && <Breadcrumbs links={breadcrumbLinks} />}
      <Spacer size={breadcrumbLinks ? 'small' : 'large'} />
      <Title color="primaryGradient" css={{ my: '0' }}>
        {title}
      </Title>
      {lastUpdated && <Updated size="s">Last updated {lastUpdated}</Updated>}
      <StructuredText data={summary} customRules={structuredTextRulez} />
    </Box>
  )
}
