import { useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import { updateUserData } from '@lib/little-state-machine/actions'
import { isBrowser } from '@utils'

export function getCookie(name) {
  const entries = document.cookie.split(';')
  for (let c of entries) {
    const [key, val] = c.split('=')
    if (key.trim() === name) {
      console.log(decodeURIComponent(val))
      return decodeURIComponent(val)
    }
  }
}

export function useSetCookieToState(
  cookieName: string,
  event: string,
  property: string = cookieName
) {
  const {
    state: { userData },
    actions,
  } = useStateMachine({ updateUserData })
  useEffect(() => {
    function checkCookie() {
      const cookie = getCookie(cookieName)
      if (cookie) {
        window.dataLayer.push({ event, cookieName: cookie })
        actions.updateUserData({ [property]: cookie })
        return null
      }
      setTimeout(checkCookie, 1500)
    }
    if (!userData[cookieName]) {
      if (isBrowser()) {
        checkCookie()
      }
    }
  }, [])
}
