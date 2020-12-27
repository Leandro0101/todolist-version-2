import React from 'react'
import FormAuth from '../formAuth'
import { auth, signInWithEmailAndPassword } from '../../../services/firebase/authentication'
import history from '../../../history'
const Login = () => {

  const signInWithGoogle = async () => {
    await auth()
    history.push('/')
  }


  const signInWithEmailAPassword = async (values) => {
    await signInWithEmailAndPassword(values.email, values.password)
    history.push('/')
  }
  return (
    <FormAuth signInWithGoogle={signInWithGoogle} onSubmit={signInWithEmailAPassword} />
  )
}

export default Login