import { FeatureParagraphImageRecord } from '@lib/datocms/__generated__/types'
import {
  Box,
  Flex,
  styled,
  css,
  CSS,
  Heading2,
  Column,
  ColumnWrapper,
} from '@theme'
import { structuredTextRules } from '@lib/datocms/structuredTextRules'
import { StructuredText } from 'react-datocms'
import { Image } from 'react-datocms'

interface FeatureParagraphWithImageProps {
  css?: CSS
  image?: FeatureParagraphImageRecord['image']
  heading?: string
  paragraph?: FeatureParagraphImageRecord['paragraph']
  background?: FeatureParagraphImageRecord['patternBackground']
  crop?: boolean
}

const FeatureImage = styled(Image, {
  mt: '$5',
  height: 'auto',
  '@l': {
    mx: '16.67%',
  },
  variants: {
    oval: {
      true: {
        br: '50%',
      },
    },
  },
})

const Background = styled('div', {
  position: 'relative',
})

const innerImageStyle = css({
  m: '$4',
})

export const FeatureParagraphWithImage: React.FC<FeatureParagraphWithImageProps> = ({
  image,
  paragraph,
  heading,
  crop,
  background,
  ...props
}) => {
  return (
    <ColumnWrapper
      css={{
        '@initial': { flexDirection: 'column' },
        '@m': { flexDirection: 'row', alignItems: 'center' },
      }}
    >
      <Column css={{ '@m': { pr: '$2' } }}>
        <Heading2 color="primary">{heading}</Heading2>
        <StructuredText
          customRules={structuredTextRules({
            paragraphProps: {
              color: 'primary',
              size: 'Paragraph3',
            },
          })}
          data={paragraph.value}
        />
      </Column>
      <Column css={{ '@m': { flex: '0 0 50%' }, '@l': { flex: '0 0 50%' } }}>
        <FeatureImage
          imageClassName={innerImageStyle()}
          oval={crop}
          data={image.responsiveImage}
        />
      </Column>
    </ColumnWrapper>
  )
}
