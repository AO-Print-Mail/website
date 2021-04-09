import {
  CSS,
  styled,
  Container,
  Column,
  ColumnWrapper,
  TextHolder,
  Heading6,
} from '@theme'
import { StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredTextRules'

interface SideBySideParagraphsProps {
  leftHeading: string
  leftParagraph: unknown
  rightHeading: string
  rightParagraph: unknown
  css?: CSS
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
        paragraphProps: { size: '4', color: 'primary' },
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
              <Heading6 color="primary">{leftHeading}</Heading6>
              <Text data={leftParagraph}></Text>
            </TextHolder>
          </Col>
          <Col>
            <TextHolder>
              <Heading6 color="primary">{rightHeading}</Heading6>
              <Text data={rightParagraph}></Text>
            </TextHolder>
          </Col>
        </ColWrap>
      </Container>
    </Bg>
  )
}
