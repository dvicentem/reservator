import React, { useState, useEffect, Fragment } from 'react'
import { auth } from '../firebase/firebase'
import Login from './Login'
import Logout from './Logout'
import { onAuthStateChanged } from 'firebase/auth'

const User = ({ gToken, setGToken }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(auth.currentUser)
    onAuthStateChanged(auth, () => {
      setUser(auth.currentUser)
    })
  }, [])

  if (!user) {
    return (
      <Fragment>
        <h3>You are not logged in</h3>
        <Login gToken={gToken} setGToken={setGToken} />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <h3>You are logged in as {user.displayName}</h3>
      <Logout gToken={gToken} setGToken={setGToken} />
    </Fragment>
  )
}

export default User
