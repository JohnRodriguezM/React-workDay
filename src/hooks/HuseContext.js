import { useState, useEffect, useContext } from 'react'

import Context from '../contexto/ThemeContext'

// el hook use effect nos pemite crear un estado global sin necesidad de pasarlo a traves de props para conectar entre componentes y sin la limitante de solo poder pasar este "estado de padre a hijo"

// en la carpeta context está el createContext que es el que me permite generar el contexto
// La cantidad de componentes que quiero englobar con ese estado debo llamarlo así

/*
<NombreVarible.Provider value = {"estado","setEstado"}>
  --- componentes que englobla ---
</NombreVarible.Provider>
*/

const HuseContext = () => {
  const color = useContext(Context)
  return (
    <div style = {{backgroundColor: color}}>
    <h4 style = {{color: '#fff'}}>Uso del use Context</h4>
    </div>
  )
}

export default HuseContext