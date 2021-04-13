import { ThenArg } from '@utils/src'
import { Layout } from '@components/layout'
import {
  ArrowForward,
  Box,
  Column,
  ColumnWrapper,
  Container,
  Heading,
  Heading1,
  Paragraph,
  Phone,
  Spacer,
  styled,
  TextHolder,
} from '@theme'
import { request } from '@lib/datocms/datocms'
import { GetContactPageQuery } from '@lib/datocms/__generated__/types'
import { Button } from '@components/button'
import Image from 'next/image'

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
  color: '$DBA85',
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
}) => {
  return (
    <table>
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
    </table>
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
            <Heading1 color="primary">Contact Us</Heading1>
          </TextHolder>
        </Container>
      </Box>
      <Container>
        <ColumnWrapper>
          <Column css={{ '@l': { ml: '8.33%' } }}>
            <TextHolder css={{ pb: '$6' }}>
              <Heading level="5" as="h2" css={{ color: '$DBA90' }}>
                Call us:
              </Heading>
              <Button
                as="a"
                href="tel:+61296456777"
                leftIcon={<Phone size="matchFontSize" />}
                color="primary"
                style="naked"
                offset="left"
              >
                (02) 9645 6777
              </Button>
              <Heading level="5" as="h2" css={{ color: '$DBA90' }}>
                Opening hours:
              </Heading>
              <OpeningHoursTable data={openingHours} />
              <Heading level="5" as="h2" css={{ color: '$DBA90' }}>
                Visit Us:
              </Heading>
              <Paragraph size="4" color="primary">
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
            </TextHolder>
          </Column>
          <Column></Column>
        </ColumnWrapper>
      </Container>
      <Img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=Frenchs%20Forest,AU&zoom=11&size=2048x2048&scale=4&markers=color:red%7Clabel:%7C${
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
