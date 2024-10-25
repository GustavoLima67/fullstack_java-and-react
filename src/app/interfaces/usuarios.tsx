export interface Usuarios {
    id: number,
    nome: string,
    senha: string,
    telefone: string,
    data_nascimento: Date
  };
  
  export interface paginaResponsiva {
    content: Usuarios[]; 
    totalPaginas: number;  
  }