const Card = () => {

  
    let estilo = {
        marginTop: `15px`,
        padding: `5px`,
        border: `1px solid gray`,
        width: `330px`,
        height: `200px`
    }
    return (
        <div>
            <div style={estilo}>
                <h1> Card</h1>
                <p>texto</p>
            </div>
        </div>
    )
}

export default Card