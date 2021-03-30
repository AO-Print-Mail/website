import {
  styled,
  FlatCard,
  ColumnWrapper,
  Column,
  UnorderedList,
  ListItem,
  BreakoutTextHolder,
  CSS,
} from '@theme'

interface TwoColumnListProps {
  items: string[]
  css?: CSS
}

const TwoColUl = styled(UnorderedList, {
  '-webkit-columns': '50% 2',
  '-moz-columns': '50% 2',
  columns: '2 auto',
  mx: 'calc(-$space$3 / 2)',
  '@m': { mx: 'calc(-$space$4 / 2)' },
  '@l': { mx: 'calc(-$space$4 / 2)' },
  '@xl': { mx: 'calc(-$space$5 / 2)' },
})

const Li = styled(ListItem, {
  px: 'calc($space$3 / 2)',
  '@m': { px: 'calc($space$4 / 2)' },
  '@l': { px: 'calc($space$4 / 2)' },
  '@xl': { px: 'calc($space$5 / 2)' },
})

export const TwoColumnList: React.FC<TwoColumnListProps> = ({
  items,
  ...props
}) => {
  return (
    <BreakoutTextHolder css={{ my: '$6' }}>
      <FlatCard {...props}>
        <TwoColUl>
          {items.map((item) => (
            <Li icon="CheckLeaf" key={item}>
              {item}
            </Li>
          ))}
        </TwoColUl>
      </FlatCard>
    </BreakoutTextHolder>
  )
}
