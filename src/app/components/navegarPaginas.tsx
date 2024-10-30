"use client"

import { useState} from "react";

import { Administradores, Usuarios } from "@/app/interfaces/cadastro";


export const [paginaAtual, setPaginaAtual] = useState(1);
export const [totalPagina, setTotalPagina] = useState(1);
export const [usuariosPorPaginas] = useState(5);

const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
const indexUltimoUsuario = paginaAtual * usuariosPorPaginas;
const indexPrimeiroUsuario = indexUltimoUsuario - usuariosPorPaginas;
const indexUsuariosExibidos = usuarios.slice(indexPrimeiroUsuario, indexUltimoUsuario);




