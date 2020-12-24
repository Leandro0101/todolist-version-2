import React from 'react'
import Panel from '../../panel'
const Pending = () => {
  const PendingContent = () => {
    return (
      <h1>Conteúdo do pending</h1>
    )
  }
  return (
    <Panel component={PendingContent} />
  )
}
export default Pending