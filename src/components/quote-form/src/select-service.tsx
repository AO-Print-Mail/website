import { Button } from '@components/button'
import { ListCard } from '@components/list-card'
import { CtaLink, Flex, HoverGroupFlex, Spacer } from '@theme/atoms'
import { Phone } from '@theme/icons'
import { styled } from '@theme/stitches.config'
import { Heading2, Heading3, Paragraph } from '@theme/typography'
import { m as motion, Variants } from 'framer-motion'
import { ServiceType } from './types'

interface SelectServiceProps {
  setSelectedService: (serviceType: ServiceType) => void
}

const serviceData = [
  {
    name: 'Mail Services',
    id: 'mail',
    description:
      'Bulk addressed and unaddressed mail, including printing, data services, personalisation and envelope inserting.',
    cta: 'Start a Mail or Print & Mail quote',
  },
  {
    name: 'Fulfilment Services',
    id: 'fulfilment',
    description:
      'Warehousing, preparation and distribution of packaged items including handline pick & pack, printing and mail logistics.',
    cta: 'Start a fulfilment quote',
  },
  {
    name: 'Business Printing',
    id: 'print',
    description:
      'High quality printing of marketing, stationary and packging artifacts. Fast turnaround.',
    cta: 'Start a print quote',
  },
]

const ListCardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2, delay: 0.3 },
  },
}
const serviceEntryVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}
const serviceChildrenVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const callbackVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.4 } },
}
const headingVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2 } },
}

const ServiceEntryLayout = styled(HoverGroupFlex, {
  flex: '0 0 100%',
  position: 'relative',
  flexDirection: 'column',
  '@l': {
    flex: '1 1',
  },
})

const ServiceEntry = ({
  linkRef = '',
  name,
  description,
  cta,
  setSelectedService,
  id,
  ...props
}) => {
  return (
    <ServiceEntryLayout
      as={motion.div}
      variants={serviceEntryVariants}
      key={name}
    >
      <Heading3
        as={motion.h3}
        variants={serviceChildrenVariants}
        level="5"
        marginTop={{ '@initial': 'none', '@l': 'small' }}
      >
        {name}
      </Heading3>
      <Spacer size="small" />
      <Paragraph
        marginTop={{ '@m': 'small' }}
        size="s"
        css={{ color: '$DA70', '@l': { flexBasis: '100%', mr: '$4' } }}
        as={motion.p}
        variants={serviceChildrenVariants}
      >
        {description}
      </Paragraph>
      <Spacer size="large" />
      <CtaLink
        //@ts-expect-error
        ref={linkRef}
        text={cta}
        onClick={(e) => {
          e.preventDefault()
          setSelectedService(id)
        }}
        as={motion.a}
        variants={serviceChildrenVariants}
        href="#"
      />
    </ServiceEntryLayout>
  )
}

export const SelectService: React.FC<SelectServiceProps> = ({
  setSelectedService,
}) => {
  return (
    <>
      <Heading2
        as={motion.h2}
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        css={{
          mt: '0',
          pt: '$4',
          textAlign: 'left',
          '@l': { textAlign: 'center' },
        }}
      >
        Choose a service to get started
      </Heading2>
      <Spacer size={{ '@initial': 'small', '@m': 'large' }} />
      <ListCard
        as={motion.div}
        variants={ListCardVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        css={{ mx: '-$5' }}
      >
        {serviceData.map((d) => (
          <ServiceEntry
            {...d}
            key={d.id}
            setSelectedService={setSelectedService}
          />
        ))}
      </ListCard>
      <Flex css={{ flex: '1 1 100%', alignItems: 'flex-end', mb: '$3' }}>
        <Button
          style="naked"
          leftIcon={<Phone />}
          css={{
            color: '$blue',
          }}
          as={motion.button}
          variants={callbackVariants}
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          offset="left"
        >
          Get a callback instead
        </Button>
      </Flex>
    </>
  )
}
