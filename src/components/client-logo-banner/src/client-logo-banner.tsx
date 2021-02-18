import { styled, Paragraph4 } from '@theme'
import * as clientLogos from './logos'

interface ClientLogoBannerProps {}

const Logos = styled('div', {
  mt: '$4',
  display: 'flex',
  justifyContent: 'space-between',
  when: {
    m: {
      px: '$2',
    },
    l: {
      px: '$3',
      gridColumnStart: '3',
      gridColumnEnd: 'span 6',
    },
  },
})

const LeadText = styled(Paragraph4, {
  color: '$DA70',
  mt: '$4',
  when: {
    l: {
      pr: '$4',
      pl: '$3',
      textAlign: 'right',
      gridColumnStart: '1',
      gridColumnEnd: 'span 2',
    },
  },
})

const LogoWrapper = styled('div', {
  maxHeight: '$3',
  maxWidth: '$6',
  when: {
    s: {
      maxHeight: '$3',
      maxWidth: '$6',
    },
    m: {
      maxHeight: '$5',
      maxWidth: '$9',
    },
    l: {
      maxHeight: '$7',
      maxWidth: '$10',
    },
  },
})

const Banner = styled('div', {
  pt: '$7',
  pb: '$5',
  display: 'grid',
  when: {
    l: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridGap: '$3',
    },
  },
})

export const ClientLogoBanner: React.FC<ClientLogoBannerProps> = (props) => {
  const logoList = ['Chanel', 'RayWhite', 'Quantas', 'Nrl', 'Lush', 'Bmw']
  const bannerLogos = logoList.map((name) => [name, clientLogos[name]])
  return (
    <Banner>
      <LeadText>
        Serving over 700 Australian and global brands, including:
      </LeadText>
      <Logos>
        {bannerLogos.map(([name, Component], i) => (
          <LogoWrapper key={name}>
            <Component css={{ size: '100%' }} />
          </LogoWrapper>
        ))}
      </Logos>
    </Banner>
  )
}
