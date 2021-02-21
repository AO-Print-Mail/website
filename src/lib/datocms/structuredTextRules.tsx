import * as React from 'react'
import {
  renderRule,
  isHeading,
  isParagraph,
  isBlockquote,
  isList,
  isListItem,
  Span,
  Node,
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
  BlockQuote,
  UnorderedList,
  OrderedList,
  ListItem,
  strikethroughClass,
  underlineClass,
} from '@theme'

type structuredTextConfig = {
  headingProps?: {}
  paragraphProps?: {
    size?:
      | 'Paragraph1'
      | 'Paragraph2'
      | 'Paragraph3'
      | 'Paragraph4'
      | 'Paragraph5'
  }
}

export const structuredTextRules = ({
  headingProps = { color: 'primary' },
  paragraphProps: { size: paragraphSize, ...paragraphProps } = {
    size: 'Paragraph2',
  },
}: structuredTextConfig) => [
  renderRule(isHeading, ({ node, children, key }) => {
    switch (node.level) {
      case 1:
        return <Heading1 children={children} key={key} {...headingProps} />
      case 2:
        return <Heading2 children={children} key={key} {...headingProps} />
      case 3:
        return <Heading3 children={children} key={key} {...headingProps} />
      case 4:
        return <Heading4 children={children} key={key} {...headingProps} />
      case 5:
        return <Heading5 children={children} key={key} {...headingProps} />
      case 6:
        return <Heading6 children={children} key={key} {...headingProps} />
      default:
        return <Heading6 children={children} key={key} {...headingProps} />
    }
  }),
  renderRule(isParagraph, ({ node, children, key }) => {
    switch (paragraphSize) {
      case 'Paragraph1':
        return <Paragraph1 {...paragraphProps} children={children} key={key} />
      case 'Paragraph2':
        return <Paragraph2 {...paragraphProps} children={children} key={key} />
      case 'Paragraph3':
        return <Paragraph3 {...paragraphProps} children={children} key={key} />
      case 'Paragraph4':
        return <Paragraph4 {...paragraphProps} children={children} key={key} />
      case 'Paragraph5':
        return <Paragraph5 {...paragraphProps} children={children} key={key} />
      default:
        return <Paragraph2 {...paragraphProps} children={children} key={key} />
    }
  }),
  renderRule(
    function (node: Node): node is Span {
      return node.type === 'span' && !!node.marks?.includes('strikethrough')
    },
    ({ node, key, children }) => {
      const markLookup = {
        underline: underlineClass,
        strikethrough: strikethroughClass,
      }
      const classNames: string = node.marks.reduce(
        (acc, m) => (markLookup[m] ? acc.concat(' ' + markLookup[m]) : acc),
        ''
      )
      return (
        <s aria-hidden={true} className={classNames} key={key}>
          {node.value || children}
        </s>
      )
    }
  ),
  renderRule(isList, function ({ node, children, key }) {
    if (node.style === 'numbered') {
      //@ts-ignore - expects component but we are still rendering dast tree
      return <OrderedList key={key} children={children} />
    }
    //@ts-ignore - expects component but we are still rendering dast tree
    return <UnorderedList key={key} children={children} />
  }),
  renderRule(isListItem, function ({ node, children, key }) {
    //@ts-ignore - expects component but we are still rendering dast tree
    return <ListItem icon="Check" key={key} children={children} />
  }),
  renderRule(isBlockquote, function ({ node, children, key }) {
    return <BlockQuote key={key}>{children}</BlockQuote>
  }),
]
