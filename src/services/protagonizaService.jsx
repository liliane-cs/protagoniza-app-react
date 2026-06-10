import axios from "axios";


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