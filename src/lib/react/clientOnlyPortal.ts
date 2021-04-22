import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalArgs {
  children: React.ReactElement
  selector?: string
}

export function ClientOnlyPortal({
  children,
  selector = '#portal-modal',
}: PortalArgs) {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current) : null
}
