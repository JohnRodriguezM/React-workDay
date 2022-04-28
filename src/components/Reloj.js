
import { useState, useEffect } from 'react'


export default function Reloj() {
    let time = new Date().toLocaleTimeString();
    const [hora, setHora] = useState(time)
    const [visible, setVisible] = useState(false)
    // use de usEffect
    useEffect(()=> {
        let temporizador;
       temporizador = setInterval(()=> {
           setHora(new Date().toLocaleTimeString())
       })
       return() => clearInterval(temporizador)
    },[])
    // se deja el array de dependencias vacio para que no se ejucute multiples veces
    // si pusiera las dependencias el codigo se ejecuta cuando cambia el estado
    // retorno de componentes en el dom

    return (
        <div>
        <h5>Inicia un reloj o deténlo</h5>
        <p>{visible && `La hora actual es : ${hora}` }</p>
        <button onClick ={() => setVisible(true)}>Iniciar</button>
        <button onClick = {() => setVisible(false)}>Detener</button>
        </div>

    )
}
