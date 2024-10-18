"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { error } from "console";

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
    <div>

      <div className="bg-blue-300 h-3/6 w-3/6">

      </div>
      
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
}
