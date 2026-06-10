import { apiProfissionais, apiLivros } from "./api/Api";

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

// API DE LIVROS DA HOME
export const getLivro = async (titulo) => {
  try {
    const resposta = await apiLivros.get(
      `/search.json?q=${encodeURIComponent(titulo)}&limit=1`,
    );
    return resposta.data.docs[0];
  } catch (error) {
    throw new Error("Erro ao buscar livro");
  }
};
