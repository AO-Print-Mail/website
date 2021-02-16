import { CSS } from '@theme/stitches.config'
import { styled, ThemeVariants, Paragraph5 } from '..'
import { CovidSafe } from '../icons'

export interface CovidSafeBannerProps {
  css?: CSS
  className?: CSS
}

const Background = styled('div', {
  backgroundColor: '$LA25',
  br: '$4',
  display: 'flex',
  alignItems: 'center',
  px: '$3',
  py: '$1',
  when: {
    m: { px: '$4', py: '$2' },
    l: { px: '$5', py: '$2' },
  },
})
export const CovidSafeBanner: React.FC<CovidSafeBannerProps> = (props) => {
  return (
    <Background {...props}>
      <CovidSafe size="$9" css={{ flex: '0 0 $10' }} />
      <Paragraph5 css={{ ml: '$4', color: '$LA80', mt: '0', flex: '0 1 100%' }}>
        A&amp;O is fully open for business and operating with a COVID safe plan.
      </Paragraph5>
    </Background>
  )
}
