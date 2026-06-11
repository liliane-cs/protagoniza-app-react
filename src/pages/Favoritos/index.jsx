import { useContext } from "react";
import Card from "../../components/Card";
import { FavoritosContext } from "../../context/FavoritosContext";

export default function Favoritos() {
  const { favoritos, adicionarFavorito } = useContext(FavoritosContext);

  return (
    <>
      <h1>Favoritos</h1>

      {favoritos.length > 0 ? (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 350px))",
      gap: "20px",
      padding: "20px",
      justifyContent: "center",
    }}
  >
    {favoritos.map((profissional) => (
      <Card
        key={profissional.id}
        titulo={profissional.nome || profissional.titulo}
        descricao={profissional.descricao || profissional.biografia}
        imagem={profissional.foto || profissional.imagem}
        favoritado={true}
        aoFavoritar={() => adicionarFavorito(profissional)}
      />
    ))}
  </div>
) : (
  <p>Nenhum favorito adicionado.</p>
)}
    </>
  );
}