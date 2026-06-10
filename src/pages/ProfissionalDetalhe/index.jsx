import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getProfissionais } from "../../services/protagonizaService";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Button from "../../components/Button";

export const ProfissionalDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [profissional, setProfissional] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  async function carregarProfissional() {
    const response = await getProfissionais();

    if (response.status !== 200) {
      setErro(true);
      setLoading(false);
      return;
    }

    const profissionalEncontrada = response.data.find(
      (prof) => String(prof.id) === String(id)
    );

    setProfissional(profissionalEncontrada);
    setLoading(false);
  }

  useEffect(() => {
    carregarProfissional();
  }, [id]);

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

      <img
        src={profissional.foto}
        alt={profissional.nome}
      />
    </>
  );
};