import axios from "axios";

const baseUrlProfissionais = import.meta.env.VITE_API_PROFISSIONAIS;
const baseUrlCursos = import.meta.env.VITE_API_CURSOS;
const baseUrlFrases = import.meta.env.VITE_API_FRASES;

export const apiProfissionais = axios.create({
  baseURL: `${baseUrlProfissionais}`,
});

export const apiCursos = axios.create({
  baseURL: `${baseUrlCursos}`,
});

export const apiFrases = axios.create({
  baseURL: `${baseUrlFrases}`,
});
