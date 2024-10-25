"use client"


import { useEffect, useState } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";
import "./style.css";
import axios from "axios";
import { useRouter } from "next/navigation";

import { paginaResponsiva, Usuarios } from "@/app/interfaces/usuarios";

const PageUsuarios = () => {

    const router = useRouter();

    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPagina, setTotalPagina] = useState(1);
    const limiteUsuarios = 5;

    //Carregar usuários sempre que a pagina atual mudar
    useEffect(() => {buscarUsuariosEspecificos(paginaAtual);}, [paginaAtual])

    //Função para buscar usuários de uma página especifica
    const buscarUsuariosEspecificos = async(page = 1) => {
    try {
      const response = await axios.get<paginaResponsiva>("http://localhost:8080/java_developer-GL67/api/usuarios", {params: {page, limiteUsuarios}});
      setUsuarios(response.data.content);
      setTotalPagina(response.data.totalPaginas);
    } catch (error) {
      console.error("Erro ao buscar os usuários");
    }
  };

    //Função para ir para a proxima pagina
    const proximaPagina = () => {
        if(paginaAtual < totalPagina) setPaginaAtual(paginaAtual + 1)
    };

    //Função para ir para pagina anterior
    const anteriorPagina = () => {
        if(paginaAtual > 1) setPaginaAtual(paginaAtual - 1)
    };

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
                            <input type="text" placeholder="Nome do usuário" />
                        </div>
                        <div className="input-password"> 
                            <input type="text" placeholder="Senha do usuário" />
                        </div>
                        <div className="input-phone"> 
                            <input type="text" placeholder="Telefone do usuário" />
                        </div>
                        <div className="input-phone"> 
                            <input type="text" placeholder="Cpf do usuário" />
                        </div>
                        <div className="inputs-date"> 
                            <input type="date" />
                        </div>
                    </div>

                    <div className="button-cdt">
                        <div className="cadastre">
                            <button type="button">CADASTRAR</button>
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
                        <div className="input-user-1">
                            <div className="user-text-1">
                                <h1>Gustavo L. Souza</h1>
                            </div>
                        </div>
                        <div className="input-user-2">
                            <div className="user-text-2">
                                <h1>Lucas L. Souza</h1>
                            </div>
                        </div>
                        <div className="input-user-3">
                            <div className="user-text-3">
                                <h1>Josivani L. Moura</h1>
                            </div>
                        </div>
                        <div className="input-user-4">
                            <div className="user-text-4">
                                <h1>Thiago M. Silva</h1>
                            </div>
                        </div>
                        <div className="input-user-5">
                            <div className="user-text-5">
                                <h1>Dhuane M. Silva</h1>
                            </div>
                        </div>
                    </div>

                    <div className="button-quanti-pag">
                        <div className="icon-left"> 
                            <button onClick={anteriorPagina} type="button"><CgArrowLeftO/></button>
                        </div>
                        <div className="icon-right"> 
                            <button onClick={proximaPagina} type="button"> <CgArrowRightO/></button>
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