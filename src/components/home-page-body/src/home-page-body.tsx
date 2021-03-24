import { styled, Flex, Box, Container } from '@theme'

interface HomePageBodyProps {}
const Card = styled('div', {})

export const HomePageBody: React.FC<HomePageBodyProps> = (props) => {
  return (
    <Box>
      <Container css={{ mt: '-$4' }}>
        <Box
          css={{
            '@m': {
              display: 'grid',
              gridTemplateAreas: `'cardone cardtwo' 'contentleft cardthree' 'contentleft contentright'`,
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto 1fr',
              gridGap: '$3',
            },
            '@l': {
              gridTemplateAreas: `
              'contentleft contentleft contentleft contentleft contentleft cardone cardone cardone cardtwo cardtwo cardtwo .' 
              'contentleft contentleft contentleft contentleft contentleft . . . cardthree cardthree cardthree .'
              'contentleft contentleft contentleft contentleft contentleft . contentright contentright contentright contentright contentright contentright'
              `,
              gridTemplateColumns:
                '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
              gridTemplateRows: 'auto auto 1fr',
              gridGap: '$3',
            },
          }}
        >
          <Card
            css={{
              gridArea: 'cardone',
              backgroundColor: '$red',
              height: '$8',
              alignSelf: 'start',
            }}
          ></Card>
          <Card
            css={{
              gridArea: 'cardtwo',
              backgroundColor: '$orange',
              height: '$8',
              alignSelf: 'start',
            }}
          />
          <Box
            css={{
              gridArea: 'cardthree',
              backgroundColor: '$N80',
              height: '$8',
              alignSelf: 'start',
            }}
          />
          <Box
            css={{
              gridArea: 'contentleft',
              backgroundColor: '$green',
              mt: '$6',
              height: '$12',
            }}
          />
          <Box
            css={{
              gridArea: 'contentright',
              backgroundColor: '$blue',
              height: '$10',
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}
