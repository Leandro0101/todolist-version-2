import React from 'react'
import './form.css'
const Form = () => {
  return (
    <form>
      <div class="form-item">
        <label class="form-label">Título</label>
        <input type="text" name='title' class="form-control" placeholder="name@example.com" />
      </div>
      <div class="form-item">
        <label class="form-label">Descrição</label>
        <textarea class="form-control"></textarea>
      </div>
      <div class="form-item">
        <label class="form-label">Concluir até: </label>
        <input type="date" class="form-control" />
      </div>
    </form>
  )
}

export default Form