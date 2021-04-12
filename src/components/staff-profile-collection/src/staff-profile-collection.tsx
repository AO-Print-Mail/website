import type { ResponsiveImageType, StructuredTextDocument } from 'react-datocms'
import { StaffProfileModelBiographyField } from '@lib/datocms/__generated__/types'
import { Image, StructuredText } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredText'
import {
  styled,
  Flex,
  Box,
  Paragraph1,
  Paragraph3,
  ColumnWrapper,
  Column,
  FlatCard,
} from '@theme'

interface StaffProfileCollectionProps {
  data: StaffProfileProps[]
}

interface StaffProfileProps {
  name?: string
  jobTitle?: string
  biography?: StaffProfileModelBiographyField
  avatar?: { responsiveImage?: ResponsiveImageType }
  id?: unknown
}

type NameBadgeProps = Pick<StaffProfileProps, 'name' | 'jobTitle' | 'avatar'>

const Avatar = styled(Image, {
  alignSelf: 'center',
  flex: '0 0 $sizes$8',
  mr: '$3',
  '@m': {
    flex: '0 0 $sizes$9',
    mr: '$3',
  },
  '@xl': {
    mr: '$4',
  },
})

const Name = styled(Paragraph1, {
  fontWeight: '700',
  color: '$darkBlue',
  textGradient: 'linear-gradient(272.88deg, #0072CE 14.59%, #00237D 101%)',
  my: '$0',
})

export const NameBadge: React.FC<NameBadgeProps> = ({
  name,
  jobTitle,
  avatar,
}) => {
  return (
    <Flex>
      <Avatar data={avatar.responsiveImage} />
      <Box css={{ alignSelf: 'center' }}>
        <Name>{name}</Name>
        <Paragraph3
          css={{
            my: '$0',
            color: '$DBA80',
          }}
        >
          {jobTitle}
        </Paragraph3>
      </Box>
    </Flex>
  )
}

const Col = styled(Column, {
  my: '$3',
  flexBasis: '100%',
  '@m': {
    mx: '16.67%',
  },
  '@l': {
    mx: '0',
    flexBasis: '50%',
    alignSelf: 'stretch',
  },
})

const BiographyStRules = structuredTextRules({
  paragraphProps: { size: '4' },
})

export const StaffProfile: React.FC<StaffProfileProps> = ({
  name,
  jobTitle,
  biography,
  avatar,
  ...props
}) => {
  return (
    <FlatCard {...props}>
      <NameBadge name={name} jobTitle={jobTitle} avatar={avatar} />
      <StructuredText
        //@ts-ignore
        data={biography}
        customRules={BiographyStRules}
      >
        {biography}
      </StructuredText>
    </FlatCard>
  )
}
export const StaffProfileCollection: React.FC<StaffProfileCollectionProps> = ({
  data,
}) => {
  return (
    <ColumnWrapper
      css={{
        '@initial': { my: '$6' },

        '@xl': {
          mx: '8.33%',
        },
      }}
    >
      {data.map((staff) => {
        return (
          <Col key={staff.id}>
            <StaffProfile
              avatar={staff.avatar}
              biography={staff.biography}
              jobTitle={staff.jobTitle}
              name={staff.name}
              css={{ minHeight: '100%', pb: '$5', boxShadow: '$1' }}
            />
          </Col>
        )
      })}
    </ColumnWrapper>
  )
}
