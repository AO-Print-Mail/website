import { styled } from '..'

interface ListProps {}

export const _List: React.FC<ListProps> = (props) => {
  return <div></div>
}

export const List = styled('ul', {
  position: 'relative',
  marginLeft: '0',
  listStyle: 'none',
  pl: '0',
})

export const ListItem = styled('li', {
  display: 'flex',
  '&::before': {
    alignSelf: 'flex-end',
    color: '$DA70',
    left: '0',
    content: `'•'`,
    fontSize: '1.25em',
    lineHeight: '1',
    textAlign: 'center',
    marginRight: '1em',
    verticalAlign: 'middle',
  },
})
