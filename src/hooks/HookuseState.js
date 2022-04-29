
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
  const [color,setColor] = useState('')

  useEffect(() => {
    const changeBackground = () => {
    document.body.style.backgroundColor = color
    }
    window.addEventListener('click', changeBackground)
    return()=> window.removeEventListener('click', changeBackground)
  })

  const handleClick = () => {
    if(!mode){
      setMode(true)
      setColor('blue')
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
    <button type = "button" onClick={handleClick}>{mode ? 'lightmode' : 'darkmode'}</button>
    </>
  )
}
