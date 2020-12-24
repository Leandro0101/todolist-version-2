import React from 'react'
import './todolist.css'
import { GrCheckbox } from 'react-icons/gr'
import { FcCheckmark } from 'react-icons/fc'
import { hiddeElement, showElement, changeCheckBox } from '../../../../../utils'
const TodoList = () => {
  return (
    <div className='todolist'>
      <div className='todolist-items'>
        <h5><span><GrCheckbox /></span><p>Todolist</p></h5>
        <h5><span><GrCheckbox /></span><p>Levar comida para o cachorro</p></h5>
        <h5><span><GrCheckbox /></span><p>Todolist</p></h5>
        <h5><span><GrCheckbox /></span><p>Levar comida para o cachorro</p></h5>
        <h5><span><GrCheckbox /></span><p>Todolist</p></h5>
        <h5>
          <span id='incompleteItem' onClick={() => changeCheckBox('incompleteItem', 'completeItem')}>
            <GrCheckbox />
          </span>
          <span id='completeItem' onClick={() => changeCheckBox('completeItem', 'incompleteItem')}>
            <FcCheckmark />
          </span>
          <p>Levar comida para o cachorro</p>
        </h5>
      </div>
    </div>
  )
}

export default TodoList