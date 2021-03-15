import { useEffect } from 'react'
import publicIp from 'public-ip'
import { useStateMachine } from 'little-state-machine'
import { updateUserData } from '@lib/little-state-machine/actions'
import { useSetCookieToState } from './cookies'

export const UserData = ({}) => {
  const { state, actions } = useStateMachine({ updateUserData })

  useEffect(() => {
    ;(async () => {
      const ip = await publicIp.v4()
      actions.updateUserData({ ipAddress: ip })
    })()
  }, [])
  useSetCookieToState('hutk', 'hubspotUserToken')
  return null
}
