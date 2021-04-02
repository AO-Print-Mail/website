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
const Testimonial = dynamic(
  import('@components/testimonial').then((res) => res.Testimonial)
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
      return <TwoColumnList key={record.id} items={record.serviceList} />
    case 'TestimonialRecord':
      return (
        <Testimonial
          testimonial={record.testimonial}
          name={record.name}
          company={record.positionCompany}
          key={record.id}
          image={record.photo.responsiveImage}
        />
      )
    default:
      return null
  }
}

export function ModularContent({ data }: { data: BlockRecord[] }) {
  return <>{data.map((record) => structuredTextBlockRules({ record }))}</>
}
