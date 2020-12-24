import React, { useEffect, useState } from 'react'
import './header.css'
import appFirebase from '../../services/firebase'
import { showElement } from '../../utils/'
const Header = () => {
  const [user, setUser] = useState({ displayName: '', photoURL: '' })

  useEffect(() => {
    appFirebase.auth().onAuthStateChanged(data => {
      if (data != null) {
        setUser(data)
        showElement('userPhoto')
      }
    })
  })

  return (
    <div className="header" id='headerr'>
      <p>{user.displayName}</p>
      <img id='userPhoto' src={user.photoURL} alt='' />
    </div>
  )
}

export default Header