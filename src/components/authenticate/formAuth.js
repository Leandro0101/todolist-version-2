import React from 'react'
import './formAuth.css'
import googleIcon from '../../images/google.png'
import { Formik, Field, Form } from 'formik'
import Main from '../../pages/main/main'
import { Link } from 'react-router-dom'
const FormAuth = (props) => {
  const FormAuthContent = () => {
    return (
      <div className='form-auth'>
        <h3>Acesse sua conta</h3>
        <Formik
          onSubmit={props.onSubmit}
          initialValues={{
            email: '',
            password: ''            
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
                <button type='submit'>Entrar</button>
                <Link to='/register' type='button'>Cadastrar</Link>
              </div>
              <div className='otherAcess'>
                <label>Use sua conta:</label>
                <img onClick={props.signInWithGoogle} src={googleIcon} alt='ícone do google' />
              </div>
            </Form>
          )}
        />
      </div>
    )
  }

  return (
    <Main component={FormAuthContent} />
  )
}


export default FormAuth