import React from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'
import { Box, Card, CSS, Heading2, Paragraph, styled } from '@theme'

interface ArticleListCardProps {
  data: CardProps[]
}

interface CardProps {
  title?: string
  image?: ResponsiveImageType
  description?: string
  link?: string
  linkText?: string
  css?: CSS
}

const CardBackground = styled(Card, {})

const ServiceEntryLayout = styled(Box, {})
const ServiceEntryText = styled(Box, {})
const ServiceImage = styled(Image, {})

const ServiceEntry: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <ServiceEntryLayout>
      <ServiceImage data={image} />
      <ServiceEntryText>
        <Heading2>{title}</Heading2>
        <Paragraph size="small">{description}</Paragraph>
      </ServiceEntryText>
    </ServiceEntryLayout>
  )
}

export const ArticleListCard: React.FC<ArticleListCardProps> = (props) => {
  return (
    <CardBackground css={{ position: 'relative', top: '-$4' }}>
      hello
    </CardBackground>
  )
}
