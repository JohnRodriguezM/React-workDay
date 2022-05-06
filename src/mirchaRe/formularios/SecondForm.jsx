import {useState,useRef} from 'react'

export const SeconForm = () => {
  const [nombre, setNombre] = useState('')
  const [lenguaje, setLenguaje] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const lenguajes = ['','js','php','java','flutter','kotlin']

const handleChangeCheckbox = () => {
    setCheckbox(!checkbox)
  }
  return (

    <>
    <h2>Second Form</h2>
    <form>
      <input type="text" value = {nombre} onChange = {(e) => setNombre(e.target.value)} />
      <p>{nombre.length === 0 ? ' ' : `Tu texto es : ${nombre}`}</p>
      <select name="lenguajes" id="" onChange={(e) => setLenguaje(e.target.value)} defaultValue = ''>
        {
          lenguajes.map(el => <option defaultSelected={el[0]} value = {el}>{el}</option>)
        }
      </select>
      <p>{!lenguaje ? '' : `el lenguaje que seleccionaste es: ${lenguaje}`}</p>
      <br /> <hr />
      <label style = {{marginRight: '10px', userSelect: 'none'}} htmlFor="terminos">{checkbox ? 'haz aceptado los términos y condiciones ':' aceptar términos y condiciones'}</label>
      <input onChange = {handleChangeCheckbox} id = 'terminos' type="checkbox" />
    </form>
    </>
  )
}


// ? esta es una mejora que se hace al manejo del estado para poder tener un rendimiento más óptimo, se pasa un objeto como estado y luego de destructuran los valores y asi se pueden modificar cientos de valores sin crear cientos de variables de estado
export const SecondFormMejora = () => {
  const [form, setForm] = useState({})

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
  }
  const lenguajes = ['','js','php','java','flutter','kotlin']
  const handleChecked = e => {
    setForm({
      ...form,
      [e.target.name] : e.target.checked,
    })
  }


  return (
    <div>
      <h2>SecondFormMejora</h2>
      <form>
        <input type="text" name = 'texto'  defaultValue = {form.texto}  onChange={handleChange}/>
        <p>{form.texto}</p>
        <select name="lenguajes" id="" onChange = {handleChange}>
          {lenguajes.map(el => <option defaultSelected={el[0]} value = {el}>{el}</option>)}
        </select>
        <p>{form.lenguajes}</p>
        <label htmlFor="terminoss">acepta terminos y condiciones</label>
        <input type="checkbox" name="checkbox" id="terminoss" onChange={handleChecked}/>
      </form>
    </div>
    )
  }
  // formulario me
