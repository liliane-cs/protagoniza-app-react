import axios from "axios";
const baseUrlProfissionais = import.meta.env.VITE_API_PROFISSIONAIS;
const baseUrlCursos = import.meta.env.VITE_API_CURSOS;
const baseUrlLivros = import.meta.env.VITE_API_LIVROS;

export const apiProfissionais = axios.create({
  baseURL: `${baseUrlProfissionais}`,
});

export const apiCursos = axios.create({
  baseURL: `${baseUrlCursos}`,
});

export const apiLivros = axios.create({
  baseURL: `${baseUrlLivros}`,
});
