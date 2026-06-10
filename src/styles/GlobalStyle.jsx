import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root  {
  /* 🧱 FUNDOS */
  --fundo: #fff8f6;
  --fundo-principal: #ffffff;
  --fundo-secundario: #fff1eb;
  --fundo-terciario: #ffeae0;
  --fundo-hover: #ffe3d4;
  --fundo-header:  rgba(255, 255, 255, 0.6);

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

body.dark {

  /* 🧱 FUNDOS */
  --fundo: #151120;
  --fundo-principal: #211d2d;
  --fundo-secundario: #3a1d0d;
  --fundo-terciario: #472917;
  --fundo-hover: #2c2837;
  --fundo-header:  rgba(21, 17, 32, 0.6);

  /* 📝 TEXTOS */
  --texto: #ffede5;
  --texto-secundario: #d4c2c4;
  --texto-invertido: #2e1505;

  /* 🏷️ TÍTULOS */
  --titulo: #f0b8c3;
  --subtitulo: #e0aab4;

  /* 🌸 IDENTIDADE (ROSA) */
  --rosa-escuro: #f0b8c3;
  --rosa-medio: #e0aab4;
  --rosa-claro: #7b5059;

  /* 💜 APOIO / DESTAQUE */
  --roxo: #d0bcff;
  --roxo-claro: #4a4458;

  /* 🧩 UI */
  --borda: #9a8c8f;
  --borda-suave: #5a4a4d;

  /* 🌫️ CAMADAS */
  --superficie-inversa: #ffede5;
  --texto-inverso: #2e1505;

  /* ⚠️ STATUS */
  --erro: #ffb4ab;
  --erro-fundo: #93000a;

  /* ✨ DESTAQUES */
  --destaque: #f0b8c3;
}

`;
