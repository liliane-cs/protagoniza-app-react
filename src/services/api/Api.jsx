import axios from "axios";

// Profissionais e Apoio
export const apiProfissionais = axios.create({
  baseURL: "https://6a270383a84f9d39e908301e.mockapi.io/api/v1",
});

// Oportunidades e Cursos
export const apiCursos = axios.create({
  baseURL: "https://6a260b975447714a6f83d147.mockapi.io/api/v1",
});