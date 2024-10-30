"use client"

import { useEffect, useState } from "react";
import { Usuarios } from "@/app/interfaces/cadastro";

const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

export const pegandoUsers = () => {
    useEffect(() => {
    axios.get<Usuarios[]>("http://localhost:8080/java_developer-GL67/api/usuarios")
          .then(response => setUsuarios(response.data))
          .catch(error => console.error("Erro ao pegar usuarios", error));
  });
}