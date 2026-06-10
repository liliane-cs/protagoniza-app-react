import { apiProfissionais } from "./api/Api";

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
