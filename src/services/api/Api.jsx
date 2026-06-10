import axios from "axios";

// Profissionais e Apoio
export const apiProfissionais = axios.create({
  baseURL: "https://6a270383a84f9d39e908301e.mockapi.io/api/v1",
});

// Oportunidades e Cursos
export const apiCursos = axios.create({
  baseURL: "https://6a2450f1420469ff067afb7c.mockapi.io/api/v1"
});