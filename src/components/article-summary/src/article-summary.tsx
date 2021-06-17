import { Breadcrumbs, Box, Spacer } from '@theme/atoms'
import { Paragraph, Title } from '@theme/typography'
import { styled } from '@theme/stitches.config'
import { isParagraph } from 'datocms-structured-text-utils'
import React from 'react'
import {
  renderRule,
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms'

interface ArticleSummaryProps extends React.ComponentProps<typeof Box> {
  title: string
  lastUpdated?: string
  summary: string | StructuredTextDocument
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

export const ArticleSummary: React.FC<ArticleSummaryProps> = ({
  title,
  lastUpdated,
  summary,
  breadcrumbLinks,
  ...props
}) => {
  return (
    <Box {...props}>
      {breadcrumbLinks && <Breadcrumbs links={breadcrumbLinks} />}
      <Spacer size={breadcrumbLinks ? 'small' : 'large'} />
      <Title color="primaryGradient" css={{ my: '0' }}>
        {title}
      </Title>
      {lastUpdated && <Updated size="s">Last updated {lastUpdated}</Updated>}
      <Box css={{ '@m': { pr: '$5' }, '@l': { pr: '$6' } }}>
        {typeof summary === 'string' ? (
          <Paragraph size="m">{summary}</Paragraph>
        ) : (
          <StructuredText data={summary} customRules={structuredTextRulez} />
        )}
      </Box>
    </Box>
  )
}
