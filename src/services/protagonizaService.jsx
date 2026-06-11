import axios from "axios";
import { apiCursos, apiLivros, apiProfissionais } from "./api/Api";

export const listarProfissionais = async (config = {}) => {
  try {
    const response = await apiProfissionais.get("/profissionais", config);
    const dados = Array.isArray(response.data)
      ? response.data
      : response.data.profissionais || [];
    return { dados, erro: null, cancelado: false };
  } catch (error) {
    if (error.name === "CanceledError" || error.name === "AbortError") {
      return { dados: [], erro: null, cancelado: true };
    }
    console.error("Erro ao buscar profissionais:", error);
    return {
      dados: [],
      erro: "Ocorreu um erro ao carregar as profissionais.",
      cancelado: false,
    };
  }
};

// BUSCAR PROFISSIONAIS
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
      `/search.json?q=${encodeURIComponent(titulo)}&limit=1`,
    );
    return resposta.data.docs[0];
  } catch (error) {
    console.error("Erro real no Axios ao buscar livro:", error);
    throw error;
  }
};

// API DE REDE DE APOIO
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
