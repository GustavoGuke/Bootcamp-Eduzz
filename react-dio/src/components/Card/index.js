const Card = ({children, nomeCurso}) => {

  
    let estilo = {
        marginTop: `15px`,
        padding: `5px`,
        border: `1px solid gray`,
        width: `430px`,
        height: `400px`,
    }
    return (
        <div>
            <div style={estilo}>
                <h1>{nomeCurso}</h1>
                
                    {children}
                
            </div>
        </div>
    )
}

export default Card