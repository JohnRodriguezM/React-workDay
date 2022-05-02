import {useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/Tarjetas.css'
// se diseñan tarjetas




export default function HuseEffect() {
  // se declara la varibale de estado para definir personaje y para actulizar estado
  const [personajes, setPersonajes] = useState([])
  
  // uso de useEffect
  useEffect(() => {
    const getData = async () => {
      const data=await fetch('https://rickandmortyapi.com/api/character/')
      const json = await data.json()
      console.log(json);
      setPersonajes(json.results)
      console.log(personajes)
    }
    getData()
    //
  
    return () => {
      //
    }
  }, [])
  
  return (
    <div>
    Uso del hook useEffect
    <div>
      <ol className="container-tarjeta">
        {
          personajes.map(personaje => 
          <Personaje
          key = {uuidv4()}
          name = {personaje.name}
          imagen = {personaje.image}
          specie = {personaje.species}
          status = {personaje.status}
          id = {uuidv4()}
          estado = {personajes}
          setEstado = {setPersonajes}
          completed = {false}
          /> 
          )
        }
      </ol>
    </div>
    </div>
  )
}


function Personaje({imagen,name,specie,status,id,completed}){
  // constante estilo
  const estiloLI = {
    listStyle: 'none',
    marginTop: '0px',
    transition: 'all .5s ease',
  }
  const listStyleNO = {
    listStyle: 'none',
  }

  const [over,setOver] = useState(false)
 
    const filtrado = ()=> {
      
      setOver(true)
    }
  return(
    over ? 
   <div className= 'tarjetaMain' onMouseOver={filtrado}
   onMouseLeave = {()=> setOver(false)}>
    <div
    className= 'tarjeta' >
      <li style = {{listStyle: 'none'}}>{name}</li>
      <img className = {over ? 'img-style reducirTamannio' : 'img-style'} src = {imagen} alt= {`imagen de ${name}`}/>
      {over ? <li style = {estiloLI}>{specie}</li> : null}
      {over ? <li style = {listStyleNO}>{status}</li> : null}
      {over ? <li style = {listStyleNO}>{status}</li> : null}
    </div>
   </div>
   :
   <div className="tarjetaMain" onMouseOver={filtrado}
   onMouseLeave = {()=> setOver(false)}>
    <div
    className= 'tarjeta'>
      <li style = {{listStyle: 'none'}}>{name}</li>
      <img className = 'img-style' src = {imagen} alt= {`imagen de ${name}`}/>
    </div>
   </div>
   
  )
}