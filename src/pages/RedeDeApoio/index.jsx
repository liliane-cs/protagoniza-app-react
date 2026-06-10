import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { getApoio } from "../../services/protagonizaService";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import { Container, Title, ApoioList, ButtonDetails } from "./style";

export default function RedeDeApoio() {
  const [apoios, setApoios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);
  const [expandidos, setExpandidos] = useState([]);

  useEffect(() => {
    async function buscarApoio() {
      try {
        setLoading(true);
        const response = await getApoio();

        // Evita que um HTML de erro quebre a aplicação transformando-se em cards falsos
        if (typeof response.data === "string" && response.data.includes("<!doctype html>")) {
          throw new Error("A API retornou uma página HTML em vez de dados válidos.");
        }

        const dadosProcessados = Array.isArray(response.data) 
          ? response.data 
          : Object.values(response.data || {});

        setApoios(dadosProcessados);
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
    return <Loading />;
  }

  if (erro) {
    return (
      <Container>
        <Title>Ocorreu um erro ao buscar os dados.</Title>
      </Container>
    );
  }

  const listaSegura = Array.isArray(apoios) ? apoios : [];

  return (
    <Container>
      <Title>Rede de Apoio</Title>
      <ApoioList>
        {listaSegura.length === 0 ? (
          <p>Nenhum dado encontrado na rede de apoio.</p>
        ) : (
          listaSegura.map((item) => (
            <Card 
              key={item.id}
              titulo={item.nome || "Sem título"}
              descricao={
                <span style={{ display: "block" }}>
                  <span style={{ display: "block", marginBottom: "8px" }}>
                    <strong>Tipo:</strong> {item.tipo}
                  </span>
                  
                  {expandidos.includes(item.id) && (
                    <span style={{ display: "block", marginBottom: "10px" }}>
                      <span style={{ display: "block", marginBottom: "4px" }}><strong>Descrição:</strong> {item.descricao}</span>
                      <span style={{ display: "block", marginBottom: "4px" }}><strong>Contato:</strong> {item.contato}</span>
                      {item.link && (
                        <span style={{ display: "block" }}>
                          <strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">Acessar</a>
                        </span>
                      )}
                    </span>
                  )}

                  <ButtonDetails onClick={() => toggleDetalhes(item.id)}>
                    {expandidos.includes(item.id) ? "Esconder Detalhes" : "Mostrar Detalhes"}
                  </ButtonDetails>
                </span>
              }
            />
          ))
        )}
      </ApoioList>
    </Container>
  );
}