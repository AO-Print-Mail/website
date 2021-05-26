//import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalArgs {
  children: React.ReactElement
  selector?: string
}

export function ClientOnlyPortal({
  children,
  selector = '#portal-modal',
}: PortalArgs) {
  /*
  
  Using a ref to ensure the portal only fires in the client would stop layout animations flowing through the portal on mount
  
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

*/
  return document
    ? createPortal(children, document?.querySelector(selector))
    : null
}
