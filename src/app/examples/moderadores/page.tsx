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
                        <h1 className="textTitle-cadastre">CADASTRAR NOVO MODERADOR</h1>
                        <div className="inputs-cadastre">
                            <div className="input-nome">
                                <input type="text" placeholder="Nome para cadastro:" />
                            </div>
                            <div className="input-senha">
                                <input type="password" placeholder="Senha para cadastro:"/>
                            </div>
                            <div className="input-email">
                                <input type="email" placeholder="Email para cadastro:"/>
                            </div>
                            <div className="input-cargo">
                                <input type="text" placeholder="Cargo:"/>
                            </div>
                        </div>
                        <div className="camp-button">
                            <button className="button-cadastre">CADASTRAR</button>
                        </div>
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