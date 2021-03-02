import { GetStaticProps } from 'next'
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
  return (
    <>
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
        <ContentWrapper>{props.children}</ContentWrapper>
        <Footer beforeFooter={beforeFooter} />
      </PageWrapper>
    </>
  )
}
