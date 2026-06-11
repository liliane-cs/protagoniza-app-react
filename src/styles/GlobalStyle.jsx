import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root  {
  /* FUNDOS */
  --fundo: #fff8f6;
  --fundo-principal: #ffffff;
  --fundo-header:  rgba(255, 255, 255, 0.6);

  /* TEXTOS */
  --texto: #2e1505;
  --texto-secundario: #504446;
  --texto-invertido: #ffffff;
  --fonte-titulo: "Libre Caslon Text", serif;

  /* TÍTULOS */
  --titulo: #7b5059;
  --subtitulo: #8b4c50;

  /* IDENTIDADE (ROSA) */
  --rosa-escuro: #7b5059;
  --rosa-medio: #966871;
  --rosa-claro: #ffd9df;

  --roxo: #685475;
  --roxo-claro: #f3daff;

  --borda: #827376;
  --borda-suave: #d4c2c4;

}


body{
    font-family: "Plus Jakarta Sans", sans-serif;
    margin: 0;
    padding: 0;
     background-color: var(--fundo);
}

body.dark {

  /* FUNDOS */
  --fundo: #151120;
  --fundo-principal: #211d2d;
  --fundo-header:  rgba(21, 17, 32, 0.6);

  /* TEXTOS */
  --texto: #ffede5;
  --texto-secundario: #d4c2c4;
  --texto-invertido: #2e1505;

  /* TÍTULOS */
  --titulo: #f0b8c3;
  --subtitulo: #e0aab4;

  /* IDENTIDADE (ROSA) */
  --rosa-escuro: #f0b8c3;
  --rosa-medio: #e0aab4;
  --rosa-claro: #7b5059;

  --roxo: #d0bcff;
  --roxo-claro: #4a4458;

  --borda: #9a8c8f;
  --borda-suave: #5a4a4d;

}

`;
