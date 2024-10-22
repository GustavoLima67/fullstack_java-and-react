"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { error } from "console";
import "./styles/style.css";

interface Usuarios {
  id: number;
  nome: string;
  senha: string;
  telefone: string;
  data_nascimento: Date;
}

export default function Home() {
  
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

  useEffect(() => {
    axios.get<Usuarios[]>("http://localhost:8080/java_developer-GL67/api/usuarios")
          .then(response => setUsuarios(response.data))
          .catch(error => console.error("Erro ao pegar usuarios", error));
  });

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
          <div className="list-users">
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
                <div className="user-1">
                  <h1>Gustavo L. Souza</h1>
                </div>
                <div className="user-2">
                  <h1>Lucas L. Souza</h1>
                </div>
                <div className="user-3">
                  <h1>Josivani L. Moura</h1>
                </div>
                <div className="user-4">
                  <h1>Thiago M. Silva</h1>
                </div>
                <div className="user-5">
                  <h1>Dhuane M. Silva</h1>
                </div>
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
                  <button className="button-user">USUÁRIO</button>
                </div>
                <div className="cdt-adm">
                  <button className="button-adm">MODERADOR</button>
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
