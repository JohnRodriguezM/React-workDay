
import './App.css';
//se realiza import de components
import Reloj from './components/Reloj';
import Api from './components/Api';
import PokeApi from './components/PokeApi';

// hooks en react
import HookuseState from './hooks/HookuseState';
import HuseEffect from './hooks/HuseEffect';
import HuseContext from './hooks/HuseContext';

// se importa el ThemeProvider
import Context from './contexto/ThemeContext'


// se crea un customHook
import UsoUseFetch from './mirchaRe/customHook/UsoUseFetch';

// otros modulos
import Referencias from './mirchaRe/referencias/Referencias';
// formularios
import Form from './mirchaRe/formularios/Form';
import { SeconForm, SecondFormMejora } from './mirchaRe/formularios/SecondForm';

// explicacion sobre estilos en react
import Estilos1 from './mirchaRe/estilosEnReacts/estilos1'
export default function App() {
  return (
    <Context.Provider value='black' >
      <div className="App">
        <Reloj />
        <hr />
        <hr />
        <Api />
        <hr />
        <hr />
        <PokeApi />
        <hr />
        <hr />
        {/* hooks en react a profundidad */}
        <HookuseState />
        <hr />
        <hr />
        <HuseEffect />
        <hr />
        <br />
        <HuseContext />
        <br />
        <br />
        <UsoUseFetch />
        <br />
        <br />
        <hr />
        <Referencias />
        <br />
        <br />
        <hr />
        <Form />
        <br />
        <br />
        <hr />
        <SeconForm />
        <br />
        <br />
        <SecondFormMejora />
        <br />
        <br />
        <hr />
        <Estilos1/>
        <br />
        <br />
        <br />
        <br />
      </div>
    </Context.Provider>
  );
}

