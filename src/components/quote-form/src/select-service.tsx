import { CardList } from '@components/article-list-card'
import { m as motion } from 'framer-motion'

interface SelectServiceProps {}

const serviceData = [
  {
    name: 'Mail Services',
    id: 'mail',
    description:
      'Bulk addressed and unaddressed mail, including printing, data services, personalisation and envelope inserting.',
  },
  {
    name: 'Fulfilment Services',
    id: 'fulfilment',
    description:
      'Warehousing, preparation and distribution of packaged items including handline pick & pack, printing and mail logistics.',
  },
  {
    name: 'Business Printing',
    id: 'print',
    description:
      'High quality printing of marketing, stationary and packging artifacts. Fast turnaround.',
  },
]

export const SelectService: React.FC<SelectServiceProps> = (props) => {
  return <CardList as={motion.div}></CardList>
}
