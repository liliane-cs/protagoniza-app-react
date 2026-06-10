import { apiProfissionais, apiLivros } from "./api/Api";

// LISTAR

export const getProfissionais = async (config = {}) => {
  try {
    const response = await apiProfissionais.get("/profissionais", config);

    return response;
  } catch (error) {
    throw error;
  }
};

// CADASTRAR

export const cadastrarProfissional = async (novoProfissional) => {
  try {
    const response = await apiProfissionais.post(
      "/profissionais",
      novoProfissional,
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// EDITAR

export const editarProfissional = async (id, dadosAtualizados) => {
  try {
    const response = await apiProfissionais.put(
      `/profissionais/${id}`,
      dadosAtualizados,
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// EXCLUIR

export const deletarProfissional = async (id) => {
  try {
    const response = await apiProfissionais.delete(`/profissionais/${id}`);

    return response;
  } catch (error) {
    throw error;
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
