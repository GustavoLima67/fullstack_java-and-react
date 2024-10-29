"use client"

import { useState } from "react";

import { Usuarios } from "@/app/interfaces/cadastro";

const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

export const [nome, setNome] = useState("");
export const [senha, setSenha] = useState("");
export const [email, setEmail] = useState("");
export const [data_nascimento, setDataNascimento] = useState(Date);

export const limparCampos = () => {
    setNome("");
    setSenha("");
    setEmail("");
    setDataNascimento("");
  };

export const cadastrarUsuario = async () => { // Função para cadastrar um novo usuário
    try {
        const novoUsuario = { nome, senha, email, data_nascimento };
        await axios.post("http://localhost:8080/java_developer-GL67/cadastrar", novoUsuario);
        setNome("");
        setSenha("");
        setEmail("");
        setDataNascimento("");

        limparCampos();
        const response = await axios.get<Usuarios[]>("http://localhost:8080/java_developer-GL67/api/usuarios"); // Recarrega a lista de usuários
        setUsuarios(response.data);
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
    }
};