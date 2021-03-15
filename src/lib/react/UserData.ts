import { useEffect } from 'react'
import publicIp from 'public-ip'
import { useStateMachine } from 'little-state-machine'
import { updateUserData } from '@lib/little-state-machine/actions'
import { useSetCookieToState } from './cookies'
import { useRouter } from 'next/router'

export const UserData = ({}) => {
  const { state, actions } = useStateMachine({ updateUserData })
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const ip = await publicIp.v4()
      //fetch the user ip and add to state
      actions.updateUserData({ ipAddress: ip })
    })()
  }, [])
  useEffect(() => {
    //fetch the user IP and add to state
    const trackingParams = Object.keys(state.userData).filter((key) =>
      key.match(/^[utm_|hsa_|gclid]/)
    )
    function filterParams(acc, [key, value]) {
      if (trackingParams.includes(key)) {
        return {
          ...acc,
          [key]: value,
        }
      }
      return acc
    }
    const trackingData = Object.entries(router.query).reduce(filterParams, {})
    actions.updateUserData(trackingData)
  }, [router])
  useSetCookieToState('hutk', 'hubspotUserToken')
  return null
}