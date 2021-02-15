import Head from 'next/head'
import { PageWrapper, ContentWrapper } from '@theme'
import { Header } from '@components/header'
import { Footer } from '@components/footer'

interface LayoutProps {
  title: string
  description: string
  children: React.ReactChildren | React.ReactElement
}

export function Layout({
  title,
  description,
  children,
  ...props
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <PageWrapper>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  )
}
