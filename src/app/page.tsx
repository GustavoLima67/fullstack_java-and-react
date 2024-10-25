"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";

import axios from "axios";

import "./style.css";
import { Usuarios } from "./interfaces/usuarios";
export default function Home() {
  const router = useRouter();
  
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  

  useEffect(() => {
    axios.get<Usuarios[]>("http://localhost:8080/java_developer-GL67/api/usuarios")
          .then(response => setUsuarios(response.data))
          .catch(error => console.error("Erro ao pegar usuarios", error));
  });

  

  const clickUser = () => router.push("/examples/usuarios");
  const clickModer = () => router.push("/examples/moderadores");

  return (
    <div className="body">

      <div className="container-inform">
        <h1 className="welcome">BEM VINDO!</h1>

        <div className="project-area">
          <h1 className="project">PROJETO CADASTRO</h1>
          <button className="buttonMore">SAIBA MAIS</button>
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
                  <button className="button-view-more">VER MAIS</button>
                </div>
              </div>
            </div>
          </div>

          <div className="admins-and-cdt">
            <div className="card-admins">
              <div className="admin-model">
                <div className="admin-1">
                  <h1>Alex M. Santos</h1>
                </div>
                <div className="admin-2">
                  <h1>Henrrique Silva</h1>
                </div>
              </div>
            </div>

            <div className="cadastre-user-adm">
              <div className="cadastre-what-is">
                <h1>VOCÊ É USUARIO OU UM MODEREADOR?</h1>
              </div>
              <div className="cdt-user_our_adm">
                <div className="cdt-user">
                  <button onClick={clickUser} className="button-user">USUÁRIO</button>
                </div>
                <div className="cdt-adm">
                  <button onClick={clickModer} className="button-adm">MODERADOR</button>
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
