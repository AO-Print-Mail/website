import React from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'
import {
  Box,
  Card,
  CtaLink,
  Heading3,
  HoverGroupFlex,
  Paragraph,
  Spacer,
  styled,
} from '@theme'

interface ArticleListCardProps
  extends Partial<React.ComponentProps<typeof CardBackground>> {
  data: CardProps[]
}

interface CardProps extends Partial<React.ComponentProps<typeof Box>> {
  title?: string
  image?: ResponsiveImageType
  description?: string
  link?: string
  linkText?: string
}

const CardBackground = styled(Card, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  py: '0',
  px: '$4',
  '@l': {
    flexDirection: 'row',
    py: '$5',
    px: '$2',
  },
})

const ServiceEntryLayout = styled(HoverGroupFlex, {
  py: '$4',
  flex: '0 0 auto',
  position: 'relative',
  '@l': {
    flexDirection: 'column',
    flex: '1 1',
    px: '$5',
    py: '$0',
  },
})

const BottomBorder = styled('span', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '1px',
  [`${ServiceEntryLayout}:not(:first-child) &`]: {
    background: '$dotted-vertical',
    backgroundSize: '16px 1px',
  },
  '@l': {
    [`${ServiceEntryLayout}:not(:first-child) &`]: {
      background: '$dotted-horizontal',
      backgroundSize: '1px 16px',
      height: '100%',
      width: '1px',
    },
  },
})

const ServiceEntryText = styled(Box, {
  '@l': {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

const ServiceImage = styled(Image, {
  br: '$3',
  flex: '0 0 $sizes$8',
  height: '$7',
  mr: '$3',
  display: 'none !important',
  '@s': {
    display: 'block !important',
  },
  '@m': {
    flexBasis: '$sizes$10',
    height: 'auto',
  },
  '@l': {
    maxWidth: '$12',
  },
})

const ServiceEntry: React.FC<CardProps> = ({
  image,
  title,
  description,
  linkText,
  link,
  ...props
}) => {
  return (
    <ServiceEntryLayout {...props}>
      <BottomBorder aria-hidden />
      <ServiceImage pictureStyle={{ objectFit: 'cover' }} data={image} />
      <ServiceEntryText>
        <Heading3 marginTop={{ '@initial': 'none', '@l': 'small' }}>
          {title}
        </Heading3>
        <Paragraph
          marginTop={{ '@m': 'small' }}
          size="s"
          css={{ color: '$DA70', '@l': { flexBasis: '100%', mr: '$4' } }}
        >
          {description}
        </Paragraph>
        <Spacer />
        <CtaLink text={linkText} to={link} />
      </ServiceEntryText>
    </ServiceEntryLayout>
  )
}

export const ArticleListCard: React.FC<ArticleListCardProps> = ({
  data,
  ...props
}) => {
  return (
    <CardBackground {...props}>
      {data.map((d) => (
        <ServiceEntry {...d} key={d.title} />
      ))}
    </CardBackground>
  )
}
