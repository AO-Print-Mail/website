import {
  TestimonialRecord,
  FeatureParagraphImageRecord,
  SideBySidePRecord,
  TwoColumnListRecord,
} from './__generated__/types'

export type BlockRecord =
  | TestimonialRecord
  | FeatureParagraphImageRecord
  | SideBySidePRecord
  | TwoColumnListRecord

export function structuredTextBlockRules({ record }: { record: BlockRecord }) {
  switch (record.__typename) {
    case 'FeatureParagraphImageRecord':
      return <img src={record.image.url} alt={record.image.alt} />
    default:
      return null
  }
}
