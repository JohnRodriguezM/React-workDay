import { useState, useEffect } from 'react'

export default function PokeApi() {
  // definición de variable de estado
  const [pokemon, setPokemon] = useState([])
  // uso del useEffect
  useEffect(() => {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    const getData = async () => {
      try{
        let res = await fetch(url)
        let json = await res.json();
        json.results.map(async (el) => {
          let peticion = await fetch(el.url)
          let data = await peticion.json();
          let pokemonIndividual = {
            id: data.id,
            avatar: data.sprites.front_default,
            texto: data.name,
          }
          // como necesito que se pegue automaticamente el pokemonIndividual al arreglo de estado debe ser ejecutado dentro de una función
          setPokemon((pokemon) => [...pokemon, pokemonIndividual])
        })
      }
      catch(err){
        console.log(err)
      }
    }



    // se suscribe a la funcio a traves de addEventListener
    window.addEventListener('load', getData);
    // se realiza el unmount del componente
    return () => window.removeEventListener('load', getData)
  })// no se pasan dependencias ya que el código solo debe ser traido una vez

  // retorno del componente
  return (
    <div>
      <h5>{pokemon.length === 0 ? 'cargando...' : 'Lista de pokemonos'}</h5>
      <ul>
        {pokemon.map(el => {
          return(
            <Lista
                texto = {el.texto}
                avatar = {el.avatar}
                key = {el.id}
            />
          )
        })}
      </ul>
    </div>
  )
}


function Lista({texto,avatar}){
  return (
    <>
    <li> {texto}</li>
    <img src = {avatar} alt = {texto}/>
    </>
  )
}