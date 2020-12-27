import React from 'react'
import Panel from '../../panel'
import appFirebase from '../../../../services/firebase/authentication'
import history from '../../../../history'
import { hiddeElement } from '../../../../utils'
const User = () => {
  const onSubmit = () => {
    hiddeElement('header')
    appFirebase.auth().signOut()
    history.push('/login')
  }
  const UserContent = () => {
    return (
      <h1 onClick={onSubmit}>Conteúdo do User</h1>
    )
  }
  return (
    <Panel component={UserContent} />
  )
}
export default User