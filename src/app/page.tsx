"use client"

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";

import axios from "axios";

import "./style.css";
import { Usuarios, Administradores } from "./interfaces/cadastro";
import { fetchModeradores, fetchUsuarios } from "./TS/apiService";
export default function Home() {
  const router = useRouter();
  
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  const [Administradores, setAdministradores] = useState<Administradores[]>([]);

  const [usuariosPorPaginas] = useState(3);
  const [paginaAtual, setPaginaAtual] = useState(1);

  const indexUltimoUsuario = paginaAtual * usuariosPorPaginas;
  const indexPrimeiroUsuario = indexUltimoUsuario - usuariosPorPaginas;
  const indexUsuariosExibidos = usuarios.slice(indexPrimeiroUsuario, indexUltimoUsuario);

  const buttonViewMore = () => {  //Função para ir para a proxima pagina
    if(paginaAtual < Math.ceil(usuarios.length / usuariosPorPaginas )) setPaginaAtual(paginaAtual + 1);
};


  const carregarUsuarios = useCallback(async () => {
    try {
    const data = await fetchUsuarios();
    setUsuarios(data);
    } catch (error) {
    console.error("Erro ao carregar usuários:", error);
    }
  }, []);

  
  const carregarModeradores = useCallback(async () => {
    try {
    const data = await fetchModeradores();
    setAdministradores(data);
    } catch (error) {
    console.error("Erro ao carregar moderadores:", error);
    }
}, []);

  useEffect(() => { carregarUsuarios() }, [carregarUsuarios]);
  useEffect(() => { carregarModeradores() }, [carregarModeradores]);
  

  const clickUser = () => router.push("/examples/usuarios");
  const clickModer = () => router.push("/examples/moderadores");

  return (
    <div className="body">

      <div className="container-inform">
        <h1 className="welcome">BEM VINDO!</h1>

        <div className="project-area">
          <h1 className="project">PROJETO CADASTRO</h1>
          <button type="button" className="buttonMore">SAIBA MAIS</button>
        </div>
      </div>

      <div className="container-view">
        <div className="cards-view">
          <div className="title-users">
            <div className="card-text-users">
              <h1>USUARIOS CADASTRADOS</h1>
              
            </div>
          </div>
          <div className="list-admins">
            <h1>MODERADORES PRESENTES</h1>
          </div>
        </div>

        <div className="container-monitor">
          <div className="user-view">
            <div className="card-users">
              <div className="users-model">
                <ul className="list-users">
                {usuarios.map((usuario, index) => (
                  <div className={`user-${index + 1}`} key={usuario.id}>
                    <div className="icon-profile"><CgProfile/></div>
                    <li><h1>{usuario.nome}</h1></li>
                  </div>))}
                </ul>
                <div className="more">
                  <button className="button-view-more" type="button" disabled={paginaAtual === Math.ceil(usuarios.length / usuariosPorPaginas)} onClick={buttonViewMore}>VER MAIS</button>
                </div>
              </div>
            </div>
          </div>

          <div className="admins-and-cdt">
            <div className="card-admins">
              <div className="admin-model">
                <ul className="list-moders">
                  <div className="all-moders">
                      {Administradores.map((Administradores, index) => (
                      <div className={`input-moders-${index + 1}`} key={Administradores.id}>
                          <li><h1>{Administradores.nome}</h1></li>
                      </div>))}
                  </div>
                </ul>
              </div>
            </div>

            <div className="cadastre-user-adm">
              <div className="cadastre-what-is">
                <h1>VOCÊ É USUARIO OU UM MODEREADOR?</h1>
              </div>
              <div className="cdt-user_our_adm">
                <div className="cdt-user">
                  <button type="button" onClick={clickUser} className="button-user">USUÁRIO</button>
                </div>
                <div className="cdt-adm">
                  <button type="button" onClick={clickModer} className="button-adm">MODERADOR</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
}
function setAdministradores(data: import("./interfaces/cadastro").Administradores[]) {
  throw new Error("Function not implemented.");
}

