import "./style.css"

const Moderadores = () => {
    return(
        <div className="body">
            <div className="main">
                <div className="card-main">
                    <h1>BEM VINDO A SALA DE CADASTRO DE MODERADORES</h1>
                </div>
                <div className="cards-mains">    
                    <div className="card-cadastre">
                        <h1>CADASTRAR NOVO MODERADOR</h1>
                    </div>
                    <div className="card-moders-gifts">
                        <h1>MODERADORES PRESENTES</h1>
                    </div>
                    <div className="card-moders-inserted">
                        <h1>MODERADORES INSERIDOS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moderadores;