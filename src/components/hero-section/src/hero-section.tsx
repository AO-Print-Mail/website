import { Box, Container, TextHolder, Heading } from '@theme'

interface HeroSectionProps {
  title: string
  subtext: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
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
        <TextHolder
          css={{ mt: '$7', '@m': { mt: '$8' }, '@l': { ml: '8.33%' } }}
        >
          <Heading level="1" as="h1" color="primary">
            {title}
          </Heading>
        </TextHolder>
      </Container>
    </Box>
  )
}