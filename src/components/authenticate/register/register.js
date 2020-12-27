import React from 'react'
import { Formik, Field, Form } from 'formik'
import Main from '../../../pages/main/main'
import { createUserWithEmailAndPassword } from '../../../services/firebase/authentication'
import history from '../../../history'
const Register = () => {

  const onSubmit = (values) => {
    const { email, password } = values
    createUserWithEmailAndPassword(email, password)

    history.push('/')
  }

  const RegisterContent = () => {
    return (
      <div className='form-auth'>
        <h3>Registre-se</h3>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            password: '',
            passwordVerification: '',
            email: '',

          }}

          render={({ values }) => (
            <Form className='form'>
              <div className='form-item'>
                <label className='form-label'>Email</label>
                <Field type='email' name='email' className='form-control' placeholder='name@example.com' value={values.email} />
              </div>
              <div className='form-item'>
                <label className='form-label'>Senha</label>
                <Field type='password' name='password' className='form-control' value={values.password} />
              </div>
              <div className='form-item'>
                <label className='form-label'>Confirme sua senha</label>
                <Field type='password' name='passwordVerification' className='form-control' value={values.passwordVerification} />
              </div>
              <div className='btn-group'>
                <button type='submit'>Registrar-se</button>
              </div>
            </Form>
          )}
        />
      </div>
    )
  }

  return (
    <Main component={RegisterContent} />
  )
}


export default Register