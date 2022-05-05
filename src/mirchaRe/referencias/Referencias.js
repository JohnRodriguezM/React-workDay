/*las refrencias se pueden usar en casos específicos en que necesitamos manejar por ejemplo un menú de hamburguesa para un nav, se hace innecesario re-renderizar con una varible de estado.
Ej de uso de referencias

-Controlar enfoques, selección de texto, o reproducción de medios.
-Activar animaciones imperativas.
-Integración con bibliotecas DOM de terceros.

*/


// el hook usado para las referencias es useRef()

import React,{useRef} from 'react';

const Referencias = () => {
    // uso de las referencias
    let nav = useRef()
    let btnNav = useRef()
console.log(nav)
    const changeVisibility = () => {
        // no necesitamos recibir el evento porque el useRef me da "la referencia del objeto en el virtual DOM"
        if(btnNav.current.textContent === 'mostrar menú'){
            btnNav.current.textContent = 'ocultar menú'
            nav.current.style.display = 'block'
        }else{
            btnNav.current.textContent = 'mostrar menú'
            nav.current.style.display = 'none'
        }
    }


  return (
    <>
    <h2>Referencias</h2>
    
    <button ref = {btnNav} onClick={changeVisibility}>ocultar menú</button>
    <br />
    <nav ref = {nav}>
        <a href="#">section 1</a>
        <br />
        <a href="#">section 2</a>
        <br />
        <a href="#">section 3</a>
        <br />
        <a href="#">section 4</a>
        <br />
        <a href="#">section 5</a>
    </nav>
    </>
  )
}

export default Referencias