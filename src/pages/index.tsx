import Head from 'next/head'
import { PageWrapper } from '@theme/atoms'
import { Header } from '../components/header/src'

export default function Home() {
  return (
    <PageWrapper>
      <Head>
        <title>Direct Mail Quote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </PageWrapper>
  )
}
