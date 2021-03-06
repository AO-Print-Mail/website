import {
  styled,
  FlatCard,
  Paragraph,
  UnorderedList,
  ListItem,
  BreakoutTextHolder,
} from '@theme'

interface TwoColumnListProps
  extends React.ComponentProps<typeof BreakoutTextHolder> {
  items: string[]
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
  display: 'inline-flex',
  width: '100%',
  my: '$2',
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
    <BreakoutTextHolder css={{ my: '$6' }} {...props}>
      <FlatCard css={{ boxShadow: '$1' }}>
        <TwoColUl>
          {items.map((item) => (
            <Li icon="CheckLeaf" key={item}>
              <Paragraph size="s" css={{ mt: '0' }}>
                {item}
              </Paragraph>
            </Li>
          ))}
        </TwoColUl>
      </FlatCard>
    </BreakoutTextHolder>
  )
}
