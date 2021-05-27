import { ArrowForward } from '@theme/icons'
import { css, styled } from '@theme/stitches.config'
import { Paragraph } from '@theme/typography'
import Link from 'next/link'

import React, { forwardRef } from 'react'
import { HoverGroup, HoverGroupFlex } from './layout'

interface LinkTextProps
  extends Partial<React.ComponentProps<typeof HoverGroupFlex>> {
  text: string
  href?: string
  to?: string
  onClick?: (e: React.MouseEvent) => void
}

export const resetLink = css('a', {
  textDecoration: 'none',
  color: 'unset',
})

const Cta: React.FC<LinkTextProps> = forwardRef(
  ({ href, text, onClick, ...props }, ref) => {
    const LinkEl = href ? 'a' : 'span'
    const classNames = { ...resetLink(), ...props.className }
    function handleClick(e: React.MouseEvent) {
      e.stopPropagation()
      onClick && onClick(e)
    }
    return (
      <HoverGroupFlex
        ref={ref}
        as={LinkEl}
        onClick={handleClick}
        href={href}
        css={{
          display: 'inline-flex',
          alignSelf: 'flex-start',
        }}
        className={classNames}
        {...props}
      >
        <Paragraph
          size="s"
          as="span"
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
)

export const CtaLink = forwardRef<HTMLAnchorElement, LinkTextProps>(
  ({ text, href, to, ...props }, ref) => {
    if (to) {
      return (
        <Link href={to} passHref>
          <Cta ref={ref} href={to} text={text} {...props} />
        </Link>
      )
    }
    return <Cta ref={ref} href={href} text={text} {...props} />
  }
)

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

export const StyledLink = forwardRef<HTMLAnchorElement, LinkTextProps>(
  ({ text, href, to, ...props }, ref) => {
    const link = (
      <StyledAnchor ref={ref} href={href} {...props}>
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
)
