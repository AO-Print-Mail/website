import React from 'react'
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { getCssString } from '@theme'
import { __DEV__ } from '@utils/src/assertion'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default class Document extends NextDocument {
  prefixedStyles = async () => {
    const styles = getCssString().concat('#loadOverlay{display: none;}')
    const ps = await postcss([autoprefixer()])
      .process(styles)
      .then((style) => {
        return style.css
      })
    return ps
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line react/no-danger */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-WSFD68H",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");`,
            }}
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{
              __html: getCssString().concat('#loadOverlay{display: none;}'),
            }}
          />

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="alternate"
            href={process.env.NEXT_PUBLIC_URL}
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
          <div
            id="loadOverlay"
            style={{
              backgroundColor: '#fff',
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              zIndex: 2000,
            }}
          ></div>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WSFD68H"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
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
