import axios from "axios";
import { Administradores, Usuarios } from "@/app/interfaces/cadastro";

const API_URL = "http://localhost:8080/java_developer-GL67";

export const fetchUsuarios = async (): Promise<Usuarios[]> => {
  const response = await axios.get<Usuarios[]>(`${API_URL}/api/usuarios`);
  return response.data;
};

export const cadastrarUsuario = async (usuario: Usuarios): Promise<void> => {
  await axios.post(`${API_URL}/cadastrar/usuarios`, usuario);
};

export const fetchModeradores = async (): Promise<Administradores[]> => {
    const response = await axios.get<Administradores[]>(`${API_URL}/api/moderadores`);
    return response.data;
  };

  export const cadastrarModerador = async (Administradores: Administradores): Promise<void> => {
    await axios.post(`${API_URL}/cadastrar/moderador`, Administradores);
  };