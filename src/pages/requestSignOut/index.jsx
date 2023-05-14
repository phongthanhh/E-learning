import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SIGN_OUT } from 'stores'

function RequestSignOut() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: SIGN_OUT })
  }, [dispatch])

  return null
}

export default RequestSignOut
