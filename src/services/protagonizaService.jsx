import { apiProfissionais, apiFrases } from "./api/Api";

// PROFISSIONAIS E CRUD FEITO EM CADASTRO
export const getProfissionais = async () => {
  try {
    const resposta = await apiProfissionais.get("/profissionais");
    return resposta;
  } catch (error) {
    throw new Error(error);
  }
};

export const cadastrarProfissional = async (data) => {
  try {
    const resposta = await apiProfissionais.post("/profissionais", data);
    return resposta;
  } catch (error) {
    throw new Error(error);
  }
};

export const editarProfissional = async (id, data) => {
  try {
    const resposta = await apiProfissionais.put(`/profissionais/${id}`, data);
    return resposta;
  } catch (error) {
    throw new Error(error);
  }
};

export const deletarProfissional = async (id) => {
  try {
    const resposta = await apiProfissionais.delete(`/profissionais/${id}`);
    return resposta;
  } catch (error) {
    throw new Error(error);
  }
};

// API DE FRASES DA HOME
export const getFrases = async () => {
  try {
    const resposta = await apiFrases.get("/frase/obter");
    return resposta;
  } catch (error) {
    throw new Error(error);
  }
};

export const criarFrase = async (data) => {
  try {
    const resposta = await apiFrases.post("/frase/criar", data);
    return resposta;
  } catch (error) {
    throw new Error(error);
  }
};

