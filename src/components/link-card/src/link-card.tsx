import {
  Card as CardBg,
  Flex,
  ArrowForward,
  styled,
  CSS,
  Spacer,
  Paragraph4,
  Paragraph,
  Heading,
} from '@theme'
import {
  Image,
  renderRule,
  ResponsiveImageType,
  StructuredText,
} from 'react-datocms'
import { isParagraph } from 'datocms-structured-text-utils'

interface LinkCardProps {
  title?: string
  image?: ResponsiveImageType
  description?: unknown
  link?: string
  linkText?: string
  css?: CSS
}

interface LinkTextProps {
  text: string
  css?: CSS
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

const LinkText = styled(Paragraph, {
  m: '0',
  color: '$blue',
  [`&:hover, ${CardBackground}:hover &`]: {
    color: '$B40',
  },
})

const Arrow = styled(ArrowForward, {
  opacity: '1',
  willChange: 'transform',
  transition: 'transform 0.2s ease-out',
  color: '$blue',
  ml: '$2',
  alignSelf: 'center',
  [`&:hover, ${CardBackground}:hover &`]: {
    transform: 'translateX($space$1)',
    color: '$B40',
  },
})

const CtaLink: React.FC<LinkTextProps> = ({ text, css }) => {
  return (
    <Flex as="span" css={{ mt: '$4', ...css }}>
      <LinkText size="4">{text}</LinkText>
      <Arrow />
    </Flex>
  )
}

const textRules = [
  renderRule(isParagraph, (node) => (
    <Paragraph4 css={{ color: 'inherit', mt: '$1' }} key={node.key}>
      {node.children}
    </Paragraph4>
  )),
]

const Title = styled(Heading, {
  color: '$DBA90',
  mt: '$2',
  lineHeight: '$3',
  flex: '0 0',
})

const ImgWrapper = styled('div', {
  order: '-1',
  br: '$2',
  overflow: 'hidden',
})

const Img = styled(Image, {
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  [`${CardBackground}:hover &`]: {
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
  linkText,
  title,
  ...props
}) => {
  return (
    <CardBackground {...props}>
      <Spacer />
      <Title as="h1" level="6">
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
      </Title>
      <Spacer />
      <Flex
        css={{
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          flex: '1 1',
        }}
      >
        <Summary data={description} />
        <CtaLink text="Read more" />
      </Flex>
      <ImgWrapper>
        <Img data={image} />
      </ImgWrapper>
    </CardBackground>
  )
}
