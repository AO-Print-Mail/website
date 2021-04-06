import { Container } from '@theme'
import type {
  TestimonialRecord,
  FeatureParagraphImageRecord,
  SideBySidePRecord,
  TwoColumnListRecord,
  CtaRecord,
  StaffProfileCollectionRecord,
} from './__generated__/types'
import dynamic from 'next/dynamic'

export type BlockRecord =
  | TestimonialRecord
  | FeatureParagraphImageRecord
  | SideBySidePRecord
  | TwoColumnListRecord
  | CtaRecord
  | StaffProfileCollectionRecord

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
const SideBySideParagraphs = dynamic(
  import('@components/side-by-side-paragraphs').then(
    (res) => res.SideBySideParagraphs
  )
)
const QuoteCta = dynamic(
  import('@components/quote-cta').then((res) => res.QuoteCta)
)
const StaffProfileCollection = dynamic(
  import('@components/staff-profile-collection').then(
    (res) => res.StaffProfileCollection
  )
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
    case 'SideBySidePRecord':
      return (
        <SideBySideParagraphs
          leftHeading={record.leftHeading}
          rightHeading={record.rightHeading}
          leftParagraph={record.leftParagraph}
          rightParagraph={record.rightParagraph}
          key={record.id}
        />
      )
    case 'CtaRecord':
      return (
        <Container key={record.id}>
          <QuoteCta
            heading={record.heading}
            css={{ my: '$6' }}
            paragraph={record.subtext}
          />
        </Container>
      )
    case 'StaffProfileCollectionRecord':
      return (
        <Container>
          <StaffProfileCollection data={record.profiles} />
        </Container>
      )
    default:
      return null
  }
}

export function ModularContent({ data }: { data: BlockRecord[] }) {
  return <>{data.map((record) => structuredTextBlockRules({ record }))}</>
}
