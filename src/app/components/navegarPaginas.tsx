"use client"

import { useState, useEffect } from "react";

import { Administradores, Usuarios } from "@/app/interfaces/cadastro";

const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
const [administradores, setAdministradores] = useState<Administradores[]>([]);


const [paginaAtual, setPaginaAtual] = useState(1);
const [totalPagina, setTotalPagina] = useState(1);
const [usuariosPorPaginas] = useState(5);

export const proximaPagina = () => {  //Função para ir para a proxima pagina
    if(paginaAtual < Math.ceil(usuarios.length / usuariosPorPaginas )) setPaginaAtual(paginaAtual + 1);
};

export const anteriorPagina = () => { //Função para ir para pagina anterior
    if(paginaAtual > 1) setPaginaAtual(paginaAtual - 1)
};
