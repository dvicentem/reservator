import React, { useState, Fragment } from 'react'
import { auth } from '../firebase/firebase'

const Logout = () => {
  return (
    <Fragment>
      <button id="btn-logout" onClick={async () => await auth.signOut()}>
        Logout app
      </button>
    </Fragment>
  )
}

export default Logout
