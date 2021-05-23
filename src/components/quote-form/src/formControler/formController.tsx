import { ModalLayout } from '@components/modal/src/layout'
import { CloseControls } from '@theme/atoms'
import { useMotionValue } from 'framer-motion'
import { useRouter } from 'next/router'
import { Controls } from '../components/controls'
import { FormStep } from '../components/formStep'

interface FormControllerProps {
  toggle: (e: React.MouseEvent) => void
}

export const FormController: React.FC<FormControllerProps> = ({
  toggle,
  ...props
}) => {
  const progress = useMotionValue(60)
  return (
    <ModalLayout
      controls={<Controls handleClose={toggle} progress={progress} />}
      //hideControlsBorder={true}
      {...props}
    >
      <FormStep />
    </ModalLayout>
  )
}
