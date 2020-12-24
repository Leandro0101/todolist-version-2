import React from 'react'
import FormAuth from '../formAuth'
import { createUserWithEmailAndPassword } from '../../../services/firebase'
const Register = () => {
  const onSubmit = (values) => {
    createUserWithEmailAndPassword(values.email, values.password)
  }
  return (
    <div className='register'>
      <FormAuth onSubmit={onSubmit} />
    </div>
    
  )
}

export default Register