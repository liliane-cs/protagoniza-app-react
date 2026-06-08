import axios from "axios";

// Profissionais e Apoio
export const apiProfissionais = axios.create({
  baseURL: "https://6a25f90a5447714a6f83cbbc.mockapi.io/api/v1",
});

// Oportunidades e Cursos
export const apiCursos = axios.create({
  baseURL: "https://6a260b975447714a6f83d147.mockapi.io/api/v1",
});