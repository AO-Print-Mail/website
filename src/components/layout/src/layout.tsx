import { GetStaticProps } from 'next'
import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import { Footer } from '@components/footer'
import { request } from '@lib/datocms/datocms'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { GetFaviconsQuery } from '@lib/datocms/__generated__/types'
import { HeaderMain } from '@components/header-main'
import {
  useViewportScroll,
  useMotionValue,
  useCycle,
  m as motion,
} from 'framer-motion'
import { CSS } from '@theme/stitches.config'
import { ContentWrapper, PageWrapper } from '@theme/atoms'
import { LayoutContext } from './layoutContext'

interface LayoutProps {
  title?: string
  description?: string
  beforeFooter?: React.ReactNode
  altHeader?: React.ReactNode
  metaData?: GetFaviconsQuery['site']['favicon'] & SeoMetaTagType[]
  data?: GetFaviconsQuery
  canonicalPath?: string
  footerCss?: CSS
  landing?: boolean
  layoutElement?: string
}

export const getStaticProps: GetStaticProps = async () => {
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
  footerCss,
  altHeader,
  landing,
  ...props
}) => {
  const [scrollLock, toggleScroll] = useCycle(false, true)
  const [velocityListener, setVelocityListener] = useState<boolean>(true)
  const [showNav, setShowNav] = useState(true)
  const scrollPosition = useMotionValue(0)
  const headerRef = useRef<HTMLDivElement>()
  //@ts-ignore
  const meta = renderMetaTags(metaData.concat(data?.site?.favicon || []))

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    if (!scrollLock) {
      const top = scrollPosition.get()
      window.scroll({ top })
      setTimeout(setVelocityListener, 500, true)
    }
  }, [scrollLock])
  useEffect(() => {
    let listener
    function update() {
      if (scrollY.get() < 100) {
        setShowNav(true)
        return
      }
      const velocity = scrollY.getVelocity()
      if (velocityListener && velocity > 100) {
        setShowNav(false)
        return
      }
      if (velocity < -100) {
        setShowNav(true)
        return
      }
    }

    function focusHeader() {
      setShowNav(true)
    }
    const hr = headerRef.current
    if (hr) {
      hr.addEventListener('focusin', focusHeader)
    }
    const addScrollListener = window.setTimeout(() => {
      listener = scrollY.onChange(update)
    }, 1000)
    return () => {
      window.clearTimeout(addScrollListener)
      listener && listener()
      if (hr) {
        hr.removeEventListener('focusin', focusHeader)
      }
    }
  }, [])

  const toggleScrollLock = (skipPositionSet: boolean = false) => {
    const scrollIsLocked = !scrollLock
    if (scrollIsLocked && !skipPositionSet) {
      scrollPosition.set(scrollY.get())
    }
    toggleScroll()
    setVelocityListener(false)
  }

  return (
    <LayoutContext.Provider
      value={{ scrollLock, toggleScrollLock, showNav, setShowNav }}
    >
      <Head>
        {meta}
        <link rel="canonical" href={canonicalPath} />
      </Head>
      <PageWrapper
        as={motion.main}
        style={
          scrollLock
            ? {
                position: 'fixed',
                width: '100%',
                left: '0',
                top: `-${scrollY.getPrevious()}px`,
              }
            : {}
        }
      >
        {altHeader ?? <HeaderMain show={showNav} ref={headerRef} />}
        <ContentWrapper as={props.layoutElement}>
          {props.children}
        </ContentWrapper>
        <Footer
          landing={landing}
          beforeFooter={beforeFooter}
          footerCss={footerCss}
        />
      </PageWrapper>
    </LayoutContext.Provider>
  )
}
