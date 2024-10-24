"use client"

import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";
import "./style.css";

import { useRouter } from "next/navigation";



const Usuarios = () => {
    const router = useRouter();

    const clickBack = () => router.back();

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
                    <div className="text-new-user">
                        <h1>CADASTRE UM NOVO USUÁRIO</h1>
                    </div>
                    <div className="inputs-and-texts">
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

                <div className="read-user">
                    <div className="text-users-read">
                        <h1>USUÁRIOS JÁ CADASTRADOS</h1>
                    </div>
                    <div className="inputs-read-user">
                        <div className="input-user-1">
                            <div className="user-1">
                                <h1>Gustavo L. Souza</h1>
                            </div>
                        </div>
                        <div className="input-user-2">
                            <div className="user-2">
                                <h1>Lucas L. Souza</h1>
                            </div>
                        </div>
                        <div className="input-user-3">
                            <div className="user-3">
                                <h1>Josivani L. Moura</h1>
                            </div>
                        </div>
                        <div className="input-user-4">
                            <div className="user-4">
                                <h1>Thiago M. Silva</h1>
                            </div>
                        </div>
                        <div className="input-user-5">
                            <div className="user-5">
                                <h1>Dhuane M. Silva</h1>
                            </div>
                        </div>
                    </div>

                    <div className="button-quanti-pag">
                        <div className="icon-left"> 
                            <button type="button"><CgArrowLeftO/></button>
                        </div>
                        <div className="icon-right"> 
                            <button type="button"> <CgArrowRightO/></button>
                        </div>
                    </div>
                </div>

                <div className="card-moders"> 
                    <div className="card-moders-exitents">
                        <div className="title-moders">
                            <h1>MODERADORES PRESENTES</h1>
                        </div>
                        <div className="card-text-moders">
                            <div className="moder-1">
                                <h1>Alex Silva</h1>
                            </div>
                            <div className="moder-2">
                                <h1>Pedro H. Santos</h1>
                            </div>
                        </div>
                    </div>

                    <div className="button-back">
                        <div className="back">
                            <button onClick={clickBack} type="button">VOLTAR</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Usuarios;