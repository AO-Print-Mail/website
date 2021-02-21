import { styled } from '..'
import { forwardRef } from 'react'
import * as icons from '../icons'

interface ListProps {
  as?: string
}

interface listItemProps {
  icon?: React.ReactNode | keyof typeof icons
}

export const List = styled('ul', {
  position: 'relative',
  marginLeft: '0',
  listStyle: 'none',
  pl: '0',
  my: '$2',
})

export const _ListItem = styled('li', {
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

export const UnorderedList = forwardRef<HTMLUListElement, ListProps>(
  ({ as, ...props }, ref) => <List role={'list'} ref={ref} as={as} {...props} />
)
export const OrderedList = forwardRef<HTMLUListElement, ListProps>(
  ({ as, ...props }, ref) => (
    <List role={'list'} ref={ref} as={as ?? 'ol'} {...props} />
  )
)
export const ListItem = forwardRef<HTMLUListElement, listItemProps>(
  ({ children, icon, ...props }, ref) => {
    const Mark = typeof icon === 'string' ? icons[icon] : icon
    return (
      <_ListItem role={'list'} ref={ref} {...props}>
        {Mark && <Mark css={{ size: '1em' }} />}
        {children}
      </_ListItem>
    )
  }
)
