import React from 'react'
import './formAuth.css'
import googleIcon from '../../images/google.png'
import { auth } from '../../services/firebase'
import { Formik, Field, Form } from 'formik'
const FormAuth = (props) => {
  return (
    <div className='form-auth'>
      <h3>Acesse sua conta</h3>
      <Formik
        onSubmit={props.onSubmit}
        initialValues={{
          name: '',
          email: '',

        }}

        render={({ values }) => (
          <Form className='form'>
            <div className='form-item'>
              <label className='form-label'>Email</label>
              <Field type='email' name='email' className='form-control' placeholder='name@example.com' value={values.email} />
            </div>
            <div className='form-item'>
              <label className='form-label'>password</label>
              <Field type='password' name='password' className='form-control' value={values.password} />
            </div>
            <div className='btn-group'>
              <button type='button'>Entrar</button>
              <button type='submit'>Cadastre-se</button>
            </div>
            <div className='otherAcess'>
              <label>Use sua conta:</label>
              <img onClick={auth} src={googleIcon} alt='ícone do google' />
            </div>
          </Form>
        )}
      />
    </div>
  )
}

export default FormAuth