import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfissionais } from "../../services/protagonizaService";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { Header } from "../../components/Header";

export default function ProfissionalDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [profissional, setProfissional] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function buscarProfissional() {
      try {
        const resposta = await getProfissionais();

        const profissionalEncontrada = resposta.data.find(
          (prof) => String(prof.id) === String(id)
        );

        setProfissional(profissionalEncontrada);
      } catch (error) {
        setErro(true);
      } finally {
        setLoading(false);
      }
    }

    buscarProfissional();
  }, [id]);

  if (loading) return <Loading />;
  if (erro) return <ErrorMessage />;
  if (!profissional) return <ErrorMessage mensagem="Profissional não encontrada" />;

  return (
    <>
      <button onClick={() => navigate("/profissionais")}>
        ← Voltar para profissionais
      </button>

      <h1>{profissional.nome}</h1>
      <p>{profissional.area}</p>
      <p>{profissional.cidade}</p>
      <p>{profissional.descricao}</p>
      <p>{profissional.contato}</p>
      <img src={profissional.foto} alt={profissional.nome} />
    </>
  );
}