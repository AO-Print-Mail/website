import {
  TestimonialRecord,
  FeatureParagraphImageRecord,
  SideBySidePRecord,
  TwoColumnListRecord,
} from './__generated__/types'
import dynamic from 'next/dynamic'

export type BlockRecord =
  | TestimonialRecord
  | FeatureParagraphImageRecord
  | SideBySidePRecord
  | TwoColumnListRecord

const FeatureParagraphImage = dynamic(
  import('@components/feature-paragraph-with-image').then(
    (res) => res.FeatureParagraphWithImage
  )
)

const TwoColumnList = dynamic(
  import('@components/two-column-list').then((res) => res.TwoColumnList)
)

export function structuredTextBlockRules({
  record,
}: {
  record: BlockRecord
}): React.ReactElement {
  switch (record.__typename) {
    case 'FeatureParagraphImageRecord':
      return (
        <FeatureParagraphImage
          key={record.id}
          heading={record.heading}
          paragraph={record.paragraph}
          image={record.image}
          crop={record.cropImage}
          background={record.patternBackground}
          imagePosition={record.imagePosition}
        />
      )
    case 'TwoColumnListRecord':
      return <TwoColumnList items={record.serviceList} />
    default:
      return null
  }
}

export function ModularContent({ data }: { data: BlockRecord[] }) {
  return <>{data.map((record) => structuredTextBlockRules({ record }))}</>
}
