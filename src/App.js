
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

export default function App() {
  return (
   <Context.Provider value = 'black' >
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
      <HuseEffect  />
      <hr />
      <br />
      <HuseContext/>
      <br />
      <br />
    </div>
    </Context.Provider> 
  );
}

