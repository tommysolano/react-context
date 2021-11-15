// como consumir multiples context
import { createContext, useContext } from 'react'

const Context1 = createContext("mi primer context")
const Context2 = createContext("mi segundo context")

const Provider = ({ children }) => {
    return (
        <Context1.Provider value="valor 1">
            <Context2.Provider value="valor 2">
                { children }
            </Context2.Provider>
        </Context1.Provider>
    )
}

const Componente = () => {
    const valor1 = useContext(Context1)
    const valor2 = useContext(Context2)
    return (
        <div>
            {valor1} {valor2}
        </div>
    )
}

const App = () => {
    return (
        <Provider>
            <Componente/>
        </Provider>
    )
}

export default App