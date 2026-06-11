import { createContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function adicionarFavorito(item) {
  const jaExiste = favoritos.some(
    (favorito) =>
      favorito.id === item.id &&
      favorito.tipo === item.tipo
  );

  if (jaExiste) {
    setFavoritos(
      favoritos.filter(
        (favorito) =>
          !(favorito.id === item.id &&
            favorito.tipo === item.tipo)
      )
    );
  } else {
    setFavoritos([...favoritos, item]);
  }
}

  function estaFavoritado(id, tipo) {
  return favoritos.some(
    (favorito) =>
      favorito.id === id &&
      favorito.tipo === tipo
  );
}

  return (
    <FavoritosContext.Provider
      value={{ favoritos, adicionarFavorito, estaFavoritado }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}