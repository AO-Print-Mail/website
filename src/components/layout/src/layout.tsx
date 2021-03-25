import { GetStaticProps } from 'next'
import { createContext, useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import { PageWrapper, ContentWrapper, CSS } from '@theme'
import { Footer } from '@components/footer'
import { request } from '@lib/datocms/datocms'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { GetFaviconsQuery } from '@lib/datocms/__generated__/types'
import { HeaderMain } from '@components/header-main'
import {
  useCycle,
  useViewportScroll,
  useMotionValue,
  m as motion,
} from 'framer-motion'

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
  altHeader,
  landing,
  ...props
}) => {
  const [menuIsOpen, toggleMenu] = useCycle(false, true)
  const [showNav, setShowNav] = useState(true)
  const menuScrollPosition = useMotionValue(0)
  const headerRef = useRef<HTMLDivElement>()

  //@ts-ignore
  const meta = renderMetaTags(metaData.concat(data?.site?.favicon || []))

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    if (!menuIsOpen) {
      window.scroll({ top: menuScrollPosition.get() })
    }
  }, [menuIsOpen])
  useEffect(() => {
    setShowNav(true)
    let listener
    const update = function () {
      if (!menuIsOpen) {
        if (scrollY.get() < 100) {
          setShowNav(true)
          return
        }
        const velocity = scrollY.getVelocity()
        if (velocity > 100) {
          setShowNav(false)
          return
        }
        if (velocity < -100) {
          setShowNav(true)
          return
        }
      }
    }

    function focusHeader() {
      window.scroll({ top: 0 })
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
      hr.removeEventListener('focusin', focusHeader)
    }
  }, [])

  const handleToggle = () => {
    if (!menuIsOpen) {
      menuScrollPosition.set(scrollY.get())
    }
    toggleMenu()
  }

  return (
    <>
      <Head>
        {meta}
        <link rel="canonical" href={canonicalPath} />
      </Head>
      <PageWrapper
        as={motion.main}
        style={
          menuIsOpen
            ? {
                position: 'fixed',
                top: `-${scrollY.getPrevious()}px`,
              }
            : {}
        }
      >
        {altHeader ?? (
          <HeaderMain
            menuIsOpen={menuIsOpen}
            toggleMenu={handleToggle}
            show={showNav}
            ref={headerRef}
          />
        )}
        <ContentWrapper>{props.children}</ContentWrapper>
        <Footer
          landing={landing}
          beforeFooter={beforeFooter}
          footerCss={footerCss}
        />
      </PageWrapper>
    </>
  )
}
