import React, { useEffect } from 'react'
import { FcTodoList } from 'react-icons/fc'
import { BsStopwatch } from 'react-icons/bs'
import { AiOutlineWarning, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Main from '../../pages/main/main'
import { showElement } from '../../utils'
import './panel.css'
const Panel = (props) => {

  useEffect(() => {
    showElement('header')
  })

  const PanelContent = () => {
    return (
      <div className='panel'>
        <div className='navegation-panel'>
          <Link className='btn' to='/panel'><span><FcTodoList /></span>Inicio</Link>
          <Link className='btn' to='/pending'><span><BsStopwatch /></span>Pendente</Link>
          <Link className='btn' to='/notice'><span><AiOutlineWarning /></span>Aviso</Link>
          <Link className='btn' to='/user'><span><AiOutlineUser /></span>Usuário</Link>
        </div>
        <props.component />
      </div>
    )
  }

  return (
    <Main component={PanelContent} />
  )

}

export default Panel