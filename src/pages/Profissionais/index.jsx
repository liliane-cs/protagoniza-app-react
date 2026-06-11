import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/index.jsx";
import { useContext } from "react";
import { FavoritosContext } from "../../context/FavoritosContext.jsx";
import { listarProfissionais } from "../../services/protagonizaService.jsx";
import Loading from "../../components/Loading/index.jsx";
import {
  ListaProfissionais,
  Titulo,
  Filtro,
  Cabecalho,
  MensagemVazia,
} from "./style.jsx";

export default function Profissionais() {
  const [profissionais, setProfissionais] = useState([]);
  const [areaFiltro, setAreaFiltro] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [redirecionando, setRedirecionando] = useState(false);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();
  const { adicionarFavorito, estaFavoritado } = useContext(FavoritosContext);

  useEffect(() => {
    const controller = new AbortController();

    const puxarDados = async () => {
      setLoading(true);
      setErro(null);

      const { dados, erro, cancelado } = await listarProfissionais({
        signal: controller.signal,
      });

      if (cancelado) return;

      if (erro) setErro(erro);
      else setProfissionais(dados);

      setTimeout(() => setLoading(false), 1500);
    };

    puxarDados();
    return () => controller.abort();
  }, []);

  const handleCardClick = (id) => {
    setRedirecionando(true);
    setTimeout(() => {
      navigate(`/profissionais/${id}`);
    }, 1500);
  };

  const areasDisponiveis = [
    "Todas",
    ...new Set(profissionais.map((p) => p?.area).filter(Boolean)),
  ];

  const profissionaisFiltradas = profissionais.filter((prof) => {
    if (!prof || !prof.area) return false;
    if (areaFiltro === "Todas") return true;
    return prof.area.toLowerCase() === areaFiltro.toLowerCase();
  });

  if (loading || redirecionando) return <Loading />;
  if (erro)
    return (
      <div style={{ color: "red", textAlign: "center", padding: "50px" }}>
        {erro}
      </div>
    );

  return (
    <>
      <Cabecalho>
        <Titulo>Filtrar por Especialidade:</Titulo>
        <Filtro
          value={areaFiltro}
          onChange={(e) => setAreaFiltro(e.target.value)}
        >
          {areasDisponiveis.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </Filtro>
      </Cabecalho>

      <ListaProfissionais>
        {profissionaisFiltradas.length > 0 ? (
          profissionaisFiltradas.map((profissional) => (
            <Card
              key={profissional.id}
              titulo={profissional.nome || profissional.titulo}
              descricao={profissional.descricao || profissional.biografia}
              imagem={profissional.foto || profissional.imagem}
              favoritado={estaFavoritado(profissional.id)}
              aoFavoritar={(e) => {
                e.stopPropagation();
                adicionarFavorito(profissional);
              }}
              onClick={() => navigate(`/profissionais/${profissional.id}`)}
            />
          ))
        ) : (
          <MensagemVazia>
            Nenhuma profissional cadastrada nesta área ainda.
          </MensagemVazia>
        )}
      </ListaProfissionais>
    </>
  );
}
