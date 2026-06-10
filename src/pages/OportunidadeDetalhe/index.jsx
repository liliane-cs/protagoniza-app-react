import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiCursos } from "../../services/api/Api";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function OportunidadeDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [oportunidade, setOportunidade] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function buscarOportunidade() {
      try {
        const resposta = await apiCursos.get("/oportunidades");

        const oportunidadeEncontrada = resposta.data.find(
          (item) => String(item.id) === String(id)
        );

        setOportunidade(oportunidadeEncontrada);
      } catch (error) {
        console.error("Erro ao buscar oportunidade:", error);
        setErro(true);
      } finally {
        setLoading(false);
      }
    }

    buscarOportunidade();
  }, [id]);

  if (loading) return <Loading />;
  if (erro) return <ErrorMessage />;
  if (!oportunidade)
    return <ErrorMessage mensagem="Oportunidade não encontrada" />;

  return (
    <>
      <button onClick={() => navigate("/oportunidades")}>
        ← Voltar para oportunidades
      </button>

       <h1>{oportunidade.titulo}</h1>
      <p><strong>Área:</strong> {oportunidade.area}</p>
      <p><strong>Empresa:</strong> {oportunidade.empresa}</p>
      <p><strong>Tipo:</strong> {oportunidade.tipo}</p>
      <p><strong>Local:</strong> {oportunidade.local}</p>
      <p>{oportunidade.descricao}</p>
      <img
        src={oportunidade.imagem}
        alt={oportunidade.titulo}
        style={{ maxWidth: "400px", borderRadius: "8px", marginTop: "20px" }}
      />
    </>
  );
}
