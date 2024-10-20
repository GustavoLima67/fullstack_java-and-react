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

      <div className="container-main">
        <div className="bar-welcome">
          <h1 className="welcome">BEM VINDO</h1>
          <h1 className="project">PROJETO CADASTRO</h1>
          <button className="buttonMore"> SAIBA MAIS</button>
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
