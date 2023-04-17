
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { CardPersonaje } from './components/CardPersonaje';
import { StatusContext } from './context/StatusContext';


export const App = () => {

  const [lista, setLista] = useState([]);

  const mostrar = async () => {
    try {

        await fetch('https://swapi.dev/api/people')
        .then((res) => res.json())
        .then((respuesta) => {
          const listaActualizada = respuesta.results.map((element, index) => {
            return {
              ...element,
              img: "https://starwars-visualguide.com/assets/img/characters/"+(index+1)+".jpg"
            };
          });
          setLista(listaActualizada)
        });
        console.log(lista);
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  console.log(lista)


  return (
    <div>
      <div id='divImg'>
        <img id="img" src="./src/img/602bb8655c5b2300043add95.png" alt=""/>
      </div>
      <div style={{textAlign:"center", margin:'10px'}} >
       <Button style={{color:'black', backgroundColor:'#ffeb00', borderColor:'#ffeb00'}} onClick={mostrar} >Obtener Personajes</Button>
      </div>

      <StatusContext.Provider value={{lista,setLista}}>

        <CardPersonaje />

      </StatusContext.Provider>


    </div>
  )
}

