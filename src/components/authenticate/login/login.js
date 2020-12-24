import React from 'react'
import FormAuth from '../formAuth'
import { auth } from '../../../services/firebase'
import history from '../../../history'
const Login = () => {

  const onSubmit = async() => {
    await auth()
    history.push('/panel')
  }
  return (
    <FormAuth onSubmit={onSubmit} />
  )
}

export default Login