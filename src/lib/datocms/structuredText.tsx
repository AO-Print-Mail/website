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
import { renderRule, StructuredText as ConfigurableText } from 'react-datocms'
import { Heading, List, Paragraph } from '@theme'

const BlockQuote = dynamic(() =>
  import('@theme/atoms/blockquote').then((res) => res.BlockQuote)
)
const UnorderedList = dynamic(() =>
  import('@theme/atoms/lists').then((res) => res.UnorderedList)
)
const OrderedList = dynamic(() =>
  import('@theme/atoms/lists').then((res) => res.OrderedList)
)
const ListItem = dynamic(() =>
  import('@theme/atoms/lists').then((res) => res.ListItem)
)

type structuredTextConfig = {
  headingProps?: React.ComponentProps<typeof Heading> & {
    fromSize: number
    fromLevel: number
  }
  paragraphProps?: React.ComponentProps<typeof Paragraph> & {
    size?: 'l' | 'm' | 's' | 'xs'
  }
  listItemProps?: React.ComponentProps<typeof ListItem>
  blockquoteProps?: React.ComponentProps<typeof BlockQuote>
  listProps?: React.ComponentProps<typeof List>
  strikethroughProps?: React.ComponentProps<'span'>
}

const setLevel = (start: number = 1, level: number) => {
  const bump = start - 1
  if (level + bump >= 6) return 6
  return level + bump
}

function isStrikethroughGuard(node: Node): node is Span {
  return node.type === 'span' && !!node.marks?.includes('strikethrough')
}

const defaults = {
  isHeading: ({
    headingProps: { fromSize = 1, fromLevel = 1, ...props } = {},
  }: structuredTextConfig = {}) =>
    renderRule(isHeadingGuard, ({ node, children, key }) => {
      return (
        <Heading
          key={key}
          level={setLevel(fromSize, node.level)}
          as={`h${setLevel(fromLevel, node.level)}`}
          children={children}
          {...props}
        />
      )
    }),
  isParagraph: ({
    paragraphProps: { size, ...props } = { size: 'm' },
  }: structuredTextConfig) =>
    renderRule(isParagraphGuard, ({ children, key }) => (
      <Paragraph key={key} children={children} size={size} {...props} />
    )),
  isBlockquote: ({ blockquoteProps }: structuredTextConfig) =>
    renderRule(isBlockquoteGuard, ({ children, key }) => (
      <BlockQuote key={key} children={children} {...blockquoteProps} />
    )),
  isList: ({ listProps }: structuredTextConfig) =>
    renderRule(isListGuard, ({ node, children, key }) => {
      if (node.style === 'numbered') {
        //@ts-ignore - expects component but we are still rendering dast tree
        return <OrderedList key={key} children={children} {...listProps} />
      }
      //@ts-ignore - expects component but we are still rendering dast tree
      return <UnorderedList key={key} children={children} {...listProps} />
    }),
  isListItem: ({ listItemProps }: structuredTextConfig) =>
    renderRule(isListItemGuard, ({ key, children }) => (
      <ListItem key={key} children={children} {...listItemProps} />
    )),
  isStrikethrough: ({ strikethroughProps }: structuredTextConfig) =>
    renderRule(isStrikethroughGuard, ({ children, key }) => (
      <s key={key} children={children} {...strikethroughProps} />
    )),
  /*isLink: ({ linkProps }) =>
    renderRule(isLinkGuard, ({ node, key, children }) => {}),*/
}

const isStrikethrough = ({ strikethroughProps } = { strikethroughProps: {} }) =>
  renderRule(isStrikethroughGuard, ({ children, key }) => (
    <s key={key} children={children} {...strikethroughProps} />
  ))
const isCode = ({ codeProps }) =>
  renderRule(isCodeGuard, ({ key, children, node }) => (
    <code key={key} children={children} {...codeProps} />
  ))
const isBlock = (props) => renderRule(isBlockGuard, (node) => <></>)
const isInlineItem = (props) => renderRule(isInlineItemGuard, (node) => <></>)
const isThematicBreak = (props) =>
  renderRule(isThematicBreakGuard, (node) => <></>)
const isInlineNode = (props) => renderRule(isInlineNodeGuard, (node) => <></>)
const isItemLink = (props) => renderRule(isItemLinkGuard, (node) => <></>)
const isLink = (props) => renderRule(isLinkGuard, (node) => <></>)
const isRoot = (props) => renderRule(isRootGuard, (node) => <></>)
const isSpan = (props) => renderRule(isSpanGuard, (node) => <></>)

/**function (node: Node): node is Span {
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
  ), */

export const structuredTextRules = ({
  ruleOverrides,
  ...propConfig
}: structuredTextConfig & {
  ruleOverrides?: Partial<typeof defaults>
} = {}) => {
  return Object.values(Object.assign({}, defaults, ruleOverrides)).map((k) =>
    k(propConfig)
  )
}
type ConfigurableTextParams = Parameters<typeof ConfigurableText>[0]
interface StructuredTextProps extends ConfigurableTextParams {
  config?: structuredTextConfig & { ruleOverrides?: Partial<typeof defaults> }
}

export const renderInlineRecordRules: React.ComponentProps<
  typeof ConfigurableText
>['renderInlineRecord'] = (node) => {
  return <div></div>
}
export const renderLinkToRules: React.ComponentProps<
  typeof ConfigurableText
>['renderLinkToRecord'] = (node) => {
  return <div></div>
}

export const StructuredText: React.FC<StructuredTextProps> = ({
  config,
  data,
  ...props
}) => {
  return (
    <ConfigurableText
      renderInlineRecord={renderInlineRecordRules}
      customRules={structuredTextRules(config)}
      renderLinkToRecord={renderLinkToRules}
      data={data}
      {...props}
    />
  )
}
