import React from 'react'
import './form.css'
const Form = () => {
  return (
    <form>
      <div className="form-item">
        <label className="form-label">Título</label>
        <input type="text" name='title' className="form-control" placeholder="name@example.com" />
      </div>
      <div className="form-item">
        <label className="form-label">Descrição</label>
        <textarea className="form-control"></textarea>
      </div>
      <div className="form-item">
        <label className="form-label">Concluir até: </label>
        <input type="date" className="form-control" />
      </div>
      <div className="form-item">
        <button>Adicionar tarefa</button>
      </div>
    </form>
  )
}

export default Form