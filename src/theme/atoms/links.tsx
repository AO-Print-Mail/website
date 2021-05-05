import Link from 'next/link'
import {
  styled,
  Paragraph,
  HoverGroup,
  HoverGroupFlex,
  ArrowForward,
} from '@theme'

interface LinkTextProps
  extends Partial<React.ComponentProps<typeof HoverGroupFlex>> {
  text: string
  href?: string
  to?: string
}

export const ResetLink = styled('a', {
  textDecoration: 'none',
  color: 'unset',
})

const Cta: React.FC<LinkTextProps> = ({ href, text, ...props }) => {
  const LinkEl = href ? ResetLink : 'span'
  return (
    <HoverGroupFlex as={LinkEl} {...props}>
      {/* <Arrow /> */}
      <Paragraph
        size="s"
        css={{
          color: '$blue',
          m: 0,
          [`&:hover, ${HoverGroupFlex}:hover &, ${HoverGroup}:hover &`]: {
            color: '$B40',
          },
        }}
      >
        {text}
      </Paragraph>
      <ArrowForward
        css={{
          willChange: 'transform',
          transition: 'transform 0.2s ease-out',
          color: '$blue',
          ml: '$2',
          alignSelf: 'center',
          [`${HoverGroupFlex}:hover &, ${HoverGroup}:hover &`]: {
            transform: 'translateX($space$1)',
            color: '$B40 ',
          },
        }}
      />
    </HoverGroupFlex>
  )
}

export const CtaLink: React.FC<LinkTextProps> = ({
  text,
  href,
  to,
  ...props
}) => {
  if (to) {
    return (
      <Link href={to} passHref>
        <Cta href={to} text={text} {...props} />
      </Link>
    )
  }
  return <Cta href={href} text={text} {...props} />
}

const StyledAnchor = styled('a', {
  color: '$blue',
  [`&:hover, ${HoverGroupFlex}:hover &, ${HoverGroup}:hover &`]: {
    color: '$B40',
  },
  variants: {
    underline: {
      false: {
        textDecoration: 'none',
      },
    },
  },
})

export const StyledLink: React.FC<LinkTextProps> = ({
  text,
  href,
  to,
  ...props
}) => {
  const link = (
    <StyledAnchor href={href} {...props}>
      {text}
    </StyledAnchor>
  )
  if (to)
    return (
      <Link href={to} passHref>
        {link}
      </Link>
    )
  return link
}
