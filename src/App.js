
import './App.css';
//se realiza import de components
import Reloj from './components/Reloj';
import Api from './components/Api';
import PokeApi from './components/PokeApi';

// hooks en react
import HookuseState from './hooks/HookuseState';

export default function App() {
  return (
    <div className="App">
     <Reloj/>
     <hr/>
     <hr/>
     <Api/>
     <hr/>
     <hr/>
     <PokeApi/>
     <hr/>
     <hr/>
     {/* hooks en react a profundidad */}
     <HookuseState/>
    </div>

  );
}

