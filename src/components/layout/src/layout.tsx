import Head from 'next/head'
import { PageWrapper, ContentWrapper } from '@theme'
import { Header } from '@components/header'
import { Footer } from '@components/footer'

interface LayoutProps {
  title: string
  description: string
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  ...props
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <PageWrapper>
        <Header />
        <ContentWrapper>{props.children}</ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  )
}
