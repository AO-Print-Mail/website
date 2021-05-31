import {
  CSS,
  styled,
  Container,
  Column,
  ColumnWrapper,
  TextHolder,
  Heading3,
} from '@theme'
import { StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredText'

interface SideBySideParagraphsProps extends React.ComponentProps<typeof Bg> {
  leftHeading: string
  leftParagraph: unknown
  rightHeading: string
  rightParagraph: unknown
}

const ColWrap = styled(ColumnWrapper, {
  flexFlow: 'column nowrap',
  '@m': {
    flexFlow: 'row nowrap',
  },
  '@l': {
    px: '8.335%',
  },
})

const Col = styled(Column, {
  '@m': {
    flex: '1 1 50%',
  },
})

const Text = ({ data }) => {
  return (
    <StructuredText
      data={data}
      customRules={structuredTextRules({
        paragraphProps: { size: 's' },
      })}
    />
  )
}

const Bg = styled('div', {
  my: '$7',
})

export const SideBySideParagraphs: React.FC<SideBySideParagraphsProps> = ({
  leftHeading,
  leftParagraph,
  rightHeading,
  rightParagraph,
  ...props
}) => {
  return (
    <Bg {...props}>
      <Container>
        <ColWrap>
          <Col>
            <TextHolder>
              <Heading3>{leftHeading}</Heading3>
              <Text data={leftParagraph}></Text>
            </TextHolder>
          </Col>
          <Col>
            <TextHolder>
              <Heading3>{rightHeading}</Heading3>
              <Text data={rightParagraph}></Text>
            </TextHolder>
          </Col>
        </ColWrap>
      </Container>
    </Bg>
  )
}
