import { GetStaticProps } from 'next'
import { createContext, useState } from 'react'
import Head from 'next/head'
import { PageWrapper, ContentWrapper } from '@theme'
import { Header } from '@components/header'
import { Footer } from '@components/footer'
import { request } from '@lib/datocms/datocms'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { GetFaviconsQuery } from '@lib/datocms/__generated__/types'

interface LayoutProps {
  title: string
  description: string
  beforeFooter?: React.ReactNode
  metaData?: GetFaviconsQuery['site']['favicon']
  data?: GetFaviconsQuery
  canonicalPath: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await request({
    query: 'GetFavicons',
  })
  return { props: data }
}

export const LayoutSpaceContext = createContext({
  setFooterSpace: (space) => space,
  setHeaderSpace: (space) => space,
})

export const OverlayContext = createContext(false)

export const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  beforeFooter,
  metaData = [],
  canonicalPath,
  data,
  ...props
}) => {
  const favicon = data?.site?.favicon || []
  const [layoutSpace, setLayoutSpace] = useState({ header: '0', footer: '0' })
  const setFooterSpace = (space) =>
    setLayoutSpace({ ...layoutSpace, footer: space })
  const setHeaderSpace = (space) =>
    setLayoutSpace({ ...layoutSpace, header: space })
  return (
    <LayoutSpaceContext.Provider value={{ setFooterSpace, setHeaderSpace }}>
      <Head>
        <link
          rel="canonical"
          href={
            canonicalPath === 'HOME_PAGE'
              ? `${process.env.NEXT_PUBLIC_URL}`
              : `${process.env.NEXT_PUBLIC_URL}/${canonicalPath}`
          }
        />
        {
          //@ts-ignore
          renderMetaTags(favicon.concat(metaData))
        }
      </Head>

      <PageWrapper>
        <Header />
        <ContentWrapper css={{ marginTop: layoutSpace.header }}>
          {props.children}
        </ContentWrapper>
        <Footer beforeFooter={beforeFooter} bottomSpacer={layoutSpace.footer} />
      </PageWrapper>
    </LayoutSpaceContext.Provider>
  )
}
