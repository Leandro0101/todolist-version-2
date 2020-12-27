import React from 'react'
import './form.css'
import { create } from '../../../../../services/firebase/todolist'
import { Form, Formik, Field } from 'formik'
const FormTodo = () => {

  const onSubmit = (values) => {
    values.status = 'incomplete'
    create(values)
  }

  return (
    <Formik

      onSubmit={onSubmit}

      initialValues={{
        title: '',
        description: '',
        date: new Date(),
      }}

      render={({ values }) => (
        <Form className='formTodo'>
          <div className='form-item'>
            <label className='form-label'>Título</label>
            <Field type='text' name='title' className='form-control' value={values.title} />
          </div>
          <div className='form-item'>
            <label className='form-label'>Descrição</label>
            <Field type='text' name='description' className='form-control' value={values.description} />
          </div>
          <div className='form-item'>
            <label className='form-label'>Concluir até: </label>
            <Field type='date' name='date' className='form-control' value={values.date} />
          </div>
          <div className='form-item'>
            <button type='submit'>Adicionar tarefa</button>
          </div>

        </Form>
      )}
    />

  )
}

export default FormTodo