import axios from "axios";

// Profissionais e Apoio
export const apiProfissionais = axios.create({
  baseURL: "https://6a263a125447714a6f83f18c.mockapi.io/api/v1",
});

// Oportunidades e Cursos
export const apiCursos = axios.create({
  baseURL: "https://6a260b975447714a6f83d147.mockapi.io/api/v1",
});