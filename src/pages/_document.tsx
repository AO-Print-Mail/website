import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssString } from '@theme'
export default class Document extends NextDocument {
  //styles = getCssString()
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line react/no-danger */}
          {/*<style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: this.styles }}
          />*/}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="alternate"
            href="http://www.aomail.com.au"
            hrefLang="en-AU"
          />
          <meta name="theme-color" content="#10102B" />
          <link
            rel="preload"
            href="/fonts/ao-rcltsmbld/ao-rcltsmb-alph.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/inter/inter-smb-ltb.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/inter/inter-reg-ltb.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal-modal" />
          <script
            src="https://widget.reviews.io/rich-snippet-reviews-widgets/dist.js"
            type="text/javascript"
          ></script>
        </body>
      </Html>
    )
  }
}
