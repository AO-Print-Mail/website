import { ThenArg } from '@utils/src'
import { Layout } from '@components/layout'
import {
  ArrowForward,
  Box,
  Column,
  ColumnWrapper,
  Container,
  Heading2,
  Heading1,
  Paragraph,
  Phone,
  Spacer,
  styled,
  TextHolder,
  Title,
} from '@theme'
import { request } from '@lib/datocms/datocms'
import { GetContactPageQuery } from '@lib/datocms/__generated__/types'
import { Button } from '@components/button'
import Image from 'next/image'
import { ContactForm } from '@components/contact-form'

interface PageProps {
  data?: ThenArg<ReturnType<typeof getStaticProps>>['props']['data']
}

const openingHours = [
  { day: 'Monday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Tuesday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Wednesday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Thursday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Friday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Saturday', hours: [] },
  { day: 'Sunday', hours: [] },
]

const Th = styled('th', {
  py: '$1',
  textAlign: 'left',
  pr: '$4',
  color: '$DBA75',
  fontWeight: '$semibold',
})
const Td = styled('td', {
  py: '$1',
  color: '$DBA80',
})
const Ul = styled('ul', {
  listStyle: 'none',
  m: '0',
  p: '0',
})

const OpeningHoursTable: React.FC<{ data: typeof openingHours }> = ({
  data,
  ...props
}) => {
  return (
    <Box as="table" {...props}>
      <tbody>
        {data.map(({ day, hours }) => {
          return (
            <tr key={day}>
              <Th>{day}</Th>
              <Td>
                {hours.length === 0 ? (
                  'Closed'
                ) : (
                  <Ul>
                    {hours.map(({ open, close }) => (
                      <li key={open}>{`${open} – ${close}`}</li>
                    ))}
                  </Ul>
                )}
              </Td>
            </tr>
          )
        })}
      </tbody>
    </Box>
  )
}
const Img = styled(Image, {
  maxHeight: '200px',
})

const Contact: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout
      canonicalPath="https://www.aomail.com.au/blog"
      //@ts-ignore
      metaData={data.contactPage._seoMetaTags}
    >
      <Box
        as="section"
        css={{
          backgroundColor: '$N10',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container
          css={{
            pt: '$6',
            minHeight: '280px',
            '@m': { minHeight: '400px' },
          }}
        >
          <TextHolder css={{ mt: '$7', '@l': { ml: '8.33%' } }}>
            <Title color="primaryGradient">{data.contactPage.title}</Title>
          </TextHolder>
        </Container>
      </Box>
      <Container>
        <ColumnWrapper
          css={{
            flexFlow: 'column nowrap',
            mb: '-$5',
            '@l': { flexFlow: 'row nowrap', mx: '8.33%', mb: '-$6' },
          }}
        >
          <Column css={{ pb: '$5', '@l': { flex: '0 0 40%' } }}>
            <TextHolder
              css={{ '@l': { display: 'flex', flexFlow: 'column ' } }}
            >
              <Box
                css={{
                  '@m': { width: '50%', float: 'left' },
                  '@l': { width: 'auto', float: 'none' },
                }}
              >
                <Heading2
                  marginTop="small"
                  level="6"
                  css={{ fontWeight: 'bold' }}
                >
                  Call us:
                </Heading2>
                <Button
                  as="a"
                  href="tel:+61296456777"
                  leftIcon={<Phone size="matchFontSize" />}
                  style="naked"
                  offset="left"
                >
                  (02) 9645 6777
                </Button>
              </Box>
              <Box
                css={{
                  '@m': { width: '50%', float: 'right' },
                  '@l': { width: 'auto', float: 'none' },
                }}
              >
                <Heading2
                  level="6"
                  marginTop="small"
                  css={{ fontWeight: 'bold' }}
                >
                  Opening hours:
                </Heading2>
                <Spacer />
                <OpeningHoursTable data={openingHours} />
              </Box>
              <Box
                css={{
                  display: 'flex',
                  flexFlow: 'column nowrap',
                  alignItems: 'flex-start',
                  flex: '1 1',
                  justifyContents: 'flex-end',
                  '@m': { width: '50%', float: 'left' },
                  '@l': { width: 'auto', float: 'none' },
                }}
              >
                <Heading2
                  level="6"
                  marginTop="small"
                  css={{ fontWeight: 'bold' }}
                >
                  Visit Us:
                </Heading2>
                <Paragraph size="s">
                  9 Clearview Pl
                  <br />
                  Brookvale
                  <br />
                  Sydney NSW 2100
                </Paragraph>
                <Spacer size="large" />
                <Button
                  as="a"
                  href="https://g.page/ao-mail"
                  rightIcon={<ArrowForward />}
                  style="naked"
                  offset="left"
                  size="small"
                  css={{ color: '$blue' }}
                >
                  Directions on Google Maps
                </Button>
              </Box>
            </TextHolder>
          </Column>
          <Column
            css={{
              zIndex: '$1',
              '@m': { mx: '8.33%' },
              '@l': {
                position: 'relative',
                top: '-$4',
                flex: '0 0 60%',
              },
            }}
          >
            <ContactForm
              css={{
                width: '100vw',
                mx: '50%',
                left: '-50vw',
                right: '-50vw',
                position: 'relative',
                br: '0',
                '@m': {
                  width: 'unset',
                  mx: 'unset',
                  left: 'unset',
                  right: 'unset',
                  br: '$4',
                },
              }}
            />
          </Column>
        </ColumnWrapper>
      </Container>
      <Img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=Frenchs%20Forest,AU&zoom=11&size=2048x2048&scale=4&markers=color:red%7Csize:small%7Clabel:%7C${
          data.contactPage.location.latitude +
          ',' +
          data.contactPage.location.longitude
        }&key=AIzaSyA0lPP3L0uEs2k40H9-5LitOrPKNj_EA4U&map_id=50e424b1c87e9d57`}
        width="1920px"
        height="768px"
        objectFit="cover"
      />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const { contactPage }: GetContactPageQuery = await request({
    query: 'GetContactPage',
    preview,
  })
  return {
    props: {
      data: { contactPage },
    },
  }
}

export default Contact
