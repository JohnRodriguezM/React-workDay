
import { useState,useEffect } from 'react'

// se importa el ThemeContext para el useContext


export default function HookuseState() {
  const [mode,setMode] = useState(false)
  const [color,setColor] = useState('')


  useEffect(() => {
    const changeBackground = () => {
    document.body.style.backgroundColor = color
    }
    console.log('hola');
    window.addEventListener('click', changeBackground)
    return()=> window.removeEventListener('click', changeBackground)
  },[color])

  const handleClick = () => {
    // si mode es false lo paso a true y cambio el color a azul
    if(!mode){
      setMode(true)
      setColor('#5D5D5D')
    // si modo es true, paso el modo a false y vacio el color
    }else{
      setMode(false)
      setColor('')
    }
  }

  return (
    <>
    <div>
    Hook useState
    </div>
    {/* si modo es true muestrame el valor lightmode, si es false muestrame darkmode */}
    <button type = "button" onClick={handleClick}>{mode ? 'lightmode' : 'darkmode'}</button>
    </>
  )
}
