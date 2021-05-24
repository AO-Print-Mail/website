import { ModalLayout } from '@components/modal/src/layout'
import { useMotionValue } from 'framer-motion'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useStateMachine } from 'little-state-machine'
import { createQuote } from '@lib/little-state-machine/actions'
import { useEffect, useMemo, useState } from 'react'
import { FormSeedData, Quote, ServiceType } from '../types'
import { loadSchema, resolveSchema } from '../scripts/loadSchema'
import { getQuoteByID } from '../scripts/getQuoteById'
import { Schema } from '../types/schemaTypes'

const Controls = dynamic(
  import('../components/controls').then((res) => res.Controls)
)

export interface FormControllerProps {
  toggle: (e: React.MouseEvent) => void
  service: ServiceType
  quoteId?: string
  initialData?: FormSeedData
  step: string
}

export const FormController: React.FC<FormControllerProps> = ({
  toggle,
  service,
  quoteId,
  step,
  ...props
}) => {
  const { state } = useStateMachine()
  const [schema, setSchema] = useState<Schema>()
  const progress = useMotionValue(0)
  const { query } = useRouter()
  const quote = useMemo(() => getQuoteByID(state, quoteId), [state])

  async function init() {
    const svcSchema = await resolveSchema(service)
    setSchema(svcSchema)
  }

  useEffect(() => {
    loadSchema(service).then((res) => {
      setSchema(res)
    })
  }, [service])

  return (
    <ModalLayout
      controls={<Controls handleClose={toggle} progress={progress} />}
      {...props}
    >
      {/* <FormStep /> */}
    </ModalLayout>
  )
}
