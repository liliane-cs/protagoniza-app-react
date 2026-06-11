import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { listarProfissionais } from "../../services/protagonizaService";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Button from "../../components/Button";

export const ProfissionalDetalhe = () => {
  const { id } = useParams();
  const idTratado = Number(id);

  const navigate = useNavigate();

  const [profissional, setProfissional] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarProfissional() {
      const { dados, erro, cancelado } = await listarProfissionais();
      
      if (cancelado || erro) {
        setErro(true);
        setLoading(false);
        return;
      }

    const profissionalEncontrado = dados.find(
  (prof) => Number(prof.id) === idTratado
);

      if (!profissionalEncontrado) {
        setErro(true);
        setLoading(false);
        return;
      }

      setProfissional(profissionalEncontrado);
      setLoading(false);
    }

    carregarProfissional();
  }, [idTratado]);

  if (loading) {
    return <Loading />;
  }

  if (erro) {
    return <ErrorMessage />;
  }

  if (!profissional) {
    return <ErrorMessage mensagem="Profissional não encontrada" />;
  }

  return (
    <>
      <Button onClick={() => navigate("/profissionais")}>
        ← Voltar para profissionais
      </Button>

      <h1>{profissional.nome}</h1>
      <p>{profissional.area}</p>
      <p>{profissional.cidade}</p>
      <p>{profissional.descricao}</p>
      <p>{profissional.contato}</p>
      <img src={profissional.foto} alt={profissional.nome} />
    </>
  );
};