import { createContext, useContext } from 'react' //importamos las dependencias necesarias para usar context


const Context = createContext('valor por defecto') //creamos una constante fuera de app y le asignamos createContext
                                                    // esta funcion puede debe tener un valor por defecto, puede ser un objeto, un array, un numero o un string

const Provider = ({ children}) => { //un provider es el encargado de pasar el contexto hacia abajo a los componentes hijos
  return (
    <Context.Provider value={'mi valor'} >  
      {children}
    </Context.Provider>
  )
} 

//el Context.Provider siempre necesita de un value o react nos dara error

const Contenido = () => {
  const ctx = useContext(Context) //pasamos dentro de useContext el contexto que queremos utilizar
  return (
    <div>
      {ctx}
    </div>
  )
}

function App() {
  return (
    <Provider >
      <Contenido/>
    </Provider>
  );
}

//pasamos el componente Provider dentro de app 
//si no utilizamos la etiqueta provider context usara el valor por defecto y no el value

export default App;
