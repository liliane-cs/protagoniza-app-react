import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiCursos } from "../../services/api/Api";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Card from "../../components/Card";
import { Container, Voltar } from "./style";

export default function OportunidadeDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [oportunidade, setOportunidade] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function buscarOportunidade() {
      try {
        const resposta = await apiCursos.get(`/oportunidades/${id}`);
        setOportunidade(resposta.data);
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
  if (erro) return <ErrorMessage mensagem="Não foi possível carregar a oportunidade." />;
  if (!oportunidade) return <ErrorMessage mensagem="Oportunidade não encontrada." />;

  return (
    <Container>
      <Voltar onClick={() => navigate("/oportunidades")}>← Voltar</Voltar>

      <Card
        titulo={oportunidade.titulo}
        descricao={oportunidade.descricao}
        imagem={oportunidade.imagem}
      />

      <p>{oportunidade.area}</p>
      <p>{oportunidade.empresa}</p>
      <p>{oportunidade.tipo}</p>
      <p>{oportunidade.local}</p>
    </Container>
  );
}
