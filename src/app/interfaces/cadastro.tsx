export interface Usuarios {
    id: number,
    nome: string,
    senha: string,
    email: string,
    data_nascimento: any
  }
  
  export interface paginaResponsiva {
    content: Usuarios[]; 
    totalPaginas: number;  
  }

  export interface Administradores {
    id: number,
    nome: string,
    data_nascimento: any
  }