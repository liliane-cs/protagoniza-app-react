import { apiProfissionais, apiLivros } from "./api/Api";

// LISTAR

export const getProfissionais = async (config = {}) => {
    try {
        const response = await apiProfissionais.get("/profissionais", config);
        const dados = Array.isArray(response.data)
            ? response.data
            : (response.data.profissionais || []);
        return { dados, erro: null, cancelado: false };
    } catch (error) {
        if (error.name === 'CanceledError' || error.name === 'AbortError') {
            return { dados: [], erro: null, cancelado: true };
        }
        console.error('Erro ao buscar profissionais:', error);
        return { dados: [], erro: 'Ocorreu um erro ao carregar as profissionais.', cancelado: false };
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
