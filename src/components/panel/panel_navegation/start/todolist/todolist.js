import React, { useState, useEffect } from 'react'
import './todolist.css'
import { GrCheckbox } from 'react-icons/gr'
import { FcCheckmark } from 'react-icons/fc'
import { changeCheckBox } from '../../../../../utils'
import { findAll } from '../../../../../services/firebase/todolist'
const TodoList = () => {
  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   (async () => {
  //     setTasks(await findAll())
  //   })()
  // }, [])

  // console.log(tasks)

  return (
    <div className='todolist'>
      <div className='todolist-items'>
        {/* {tasks.map(task => {
          <h5><span><GrCheckbox /></span><p>{task.data().title}</p></h5>
        })} */}
        {/* <h5>
          <span id='incompleteItem' onClick={() => changeCheckBox('incompleteItem', 'completeItem')}>
            <GrCheckbox />
          </span>
          <span id='completeItem' onClick={() => changeCheckBox('completeItem', 'incompleteItem')}>
            <FcCheckmark />
          </span>
          <p>Levar comida para o cachorro</p>
        </h5> */}
      </div>
    </div>
  )
}

export default TodoList