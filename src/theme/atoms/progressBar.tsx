import { Box } from './layout'
import { styled, CSS } from '..'

export interface ProgressBarProps {
  progress: number
  css?: CSS
}

const Bg = styled('div', {
  backgroundColor: '$N10',
  br: '$pill',
  height: '8px',
  overflow: 'hidden',
  position: 'relative',
  mx: '$6',
  my: '$2',
})

const Fill = styled('div', {
  br: '$pill',
  backgroundColor: '$GA75',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  transition: 'transform 0.3s ease-in-out',
  willChange: 'transform',
})

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  ...props
}) => {
  const transform = (1 - progress) * 100
  return (
    <Bg {...props}>
      <Fill css={{ transform: `translateX(-${transform}%)` }} />
    </Bg>
  )
}
