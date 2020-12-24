import React from 'react'
import Panel from '../../panel'
const Notice = () => {
  const NoticeContent = () => {
    return (
      <h1>Conteúdo do notice</h1>
    )
  }
  return (
    <Panel component={NoticeContent} />
  )
}
export default Notice