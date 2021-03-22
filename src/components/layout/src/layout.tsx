import { GetStaticProps } from 'next'
import { createContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { PageWrapper, ContentWrapper, CSS } from '@theme'
import { Footer } from '@components/footer'
import { request } from '@lib/datocms/datocms'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { GetFaviconsQuery } from '@lib/datocms/__generated__/types'
import dynamic from 'next/dynamic'
import { throttle, debounce } from 'throttle-debounce'
import {
  useCycle,
  useViewportScroll,
  useMotionValue,
  useTransform,
  m as motion,
} from 'framer-motion'

const HeaderMain = dynamic(() =>
  import('@components/header-main').then((res) => res.HeaderMain)
)

interface LayoutProps {
  title?: string
  description?: string
  beforeFooter?: React.ReactNode
  altHeader?: React.ReactNode
  metaData?: GetFaviconsQuery['site']['favicon'] & SeoMetaTagType[]
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
  altHeader,
  ...props
}) => {
  const [menuIsOpen, toggleMenu] = useCycle(false, true)
  const [showNav, setShowNav] = useState(true)
  const scrollPosition = useMotionValue(0)
  const previousPosition = useMotionValue(0)
  const menuScrollPosition = useMotionValue(0)

  //@ts-ignore
  const meta = renderMetaTags(metaData.concat(data?.site?.favicon || []))

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    setShowNav(true)
    let listener
    function update() {
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
    const addScrollListener = window.setTimeout(() => {
      listener = scrollY.onChange(() => update())
    }, 1000)
    if (!menuIsOpen) {
      window.scroll({ top: menuScrollPosition.get() })
    }
    return () => {
      window.clearTimeout(addScrollListener)
      listener && listener()
    }
  }, [menuIsOpen])

  const handleToggle = () => {
    if (!menuIsOpen) {
      menuScrollPosition.set(scrollY.get())
    }
    toggleMenu()
  }

  return (
    <>
      <Head>{meta}</Head>
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
          />
        )}
        <ContentWrapper>{props.children}</ContentWrapper>
        <Footer beforeFooter={beforeFooter} footerCss={footerCss} />
      </PageWrapper>
    </>
  )
}
