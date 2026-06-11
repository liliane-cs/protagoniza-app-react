import { useContext } from "react";
import Card from "../../components/Card";
import { FavoritosContext } from "../../context/FavoritosContext";

export default function Favoritos() {
const { favoritos, adicionarFavorito } = useContext(FavoritosContext);
const profissionais = favoritos.filter((item) => item.tipo === "profissional");
const cursos = favoritos.filter((item) => item.tipo === "curso");
const oportunidades = favoritos.filter((item) => item.tipo === "oportunidade");

const estiloGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 350px))",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
};

  return (
    <>
      <h1 style={{ color: "var(--rosa-escuro)", padding: "0 40px" }}>
        Favoritos
      </h1>

      {favoritos.length > 0 ? (
  <>
    <h2>Profissionais</h2>
    <div style={estiloGrid}>
      {profissionais.map((item) => (
        <Card
          key={item.id}
          titulo={item.nome || item.titulo}
          descricao={item.descricao || item.biografia}
          imagem={item.foto || item.imagem}
          favoritado={true}
          aoFavoritar={() => adicionarFavorito(item)}
        />
      ))}
    </div>

    <h2>Cursos</h2>
    <div style={estiloGrid}>
      {cursos.map((item) => (
        <Card
          key={item.id}
          titulo={item.nome || item.titulo}
          descricao={item.descricao || item.biografia || item.area}
          imagem={item.foto || item.imagem}
          favoritado={true}
          aoFavoritar={() => adicionarFavorito(item)}
        />
      ))}
    </div>

    <h2>Oportunidades</h2>
    <div style={estiloGrid}>
      {oportunidades.map((item) => (
        <Card
          key={item.id}
          titulo={item.nome || item.titulo}
          descricao={item.descricao || item.biografia}
          imagem={item.foto || item.imagem}
          favoritado={true}
          aoFavoritar={() => adicionarFavorito(item)}
        />
      ))}
    </div>
  </>
) : (
  <p>Nenhum favorito adicionado.</p>
)}
    </>
  );
}
