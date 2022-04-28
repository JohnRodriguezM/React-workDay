import { useState, useEffect } from 'react'

export default function Api() {
  // variables de estao
  const [visible, setVisible] = useState(false)
  const [peticion, setPeticion] = useState([])
  // uso de useEffect
  useEffect(() => {
    let api = 'https://jsonplaceholder.typicode.com/users';
    const getData = async () => {
      try {
        let peticion = await fetch(api)
        let data = await peticion.json()
        setPeticion(data)
      }
      catch (e) {
        console.error(e)
      }
    }
    window.addEventListener('load', getData)
    return()=> window.removeEventListener('load', getData)
  },[])
  return (
    <div>
    <h5>Trabajando con AJAXs</h5>
      <ol>
        {
          visible ? peticion.map(el => {
            return (
              <Lista
              texto = {el.name}
              infoExtra = {el.username}
              key = {el.name} />
            )
          }): ''
        }
      </ol>
      <button onClick={() => setVisible(true)}>{visible ? '.' : `Hacer peticion`}</button>
      <button onClick={() => setVisible(false)}>{visible ? 'Cancelar' : `.`}</button>
    </div>
  )
}


function Lista({ texto,infoExtra }) {
  return (
    <li>{texto} --- {infoExtra}</li>
  )
}