import { GetStaticProps } from 'next'
import { createContext, useState } from 'react'
import Head from 'next/head'
import { PageWrapper, ContentWrapper, CSS } from '@theme'
import { Header } from '@components/header-landing'
import { Footer } from '@components/footer'
import { request } from '@lib/datocms/datocms'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { GetFaviconsQuery } from '@lib/datocms/__generated__/types'

interface LayoutProps {
  title?: string
  description?: string
  beforeFooter?: React.ReactNode
  metaData?: GetFaviconsQuery['site']['favicon']
  data?: GetFaviconsQuery
  canonicalPath?: string
  footerCss?: CSS
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await request({
    query: 'GetFavicons',
  })
  return { props: data }
}

export const OverlayContext = createContext(false)

export const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  beforeFooter,
  metaData = [],
  canonicalPath,
  data,
  footerCss,
  ...props
}) => {
  const favicon = data?.site?.favicon || []
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper css={{ pt: '$6', when: { l: { pt: '$7' } } }}>
        {props.children}
      </ContentWrapper>
      <Footer beforeFooter={beforeFooter} footerCss={footerCss} />
    </PageWrapper>
  )
}
