import React, { useRef } from 'react'
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
  extends Partial<React.ComponentProps<typeof Background>> {
  data: CardProps[]
}

interface CardProps extends Partial<React.ComponentProps<typeof Box>> {
  title?: string
  image?: ResponsiveImageType
  description?: string
  link?: string
  linkText?: string
  linkRef?: (t: React.Ref<HTMLAnchorElement>) => void
}

const Background = styled('div', {
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

const ItemWrapper = styled('div', {
  display: 'flex',
  py: '$4',
  flex: '1 1',
  position: 'relative',
  '@l': {
    px: '$5',
    py: '$0',
  },
})
const ServiceEntryLayout = styled(HoverGroupFlex, {
  flex: '0 0 100%',
  position: 'relative',
  '@l': {
    flexDirection: 'column',
    flex: '1 1',
  },
})

const BottomBorder = styled('span', {
  display: 'none',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '1px',
  [`${ItemWrapper}:not(:first-child) > &`]: {
    display: 'block',
    background: '$dotted-horizontal',
    backgroundSize: '16px 1px',
  },
  '@l': {
    [`${ItemWrapper}:not(:first-child) > &`]: {
      background: '$dotted-vertical',
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
  linkRef,
  ...props
}) => {
  return (
    <ServiceEntryLayout>
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
        <CtaLink
          //@ts-expect-error
          ref={linkRef}
          text={linkText}
          to={link}
        />
      </ServiceEntryText>
    </ServiceEntryLayout>
  )
}

export const ListCard: React.FC<React.ComponentProps<typeof Background>> = ({
  children,
  ...props
}) => {
  const linkRefs = useRef({})
  function setLinkRef(refId: string) {
    return function (el: React.Ref<HTMLAnchorElement>) {
      linkRefs.current[refId] = el
    }
  }
  function handleClick(refId: string) {
    return function (e: React.MouseEvent) {
      e.preventDefault()
      linkRefs.current[refId].click()
    }
  }
  return children ? (
    <Background as={Card} {...props}>
      {React.Children.map(children, (child, i) => {
        const id = child.key || i.toString()
        const innerChild = React.cloneElement(child, {
          onClick: handleClick(id),
          linkRef: setLinkRef(id),
        })
        return (
          <ItemWrapper
            key={id}
            onClick={handleClick(id)}
            css={{ position: 'relative' }}
          >
            <BottomBorder aria-hidden />

            {innerChild}
          </ItemWrapper>
        )
      })}
    </Background>
  ) : null
}

export const ArticleListCard: React.FC<ArticleListCardProps> = ({
  data,
  children,
  ...props
}) => {
  return (
    <ListCard {...props}>
      {data.map((d) => (
        <ServiceEntry key={d.title} {...d} />
      ))}
    </ListCard>
  )
}
