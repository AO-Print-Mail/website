import type { ResponsiveImageType } from 'react-datocms'
import { Box, Card, CSS } from '@theme'

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

export const ArticleListCard: React.FC<ArticleListCardProps> = (props) => {
  return <Card css={{ position: 'relative', top: '$3' }}>hello</Card>
}
