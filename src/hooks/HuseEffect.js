import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/Tarjetas.css'
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp
} from "react-icons/ai";
// se diseñan tarjetas


// se importa funcion helper para hacer el fetch
import getData from '../helpers/getData'

export default function HuseEffect() {
  // se declara la varibale de estado para definir personaje y para actulizar estado
  const [personajes, setPersonajes] = useState([])

  // se declara la funcion que va a ser usada dentro de useEffect
  // uso de useEffect
  useEffect(() => {
    // se suscribe al evento
    // montaje
    window.addEventListener('load', () =>  getData(setPersonajes))
    return () => {
      // desmontaje
      // se desuscribe al evento
      window.removeEventListener('load', () => getData(setPersonajes))
    }
  },[])

  return (
    <div>
      Uso del hook useEffect
      <div>
        <ol className="container-tarjeta">
          {
            personajes.map(personaje =>
              <Personaje
                key={uuidv4()}
                name={personaje.name}
                imagen={personaje.image}
                specie={personaje.species}
                status={personaje.status}
                origin={personaje.location.name}
                gender = {personaje.gender}
              />
            )
          }
        </ol>
      </div>
    </div>
  )
}


function Personaje({ imagen, name, specie, status, origin, gender }) {
  // constantes estilos
  const estiloLI = {
    listStyle: 'none',
    marginTop: '10px',
    transition: 'all .5s ease',
  }
  const listStyleNO = {
    listStyle: 'none',
  }
  // declacion de variable de estado
  const [over, setOver] = useState(false)
  // funcion toggle manipulando el estado
  const filtrado = () => {
    setOver(!over)
  }
  return (
    // renderizado condicional, buscar como optimizarlo
    over ?

      <div className={over ? 'tarjetaMain reducirTamannio' : 'tarjetaMain aumentar'}>
        <Button evento={filtrado}>
          {over ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </Button>
        <div

          className='tarjeta' >
          <li style={listStyleNO}>Hi, I'm  {name}</li>
          <img className={over ? 'img-style reducirTamannio' : 'img-style aumentar'} src={imagen} alt={`imagen de ${name}`} />
          {over ? <li style={estiloLI}>Especie: {specie}</li> : null}
          {over ? <li>Estado: {status}</li> : null}
          {over ? <li>Ubicación: {origin}</li> : null}
          {over ? <li>Género: {gender}</li> : null}
        </div>
      </div>

      :

      <div className={over ? 'tarjetaMain reducirTamannio' : 'tarjetaMain aumentar'}>
        <Button evento={filtrado}>
          {over ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </Button>
        <div
          className='tarjeta'>
          <li>Hi, I'm {name}</li>
          <img className={over ? 'img-style reducirTamannio' : 'img-style aumentar'} src={imagen} alt={`imagen de ${name}`} />
        </div>
      </div>

  )
}

const Button = (props) => {
  return (
    <div
      onClick={props.evento}
      className='button'
    >
      {props.children}
    </div>
  )
}