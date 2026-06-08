import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { apiProfissionais } from "../../services/api/Api";

export default function ProfissionalDetalhe() {
  const { id } = useParams();
  const [profissional, setProfissional] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function buscarProfissional() {
      const resposta = await apiProfissionais.get("/profissionais");
      const profissionalEncontrada = resposta.data.find(
        (prof) => String(prof.id) === String(id)
      );
      setProfissional(profissionalEncontrada);
 
    }
    buscarProfissional();
  }, [id]);

 if (!profissional) {
  return <h1>Carregando...</h1>;
}

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