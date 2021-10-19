import { useState } from 'react'
import Button from '../Button'


const Estado = () => {
    let estilo = {
        marginTop: `5px`,
        border: `1px solid gray`,
        width: `230px`,
        height: `200px`
    }

    const [valor, setValor] = useState(0)

    function adicionar() {
        setValor(valor + 1)
    }

    function remover() {
        setValor(valor - 1)
    }
    return (
        <div style={estilo}>
            <h2>Componente contador</h2>
            <h3>Usando Estados</h3>
            <h1>{valor}</h1>
            <Button onClick={adicionar}>
                adicionar
            </Button>
            <Button onClick={remover}>remover</Button>
        </div>
    )
}

export default Estado