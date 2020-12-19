import React from 'react'
import './start.css'
import TodoList from './todolist/todolist'
import Form from './form/form'
const Start = () => {
  return (
    <div className='content-panel'>
      <div className='content-panel-title'>
        <h3>Deseja adicionar uma nova tarefa, Leandro?</h3>
      </div>
      <Form />
      <hr></hr>
      <TodoList />
    </div>
  )
}

export default Start