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
import dynamic from 'next/dynamic'

const Heading1 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Heading1)
)
const Heading2 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Heading2)
)
const Heading3 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Heading3)
)
const Heading4 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Heading4)
)
const Heading5 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Heading5)
)
const Heading6 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Heading6)
)
const Paragraph1 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Paragraph1)
)
const Paragraph2 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Paragraph2)
)
const Paragraph3 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Paragraph3)
)
const Paragraph4 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Paragraph4)
)
const Paragraph5 = dynamic(
  import('@theme/atoms/typography').then((res) => res.Paragraph5)
)
const BlockQuote = dynamic(
  import('@theme/atoms/blockquote').then((res) => res.BlockQuote)
)
const UnorderedList = dynamic(
  import('@theme/atoms/lists').then((res) => res.UnorderedList)
)
const OrderedList = dynamic(
  import('@theme/atoms/lists').then((res) => res.OrderedList)
)
const ListItem = dynamic(
  import('@theme/atoms/lists').then((res) => res.ListItem)
)

const strikethroughClass = dynamic(
  import('@theme/atoms/typography').then((res) => res.strikethroughClass)
)
const underlineClass = dynamic(
  import('@theme/atoms/typography').then((res) => res.underlineClass)
)

import { listItemProps } from '@theme'

type structuredTextConfig = {
  headingProps?: {}
  paragraphProps?: {
    color?: string
    size?:
      | 'Paragraph1'
      | 'Paragraph2'
      | 'Paragraph3'
      | 'Paragraph4'
      | 'Paragraph5'
  }
  listItemProps?: listItemProps
}

export const structuredTextRules = ({
  headingProps = { color: 'primary' },
  paragraphProps: { size: paragraphSize, ...paragraphProps } = {
    size: 'Paragraph2',
  },
  listItemProps = {},
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
  renderRule(isListItem, function ({ children, key }) {
    //@ts-ignore - expects component but we are still rendering dast tree
    return <ListItem key={key} children={children} {...listItemProps} />
  }),
  renderRule(isBlockquote, function ({ children, key }) {
    return <BlockQuote key={key}>{children}</BlockQuote>
  }),
]
