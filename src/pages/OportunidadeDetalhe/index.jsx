import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOportunidades } from "../../services/protagonizaService";
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
        const resposta = await getOportunidades();
        const encontrada = resposta.data.find(
          (item) => String(item.id) === String(id)
        );
        setOportunidade(encontrada);
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
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        color: "var(--texto)",
        lineHeight: "1.6",
      }}
    >
      <button
        onClick={() => navigate("/oportunidades")}
        style={{
          backgroundColor: "var(--primaria)",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 16px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        ← Voltar para oportunidades
      </button>

      <h1 style={{ marginBottom: "20px", color: "var(--primaria)" }}>
        {oportunidade.titulo}
      </h1>

      <div style={{ marginBottom: "15px" }}>
        <p><strong>Área:</strong> {oportunidade.area}</p>
        <p><strong>Empresa:</strong> {oportunidade.empresa}</p>
        <p><strong>Tipo:</strong> {oportunidade.tipo}</p>
        <p><strong>Local:</strong> {oportunidade.local}</p>
      </div>

      <p style={{ marginBottom: "20px" }}>{oportunidade.descricao}</p>

      <img
        src={oportunidade.imagem}
        alt={oportunidade.titulo}
        style={{
          maxWidth: "100%",
          borderRadius: "8px",
          marginTop: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
}


