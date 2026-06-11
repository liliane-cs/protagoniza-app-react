import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as S from "./style";
import { listarProfissionais } from "../../services/protagonizaService";
import { MdWork, MdLocationOn, MdDescription, MdEmail } from "react-icons/md";

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
  <S.Container>
    <Button onClick={() => navigate("/profissionais")}>
      ← Voltar para profissionais
    </Button>

    <img src={profissional.foto} alt={profissional.nome} />

    <S.CardInfo>
      <h1>{profissional.nome}</h1>
      <p><MdWork /><span>Área</span>{profissional.area}</p>
      <p><MdLocationOn /><span>Cidade</span>{profissional.cidade}</p>
      <p><MdDescription /><span>Descrição</span>{profissional.descricao}</p>
      <p><MdEmail /><span>Contato</span>{profissional.contato}</p>
    </S.CardInfo>
  </S.Container>
);
};