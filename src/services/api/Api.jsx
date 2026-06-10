import axios from "axios";

const baseUrlProfissionais =
  import.meta.env.VITE_API_PROFISSIONAIS ||
  "https://6a2455f8420469ff067afedb.mockapi.io/api/v1";
const baseUrlCursos =
  import.meta.env.VITE_API_CURSOS ||
  "https://6a2450f1420469ff067afb7c.mockapi.io/api/v1";
const baseUrlLivros = import.meta.env.VITE_API_LIVROS;

export const apiProfissionais = axios.create({
  baseURL: baseUrlProfissionais,
});

export const apiCursos = axios.create({
  baseURL: baseUrlCursos,
});

export const apiLivros = axios.create({
  baseURL: baseUrlLivros,
});
