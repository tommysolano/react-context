// context solo debe ser usado en aplicaciones pequeñas debido a que cada ves que el contexto cambia
// este va a renderizar todo lo que este dentro lo que presenta un problema de rendimiento en aplicaciones grandes
// en ese caso se debe de hacer uso de redux 
import { createContext, useContext, useState, memo, useCallback } from 'react'

const Context = createContext()

const ContadorProvider = ({ children }) => {
    const [contador, setCont] = useState(0)

    const incrementar = useCallback(() => setCont(x => x + 1), [])
    const decrementar = useCallback(() => setCont(x => x - 1), [])

    return (
        <Context.Provider value={{contador, incrementar, decrementar}}>
            {children}
        </Context.Provider>
    )
}

const Incrementar = memo(() => {
    console.log("incrementar")
    const {incrementar} = useContext(Context)
    return (
        <button onClick={incrementar}>Incrementar</button>
    )
})

const Decrementar = memo(() => {
    console.log("incrementar")
    const {decrementar} = useContext(Context)
    return (
        <button onClick={decrementar}>Decrementar</button>
    )
})

const Label = () => {
    console.log("label")
    const { contador } = useContext(Context)
    return (
        <h1>{contador}</h1>
    )
}

const App = () => {
    return (
        <ContadorProvider>
            <Label/>
            <Incrementar/>
            <Decrementar/>
        </ContadorProvider>
    )
}

export default App