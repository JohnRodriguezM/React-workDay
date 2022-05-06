import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './formulario.css'
const Form = () => {
  const [nombre, setNombre] = useState('')
  const [tareas, setTareas] = useState([] || null)

  const completedTodos = tareas.filter(el => el.completed).length;
  const totales = tareas.length;


  const handleChange = e => setNombre(e.target.value)

  const sendTODO = (e) => {
    let tareita = {
      name : nombre,
      id: uuidv4(),
      completed : false
    }
    let envio = setTareas([...tareas, tareita])
    setTimeout(() => {
      e.target.textContent = 'jeje siuu'
    },1000)
    return envio;
  }

  const eliminar = (id) => {
    let filter = tareas.filter(el => el.id !== id)
    setTareas(filter)
  }

  const completado = (id) => {
    let completados = tareas.map((el) => {
      if(el.id === id) {
        el.completed = !el.completed
      }
      return el;
    })
    setTareas(completados)
  }

  return (
    <>
      Formularios en React - todo
      <form>
        <input type="text"
          onChange={handleChange} />
        <button type="button" onClick={sendTODO} >Enviar tarea</button>
      </form>
      <p>Llevas completadas {completedTodos} tareas de {totales}</p>
      {tareas.map((el,i) => {
        return (
          <div key = {el.id}>
          <li  className= {el.completed ? 'marcado' : 'NO'}>{el.name}</li>
          <button onClick={() => eliminar(el.id)}>X</button>
          <button 
         
          onClick={() => completado(el.id)}>marcar</button>
          </div>
        )
      })}

    </>
  )
}

export default Form

