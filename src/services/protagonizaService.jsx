import { apiProfissionais, apiFrases } from "./api/Api";

// PROFISSIONAIS (CRUD)

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
    const resposta = await apiProfissionais.put(
      `/profissionais/${String(id)}`,
      data,
    );
    return resposta;
  } catch (error) {
    return { status: 500 };
  }
};

export const deletarProfissional = async (id) => {
  try {
    const resposta = await apiProfissionais.delete(
      `/profissionais/${String(id)}`,
    );
    return resposta;
  } catch (error) {
    return { status: 500 };
  }
};

