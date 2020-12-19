import React from 'react'
import { FcTodoList } from 'react-icons/fc'
import { BsStopwatch } from 'react-icons/bs'
import { AiOutlineWarning, AiOutlineUser } from 'react-icons/ai'
import Start from './panel_navegation/start/start'
import './panel.css'
const Panel = () => {
  return (
    <div className='panel'>
      <div className='navegation-panel'>
        <button><span><FcTodoList /></span>Inicio</button>
        <button><span><BsStopwatch /></span>Pendente</button>
        <button><span><AiOutlineWarning /></span>Avisos</button>
        <button><span><AiOutlineUser /></span>Usuário</button>
      </div>
      <Start />
    </div>
  )

}

export default Panel