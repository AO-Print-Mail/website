import { FeatureParagraphImageRecord } from '@lib/datocms/__generated__/types'
import {
  TextHolder,
  styled,
  css,
  CSS,
  Heading3,
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
  imagePosition?: FeatureParagraphImageRecord['imagePosition']
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

const innerImageStyle = css({
  m: '$4',
})

export const FeatureParagraphWithImage: React.FC<FeatureParagraphWithImageProps> = ({
  image,
  paragraph,
  heading,
  crop,
  background,
  imagePosition,
  ...props
}) => {
  const ImageColumn = (
    <Column css={{ '@m': { flex: '0 0 50%' }, '@l': { flex: '0 0 50%' } }}>
      <TextHolder>
        <FeatureImage
          imageClassName={innerImageStyle()}
          oval={crop}
          data={image.responsiveImage}
        />
      </TextHolder>
    </Column>
  )
  return (
    <ColumnWrapper
      css={{
        '@initial': { flexDirection: 'column', mt: '$4' },
        '@m': { flexDirection: 'row', alignItems: 'center', mt: '$5' },
        '@l': { mt: '$6' },
      }}
      {...props}
    >
      {imagePosition === 'left' && ImageColumn}
      <Column css={{ '@m': { pr: '$2' } }}>
        <TextHolder>
          <Heading3 as="h2" css={{ mt: '$2' }} color="primary">
            {heading}
          </Heading3>
          <StructuredText
            customRules={structuredTextRules({
              paragraphProps: {
                color: 'primary',
                size: 'Paragraph3',
              },
            })}
            data={paragraph.value}
          />
        </TextHolder>
      </Column>
      {imagePosition === 'right' && ImageColumn}
    </ColumnWrapper>
  )
}
