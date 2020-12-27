import React from 'react'
import './main.css'

const Main = (props) => {
  return (
    <div className='main'>
        <props.component />
    </div>
  )
}
export default Main