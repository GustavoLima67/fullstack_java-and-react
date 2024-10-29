"use client"


import { useEffect, useState } from "react";
import { CgArrowLeftO, CgArrowRightO, CgProfile } from "react-icons/cg";

import "./style.css";
import axios from "axios";

import { Administradores, Usuarios } from "@/app/interfaces/cadastro";
import { proximaPagina, anteriorPagina, clickBack, paginaAtual, usuariosPorPaginas } from "@/app/components/navegarPaginas";
import { pegandoUsers } from "@/app/components/apiJava";
import { cadastrarUsuario, nome, senha, email, data_nascimento, setNome, setSenha, setEmail, setDataNascimento } from "@/app/components/cadastrarUsers";

const PageUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

    useEffect(() => pegandoUsers());


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
                            <input type="text" placeholder="Nome do usuário" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="input-password"> 
                            <input type="password" placeholder="Senha do usuário" value={senha}  onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="input-email"> 
                            <input type="email" placeholder="Email do usuário" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="inputs-date" > 
                            <input type="date" value={data_nascimento} onChange={(e) => setDataNascimento(e.target.value)}/>
                        </div>
                    </div>

                    <div className="button-cdt">
                        <div className="cadastre">
                            <button onClick={cadastrarUsuario} type="button">CADASTRAR</button>
                        </div>
                    </div>
                  
                    <div className="card-obs">
                        <div className="obs">
                            <div className="text-obs">
                                <h1>obs:</h1>
                                <h1>quant. miníma de usuários permitidos: 1</h1>
                                <h1>quant. maxíma de usuários permitidos: 20</h1>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="read-user">
                    <div className="text-users-read">
                        <h1>USUÁRIOS JÁ CADASTRADOS</h1>
                    </div>
                    <div className="inputs-read-user">
                        <div className="list-users-icons">
                            <ul className="list-users">
                                {usuarios.map((usuario, index) => (
                                <div className={`input-user-${index + 1}`} key={usuario.id}>
                                    <div className="icon-profile">
                                        <CgProfile/>
                                    </div>   
                                    <li><h1>{usuario.nome}</h1></li>
                                </div>))}
                            </ul>
                        </div>
                    </div>

                    <div className="button-quanti-pag">
                        <div className="icon-left"> 
                            <button onClick={proximaPagina} type="button" disabled={paginaAtual === 1}><CgArrowLeftO/></button>
                        </div>
                        <div className="icon-right"> 
                            <button onClick={anteriorPagina} type="button" disabled={paginaAtual === Math.ceil(usuarios.length / usuariosPorPaginas)}> <CgArrowRightO/></button>
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

export default PageUsuarios;