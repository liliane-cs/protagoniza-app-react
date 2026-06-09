import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { apiProfissionais } from "../../services/api/Api"; 
import { Container, Title, ApoioList, ApoioCard, ButtonDetails } from "./style";

export default function RedeDeApoio() {
  const [apoios, setApoios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);
  const [expandidos, setExpandidos] = useState([]);

  useEffect(() => {
    async function buscarApoio() {
      try {
        setLoading(true);
       
        const response = await apiProfissionais.get("/apoio");
        setApoios(response.data);
      } catch (error) {
        console.error("Detalhes do erro:", error);
        setErro(true);
        toast.error("Erro ao carregar a rede de apoio. Tente novamente!");
      } finally {
        setLoading(false);
      }
    }

    buscarApoio();
  }, []);

  const toggleDetalhes = (id) => {
    if (expandidos.includes(id)) {
      setExpandidos(expandidos.filter((item) => item !== id));
    } else {
      setExpandidos([...expandidos, id]);
    }
  };

  if (loading) {
    return (
      <Container>
        <Title>Carregando rede de apoio...</Title>
      </Container>
    );
  }

  if (erro) {
    return (
      <Container>
        <Title>Ocorreu um erro ao buscar os dados.</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Rede de Apoio</Title>
      <ApoioList>
        {apoios.map((item) => (
          <ApoioCard key={item.id}>
            <h3>{item.nome}</h3>
            <p><strong>Tipo:</strong> {item.tipo}</p>

            {expandidos.includes(item.id) && (
              <div>
                <p><strong>Descrição:</strong> {item.descricao}</p>
                <p><strong>Contato:</strong> {item.contato}</p>
                {item.link && (
                  <p>
                    <strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">Acessar</a>
                  </p>
                )}
              </div>
            )}

            <ButtonDetails onClick={() => toggleDetalhes(item.id)}>
              {expandidos.includes(item.id) ? "Esconder Detalhes" : "Mostrar Detalhes"}
            </ButtonDetails>
          </ApoioCard>
        ))}
      </ApoioList>
    </Container>
  );
}