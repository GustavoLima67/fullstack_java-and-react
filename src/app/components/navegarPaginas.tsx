"use client"

import { useState, useEffect } from "react";

import { Administradores, Usuarios } from "@/app/interfaces/cadastro";

import { useRouter } from "next/navigation";


export const [paginaAtual, setPaginaAtual] = useState(1);
export const [totalPagina, setTotalPagina] = useState(1);
export const [usuariosPorPaginas] = useState(5);

const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
const [administradores, setAdministradores] = useState<Administradores[]>([]);
const router = useRouter();
const indexUltimoUsuario = paginaAtual * usuariosPorPaginas;
const indexPrimeiroUsuario = indexUltimoUsuario - usuariosPorPaginas;
const indexUsuariosExibidos = usuarios.slice(indexPrimeiroUsuario, indexUltimoUsuario);

export const proximaPagina = () => {
    if(paginaAtual < Math.ceil(usuarios.length / usuariosPorPaginas )) setPaginaAtual(paginaAtual + 1);
};

export const anteriorPagina = () => { 
    if(paginaAtual > 1) setPaginaAtual(paginaAtual - 1)
};

export const clickBack = () => router.back();