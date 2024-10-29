"use client"


import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { Administradores, Usuarios } from "@/app/interfaces/cadastro";


const router = useRouter();

const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
const [administradores, setAdministradores] = useState<Administradores[]>([]);

export const pegandoUsers = () => {
    useEffect(() => {
    axios.get<Usuarios[]>("http://localhost:8080/java_developer-GL67/api/usuarios")
          .then(response => setUsuarios(response.data))
          .catch(error => console.error("Erro ao pegar usuarios", error));
  });
}