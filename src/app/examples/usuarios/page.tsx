"use client"

import "./style.css";

const Usuarios = () => {
    return(
        <div className="body">
           <div className="navbar-main">
                <div className="texts-navbar">
                    <div className="wecolme">
                        <h1>SEJA BEM VINDO A SALA DE CADASTRO DE USUÁRIOS</h1>
                    </div>
                </div>
           </div>
            <div className="cadastre-user">
                <div className="card-new-user">
                    <div className="inputs-and-texts">
                        <div className="text-new-user">
                            <h1>CADASTRE UM NOVO USUÁRIO</h1>
                        </div>
                        <div className="input-name"> 
                            <input type="text" placeholder="Nome" />
                        </div>
                        <div className="input-password"> 
                            <input type="text" placeholder="Senha" />
                        </div>
                        <div className="input-phone"> 
                            <input type="text" placeholder="Telefone" />
                        </div>
                        <div className="inputs-date"> 
                            <input type="date" />
                        </div>
                    </div>

                    <div className="button-cadastre">
                        <div className="cadastre">
                            <div className="text-cadastre">
                                <button type="button">CADASTRAR</button>
                            </div>
                        </div>
                    </div>
                    <div className="obs">
                        <div className="text-obs">
                            <h1>obs:</h1>
                            <h1>quant. miníma de usuários permitidos: 1</h1>
                            <h1>quant. maxíma de usuários permitidos: 20</h1>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Usuarios;