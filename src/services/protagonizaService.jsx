import { apiProfissionais, apiFrases } from "./api/Api";

export const getProfissionais = async () => {
  const resposta = await apiProfissionais.get("/profissionais");
  return resposta;
};

export const cadastrarProfissional = async (data) => {
  const resposta = await apiProfissionais.post("/profissionais", data);
  return resposta;
};

export const editarProfissional = async (id, data) => {
  const resposta = await apiProfissionais.put(`/profissionais/${id}`, data);
  return resposta;
};

export const deletarProfissional = async (id) => {
  const resposta = await apiProfissionais.delete(`/profissionais/${id}`);
  return resposta;
};

export const getFrases = async () => {
  const resposta = await apiFrases.get("/frase/obter");
  return resposta;
};

export const criarFrase = async (data) => {
  const resposta = await apiFrases.post("/frase/criar", data);
  return resposta;
};

export const getApoio = async () => {
  const resposta = await apiProfissionais.get("/apoio");
  return resposta;
};