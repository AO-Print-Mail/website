import React from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'
import {
  Box,
  Card,
  CtaLink,
  Heading2,
  HoverGroupFlex,
  Paragraph,
  styled,
} from '@theme'

interface ArticleListCardProps
  extends Partial<React.ComponentProps<typeof CardBackground>> {
  data: CardProps[]
}

interface CardProps
  extends Partial<React.ComponentProps<typeof ServiceEntryLayout>> {
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
})

const ServiceEntryLayout = styled(HoverGroupFlex, {
  py: '$3',
  flex: '0 0 auto',
  [`&:not(:last-child)`]: {
    borderBottom: 'solid blue',
  },
})
const ServiceEntryText = styled(Box, {})
const ServiceImage = styled(Image, {
  br: '$3',
  flex: '0 0 $sizes$10',
  mr: '$3',
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
      <ServiceImage data={image} />
      <ServiceEntryText>
        <Heading2 marginTop="none">{title}</Heading2>
        <Paragraph size="small" css={{ color: '$DA70' }}>
          {description}
        </Paragraph>
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
