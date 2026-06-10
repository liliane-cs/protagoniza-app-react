import axios from "axios";

export const apiApoio = axios.create({
  baseURL: "https://6a2455f8420469ff067afedb.mockapi.io/api/v1",
});

export const apiCursos = axios.create({
  baseURL: "https://6a2450f1420469ff067afb7c.mockapi.io/api/v1",
});

export const apiProfissionais = axios.create({
  baseURL: "https://6a2455f8420469ff067afedb.mockapi.io/api/v1",
});

export const apiFrases = axios.create({
  baseURL: "https://6a2455f8420469ff067afedb.mockapi.io/api/v1", 
});