import React, { useState, useEffect } from "react";
import { apiCursos } from "../../services/api/Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Card from "../../components/Card"; 
import { Container, SearchInput } from "./style";

export default function Oportunidades() {
  const [oportunidades, setOportunidades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiCursos.get("/oportunidades");
        setOportunidades(response.data);
      } catch (err) {
        setError("Erro ao carregar oportunidades");
        toast.error("Erro ao carregar oportunidades");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const oportunidadesFiltradas = oportunidades.filter((item) =>
    item.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) return <p>Carregando oportunidades...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h1>Oportunidades</h1>
      <SearchInput
        type="text"
        placeholder="Buscar oportunidade..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {oportunidadesFiltradas.map((item) => (
        <Link key={item.id} to={`/oportunidade/${item.id}`}>
          <Card
            titulo={item.titulo}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        </Link>
      ))}
    </Container>
  );
}
