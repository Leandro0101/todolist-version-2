import React, { useEffect, useState } from 'react'
import './start.css'
import TodoList from './todolist/todolist'
import FormTodo from './FormTodo/FormTodo'
import Panel from '../../panel'
import { user } from '../../../../services/firebase/authentication'
const Start = () => {

  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    setFirstName(user().displayName.split(' ')[0])
  }, [])

  const StartContent = () => {
    return (
      <div className='content-panel'>
        <div className='content-panel-title'>
          <h3>Deseja adicionar uma nova tarefa, {firstName}?</h3>
        </div>
        <FormTodo />
        <hr></hr>
        <TodoList />
      </div>
    )
  }

  return (
    <Panel component={StartContent} />
  )
}

export default Start