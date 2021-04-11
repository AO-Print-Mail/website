import * as React from 'react'
import {
  isHeading as isHeadingGuard,
  isParagraph as isParagraphGuard,
  isBlockquote as isBlockquoteGuard,
  isList as isListGuard,
  isListItem as isListItemGuard,
  Span,
  Node,
  isBlock as isBlockGuard,
  isCode as isCodeGuard,
  isInlineItem as isInlineItemGuard,
  isThematicBreak as isThematicBreakGuard,
  isInlineNode as isInlineNodeGuard,
  isItemLink as isItemLinkGuard,
  isLink as isLinkGuard,
  isRoot as isRootGuard,
  isSpan as isSpanGuard,
} from 'datocms-structured-text-utils'
import dynamic from 'next/dynamic'
import { renderRule, StructuredText } from 'react-datocms'

const isHeading = (props) => renderRule(isHeadingGuard, (node) => <></>)
const isParagraph = (props) => renderRule(isParagraphGuard, (node) => <></>)
const isBlockquote = (props) => renderRule(isBlockquoteGuard, (node) => <></>)
const isList = (props) => renderRule(isListGuard, (node) => <></>)
const isListItem = (props) => renderRule(isListItemGuard, (node) => <></>)
const isBlock = (props) => renderRule(isBlockGuard, (node) => <></>)
const isCode = (props) => renderRule(isCodeGuard, (node) => <></>)
const isInlineItem = (props) => renderRule(isInlineItemGuard, (node) => <></>)
const isThematicBreak = (props) =>
  renderRule(isThematicBreakGuard, (node) => <></>)
const isInlineNode = (props) => renderRule(isInlineNodeGuard, (node) => <></>)
const isItemLink = (props) => renderRule(isItemLinkGuard, (node) => <></>)
const isLink = (props) => renderRule(isLinkGuard, (node) => <></>)
const isRoot = (props) => renderRule(isRootGuard, (node) => <></>)
const isSpan = (props) => renderRule(isSpanGuard, (node) => <></>)

const configKeys = ({ headingProps }) => {
  const config = {
    isHeading: renderRule(isHeading, ({ node, children, key }) => {
      const { level } = node
      return (
        <Heading
          children={children}
          level={level}
          as={`h${level}`}
          key={key}
          {...headingProps}
        />
      )
    }),
    isParagraph: {},
    isBlockquote: {},
    isList: {},
    isListItem: {},
    Span: {},
    Node: {},
    isBlock: {},
    isCode: {},
    isDocument: {},
    isInlineItem: {},
    isThematicBreak: {},
    isStructuredText: {},
    isInlineNode: {},
    isItemLink: {},
    isLink: {},
    isRoot: {},
    isSpan: {},
  }
}

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

import { Heading, listItemProps, Paragraph } from '@theme'

type structuredTextConfig = {
  headingProps?: React.ComponentProps<typeof Heading>
  paragraphProps?: React.ComponentProps<typeof Paragraph>
  listItemProps?: React.ComponentProps<typeof ListItem>
}

export const structuredTextRules = ({
  headingProps = { color: 'primary' },
  paragraphProps: { ...paragraphProps } = {
    size: '2',
  },
  listItemProps = {},
}: structuredTextConfig) => [
  renderRule(isHeading, ({ node, children, key }) => {
    const { level } = node
    return (
      <Heading
        children={children}
        level={level}
        as={`h${level}`}
        key={key}
        {...headingProps}
      />
    )
  }),
  renderRule(isParagraph, ({ children, key }) => {
    return <Paragraph children={children} key={key} {...paragraphProps} />
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
