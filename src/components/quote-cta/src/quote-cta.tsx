import { styled, CSS, Card, Heading4, Paragraph3 } from '@theme'
import { Button } from '@components/button'
import { Modal } from '@components/modal'
import {
  AnimatePresence,
  AnimateSharedLayout,
  m as motion,
  useAnimation,
  useCycle,
  Variants,
} from 'framer-motion'

interface QuoteCtaProps {
  heading?: string
  paragraph?: string
  css?: CSS
}

const Bg = styled(Card, {
  position: 'relative',
  pt: '$5',
  pb: '$6',
  '@m': {
    px: '$5',
  },
  '@l': {
    py: '$6',
    px: '25%',
  },
})

const Content = styled(motion.div, {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
})

const contentVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 25 },
}

export const QuoteCta: React.FC<QuoteCtaProps> = ({
  heading,
  paragraph,
  ...props
}) => {
  const contentControls = useAnimation()
  const [modalIsOpen, toggleModalIsOpen] = useCycle(false, true)
  async function toggleModal(e: React.MouseEvent) {
    e.preventDefault()
    await contentControls.start('hidden')
    toggleModalIsOpen()
    setTimeout(contentControls.start, 500, 'visible')
  }
  //useEffect(() => {}, [modalIsOpen])
  return (
    <AnimateSharedLayout>
      <Bg as={motion.div} layoutId="quoteCta" {...props}>
        <AnimatePresence>
          {modalIsOpen && (
            <Modal toggle={toggleModal} layoutId="quoteCta"></Modal>
          )}
        </AnimatePresence>
        <Content animate={contentControls} variants={contentVariants}>
          <Heading4 alignCenter color="primary" css={{ mt: '$3' }}>
            {heading || 'Get a quote for your next job'}
          </Heading4>
          <Paragraph3 css={{ mt: '$2' }} alignCenter color="primary">
            {paragraph ||
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '}
          </Paragraph3>
          <Button
            css={{
              '@initial': { mt: '$4', minWidth: '75%', height: '$5' },
              '@s': { mt: '$5', minWidth: '50%' },
              '@m': { mt: '$6', minWidth: '$12' },
            }}
            type="primary"
            onClick={toggleModal}
          >
            Start your quote
          </Button>
        </Content>
      </Bg>
    </AnimateSharedLayout>
  )
}
