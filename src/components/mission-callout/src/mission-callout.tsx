import { Box, CSS, FullWidthFeatureContainer, styled, Title } from '@theme'
import { FullWidthCalloutRecord } from '@lib/datocms/__generated__/types'
import { StructuredText, renderRule } from 'react-datocms'
import { isParagraph } from 'datocms-structured-text-utils'
import type { Span, Node } from 'datocms-structured-text-utils'
interface MissionCalloutProps
  extends React.ComponentProps<typeof FullWidthFeatureContainer> {
  data?: Pick<FullWidthCalloutRecord, 'id' | 'subheading' | 'callout'>
  className?: unknown
}

const CalloutText = styled(Title, {
  color: '$LA90',
})
const BoldText = styled('span', {
  color: '$lightBlue',
  textGradient: 'linear-gradient(272.88deg, #B6DDF6 14.59%, #0072CE 101%)',
})
const HighlightedText = styled('span', {
  color: '$orange',
  textGradient: 'linear-gradient(90deg, #EE3131 0.03%, #F89E33 100.02%)',
})

const rulez = [
  renderRule(isParagraph, ({ key, children }) => (
    <CalloutText key={key}>{children}</CalloutText>
  )),
  renderRule(
    function (node: Node): node is Span {
      return node.type === 'span' && !!node.marks?.includes('strong')
    },
    ({ node, key }) => <BoldText key={key}>{node.value}</BoldText>
  ),
  renderRule(
    function (node: Node): node is Span {
      return node.type === 'span' && !!node.marks?.includes('highlight')
    },
    ({ node, key }) => <HighlightedText key={key}>{node.value}</HighlightedText>
  ),
]

export const MissionCallout: React.FC<MissionCalloutProps> = ({
  data,
  ...props
}) => {
  return (
    //@ts-expect-error
    <FullWidthFeatureContainer {...props}>
      <Box css={{ '@xl': { mx: '8.33%' } }}>
        <StructuredText
          customRules={rulez}
          //@ts-ignore
          data={data.callout}
        />
      </Box>
    </FullWidthFeatureContainer>
  )
}
