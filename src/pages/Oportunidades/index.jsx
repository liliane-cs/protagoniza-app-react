import React, { useState, useEffect } from "react";
import { getOportunidades } from "../../services/protagonizaService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import { useContext } from "react";
import { FavoritosContext } from "../../context/FavoritosContext"

export default function Oportunidades() {
  const [oportunidades, setOportunidades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [busca, setBusca] = useState("");
  const{adicionarFavorito,estaFavoritado} = 
  useContext(FavoritosContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getOportunidades();
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
    item.titulo?.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) return <Loading />;
  if (error)
    return (
      <div style={{ color: "red", textAlign: "center", padding: "50px" }}>
        {error}
      </div>
    );

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px", color: "var(--texto)" }}>
        Oportunidades
      </h1>

      <input
        type="text"
        placeholder="Buscar oportunidade..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          minWidth: "250px",
          marginBottom: "30px",
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {oportunidadesFiltradas.length > 0 ? (
          oportunidadesFiltradas.map((item) => (
            <Link
              key={item.id}
              to={`/oportunidade/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                titulo={item.titulo}
                descricao={item.descricao}
                imagem={item.imagem}
                favoritado={estaFavoritado(item.id, "oportunidade")}
                aoFavoritar={(e) => {
                 e.preventDefault();
                  e.stopPropagation();
                  adicionarFavorito({ ...item, tipo: "oportunidade" });
               }}
              />
            </Link>
          ))
        ) : (
          <p style={{ color: "#666", marginTop: "20px" }}>
            Nenhuma oportunidade encontrada.
          </p>
        )}
      </div>
    </div>
  );
}
