
import { useState,useEffect } from 'react'

/* export default function HookuseState() {
  const [color, setColor] = useState('blue')
  const [background, setBackground] = useState(false)

  useEffect(()=> { 
    console.log('fase')
    const darkMode = () => {
      if(background){
        document.body.style.filter = 'invert(1)'
      }else{
        document.body.style.filter = '';
      }
    }
    window.addEventListener('click', darkMode)
  },[background])


  const handleCheck = (e) => {
    if(e.target.checked){
      setColor('red')//
      console.log('soy checked')
      setBackground(false)
    }else{
      console.log('no soy checked')
      setColor('green')//
      setBackground(true)
    }
  }

  return (
    <>
      <div style={{
        color: color || null
      }}>H-useState
      </div>
      <input type ='checkbox' onClick={handleCheck}/>
    </>
  )
} */


export default function HookuseState() {
  const [mode,setMode] = useState(false)
  const [color,setColor] = useState('blue')

  useEffect(() => {
    const changeBackground = () => {
    document.body.style.backgroundColor = color
    }
    window.addEventListener('click', changeBackground)
    return()=> window.removeEventListener('click', changeBackground)
  })

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
