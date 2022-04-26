
import './App.css';
import { useState, useEffect } from "react";

export default function App() {
  const [info, setInfo] = useState([]);
  const [button,setButton] = useState(false);

  // el userEffect se ejecuta cuando el componente se monta
  // el useEffect se ejecuta cuando el componente se monta y cuando cambia el estado
  // dentro del useEffect se puede usar una sentencia return para que no se ejecute mas de una vez y para que se desmonte el componente que querramos renderizar
  useEffect(() => {
    async function getData() {
      try {
        let peticion = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let data = await peticion.json();
        if(button){
          setInfo(data)
          setButton(true)
        }else{
          return null;
        }
        /* setInfo(data); */
      } catch (err) {
        console.error("errrrro");
      }
    }
    // nos suscribimos al evento load
    window.addEventListener("click", getData,{
      once: true,
    });
    // se realiza el desmontaje del componente, nos desuscribimos del evento
    return () => {
      window.removeEventListener("click", getData);
    }
  },[button]);

  // se declaran las funciones de manejo

  const handleClick = ()=> {
    setButton(true)
    setTimeout(()=> {console.log(button)},3000)
  }
  return (
    <div className="App">
      <ol>
        {info.map((el, i) => {
          return <Lista
          texto={el.name}
          username = {el.username}
          key={i} />;
        })}
      </ol>
      <Button click = {handleClick}/>
    </div>
  );
}

function Lista(props) {
  return <li>{props.texto} --- {props.username}</li>;
}


function Button({ click }) {
  return <button
    onClick={click}
  >Click</button>
}