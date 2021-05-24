import React, { useMemo, useState } from 'react'
import { m as motion, useAnimation } from 'framer-motion'
import { Modal } from '@components/modal'
import { AnimatePresence } from 'framer-motion'
import { FormController } from './controllers/formController'
import { useStateMachine } from 'little-state-machine'
import { FormSeedData, Quote, ServiceType } from './types'
import { SelectService } from './select-service'
import { ModalLayout } from '@components/modal/src/layout'
import { CloseControls } from '@theme/atoms'
import { serviceTypes } from './scripts/newQuote'

interface QuoteFormProps {
  active: boolean
  service?: ServiceType
  step?: string
  modalLayoutId?: string
  quoteId?: string
  toggle: (e: React.MouseEvent) => void
  initialData?: FormSeedData
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  active,
  modalLayoutId,
  toggle,
  quoteId,
  service,
  initialData,
  step,
  ...props
}) => {
  const { state } = useStateMachine()
  const [selectedService, setSelectedService] = useState<ServiceType>()
  const innerContentControls = useAnimation()

  function isValidServiceType(serviceType?: ServiceType) {
    return serviceTypes.includes(serviceType)
  }

  //TODO: display a quote continue screen if previous quote exists
  function getExistingQuoteByService(serviceType: ServiceType) {
    function matchQuoteToService(quote: Quote) {
      return quote.service_id === serviceType
    }

    if (isValidServiceType(serviceType)) {
      //TODO: Handle retrieiving multiple quotes
      return state.quoteRequests.find(matchQuoteToService)?.id
    }
  }

  function handleSelectedService(serviceType: ServiceType) {
    setSelectedService(serviceType)
  }

  function getQuoteInitialisationData() {
    const data = { initialData, step }
    if (quoteId) return { ...data, quoteId }
    const _service = service || selectedService
    if (!isValidServiceType) return null
    const existingId = getExistingQuoteByService(_service)
    if (existingId) return { ...data, quoteId: existingId }
    if (_service) return { ...data, service: _service }
    return null
  }

  const _children = useMemo(() => {
    if (active) {
      console.log('incoming')
      const quoteData = getQuoteInitialisationData()
      if (quoteData) {
        return (
          <Modal
            toggle={toggle}
            mobileWidth="full"
            width="m"
            layoutId={modalLayoutId}
            showCloseButton={true}
            as={motion.div}
            animate={innerContentControls}
            initial="hidden"
            {...props}
          >
            <FormController {...quoteData} toggle={toggle} />
          </Modal>
        )
      }
      return (
        <Modal
          toggle={toggle}
          mobileWidth="full"
          width="l"
          layoutId={modalLayoutId}
          showCloseButton={true}
          as={motion.div}
          animate={innerContentControls}
          initial="hidden"
          {...props}
        >
          <ModalLayout
            controls={<CloseControls handleClose={toggle} />}
            hideControlsBorder
          >
            <SelectService setSelectedService={handleSelectedService} />
          </ModalLayout>
        </Modal>
      )
    }
    return null
  }, [active, selectedService, quoteId, service])

  return <AnimatePresence>{_children}</AnimatePresence>
}
