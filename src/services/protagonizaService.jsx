import axios from "axios";


const baseUrlProfissionais = import.meta.env.VITE_API_PROFISSIONAIS || "https://6a2455f8420469ff067afedb.mockapi.io/api/v1";
const baseUrlCursos = import.meta.env.VITE_API_CURSOS || "https://6a2450f1420469ff067afb7c.mockapi.io/api/v1";
const baseUrlLivros = import.meta.env.VITE_API_LIVROS || "https://openlibrary.org"; // Fallback para a API de livros se necessário

export const apiProfissionais = axios.create({
  baseURL: `${baseUrlProfissionais}`,
});

export const apiCursos = axios.create({
  baseURL: `${baseUrlCursos}`,
});

export const apiLivros = axios.create({
  baseURL: `${baseUrlLivros}`,
});

export const apiFrases = axios.create({
  baseURL: "https://6a2455f8420469ff067afedb.mockapi.io/api/v1", 
});

// LISTAR PROFISSIONAIS
export const getProfissionais = async (config = {}) => {
  return await apiProfissionais.get("/profissionais", config);
};

// CADASTRAR PROFISSIONAL
export const cadastrarProfissional = async (novoProfissional) => {
  return await apiProfissionais.post("/profissionais", novoProfissional);
};

// EDITAR PROFISSIONAL
export const editarProfissional = async (id, dadosAtualizados) => {
  return await apiProfissionais.put(`/profissionais/${id}`, dadosAtualizados);
};

// EXCLUIR PROFISSIONAL
export const deletarProfissional = async (id) => {
  return await apiProfissionais.delete(`/profissionais/${id}`);
};

// API DE LIVROS DA HOME
export const getLivro = async (titulo) => {
  try {
    const resposta = await apiLivros.get(
      `/search.json?q=${encodeURIComponent(titulo)}&limit=1`
    );
    return resposta.data.docs[0];
  } catch (error) {
    console.error("Erro real no Axios ao buscar livro:", error);
    throw error;
  }
};

// API DE FRASES DA HOME
export const getFrases = async () => {
  return await apiFrases.get("/frase/obter");
};

export const criarFrase = async (data) => {
  return await apiFrases.post("/frase/criar", data);
};

// API DE REDE DE APOIO
// Perfeito! Ele busca do endpoint correto usando a rota de profissionais
export const getApoio = async () => {
  return await apiProfissionais.get("/apoio");
};

// LISTAR TODAS AS OPORTUNIDADES
export const getOportunidades = async (config = {}) => {
  try {
    const response = await apiCursos.get("/oportunidades", config);
    return response;
  } catch (error) {
    throw error;
  }
};