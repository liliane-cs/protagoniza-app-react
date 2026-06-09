import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root  {
  /* 🧱 FUNDOS */
  --fundo: #fff8f6;
  --fundo-principal: #ffffff;
  --fundo-secundario: #fff1eb;
  --fundo-terciario: #ffeae0;
  --fundo-hover: #ffe3d4;

  /* 📝 TEXTOS */
  --texto: #2e1505;
  --texto-secundario: #504446;
  --texto-invertido: #ffffff;
  --fonte-titulo: "Libre Caslon Text", serif;

  /* 🏷️ TÍTULOS */
  --titulo: #7b5059;
  --subtitulo: #8b4c50;

  /* 🌸 IDENTIDADE (ROSA) */
  --rosa-escuro: #7b5059;
  --rosa-medio: #966871;
  --rosa-claro: #ffd9df;

  /* 💜 APOIO / DESTAQUE */
  --roxo: #685475;
  --roxo-claro: #f3daff;

  /* 🧩 UI */
  --borda: #827376;
  --borda-suave: #d4c2c4;

  /* 🌫️ CAMADAS */
  --superficie-inversa: #472917;
  --texto-inverso: #ffede5;

  /* ⚠️ STATUS */
  --erro: #ba1a1a;
  --erro-fundo: #ffdad6;

  /* ✨ DESTAQUES */
  --destaque: #f0b8c3;
}


body{
    font-family: "Plus Jakarta Sans", sans-serif;
    margin: 0;
    padding: 0;
     background-color: var(--fundo);
}

`;
