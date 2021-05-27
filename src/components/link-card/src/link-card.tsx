import {
  Card as CardBg,
  Flex,
  styled,
  CSS,
  Spacer,
  Paragraph,
  Heading6,
  CtaLink,
  HoverGroup,
} from '@theme'
import {
  Image,
  renderRule,
  ResponsiveImageType,
  StructuredText,
} from 'react-datocms'
import { isParagraph } from 'datocms-structured-text-utils'

interface LinkCardProps extends Partial<React.ComponentProps<typeof CtaLink>> {
  title?: string
  image?: ResponsiveImageType
  description?: unknown
  css?: CSS
  onClick?: (e: React.MouseEvent) => void
}

const CardBackground = styled(CardBg, {
  display: 'flex',
  flexFlow: 'column nowrap',
  position: 'relative',
  color: '$DBA70',
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  minHeight: '100%',
  '&:hover': {
    transform: 'translateY(-$space$1)',
    cursor: 'pointer',
  },
})

const textRules = [
  renderRule(isParagraph, (node) => (
    <Paragraph size="s" css={{ color: 'inherit', mt: '$1' }} key={node.key}>
      {node.children}
    </Paragraph>
  )),
]

const ImgWrapper = styled('div', {
  order: '-1',
  br: '$2',
  overflow: 'hidden',
})

const Img = styled(Image, {
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  [`${HoverGroup}:hover &`]: {
    transform: 'scale(1.01)',
  },
})

const Summary = ({ data }) => {
  return <StructuredText data={data} customRules={textRules} />
}

export const LinkCard: React.FC<LinkCardProps> = ({
  description,
  image,
  link,
  title,
  ...props
}) => {
  return (
    <CardBackground as={HoverGroup} {...props}>
      <Heading6 as="h2" marginTop="small">
        <a
          href={link}
          style={{
            textDecoration: 'none',
            color: 'unset',
            fontFamily: 'unset',
          }}
        >
          {title}
        </a>
      </Heading6>
      <Spacer />
      <Flex
        css={{
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          flex: '1 1',
        }}
      >
        <Summary data={description} />
        <Spacer size="large" />
        <CtaLink text="Read more" />
      </Flex>
      {image && (
        <ImgWrapper>
          <Img data={image} />
        </ImgWrapper>
      )}
    </CardBackground>
  )
}
