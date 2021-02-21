import * as React from 'react'
import {
  renderRule,
  isHeading,
  isParagraph,
} from 'datocms-structured-text-utils'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5,
} from '@theme'

type structuredTextConfig = {
  headingProps?: ReturnType<typeof Heading1>
  paragraphProps: {}
}

export const structuredTextRules = ({ headingProps }: structuredTextConfig) => [
  renderRule(isHeading, ({ node, key, children }) => {
    switch (node.level) {
      case 1:
        return (
          <Heading1 key={key} {...headingProps}>
            {children}
          </Heading1>
        )
      case 2:
        return (
          <Heading2 key={key} {...headingProps}>
            {children}
          </Heading2>
        )
      case 3:
        return (
          <Heading3 key={key} {...headingProps}>
            {children}
          </Heading3>
        )
      case 4:
        return (
          <Heading4 key={key} {...headingProps}>
            {children}
          </Heading4>
        )
      case 5:
        return (
          <Heading5 key={key} {...headingProps}>
            {children}
          </Heading5>
        )
      case 6:
        return (
          <Heading6 key={key} {...headingProps}>
            {children}
          </Heading6>
        )
    }
  }),
  renderRule(isParagraph, ({ node, key, children }) => {}),
]
