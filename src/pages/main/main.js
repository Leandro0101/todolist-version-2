import React from 'react'
import './main.css'
import Panel from '../../components/panel/panel'

const Main = (props) => {
  return (
    <div className='main'>
        <props.component />
    </div>
  )
}
export default Main