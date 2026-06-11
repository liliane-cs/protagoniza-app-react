import styled from "styled-components";

export const Container = styled.main`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  a {
    color: var(--rosa-escuro);
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColunaEsquerda = styled.div`
  flex: 2;
  background: var(--fundo-principal);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    margin: 0;
    font-family: var(--fonte-titulo);
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--rosa-escuro);
  }

  p {
    margin: 0;
    color: var(--texto-secundario);
    line-height: 1.6;
  }

  span {
    font-weight: 600;
    color: var(--rosa-escuro);
  }

  button {
    width: 100%;
  }
`;

export const ColunaDireita = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Painel = styled.div`
  background: var(--fundo-principal);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h2 {
    margin: 0;
    font-family: var(--fonte-titulo);
    font-size: 1.3rem;
    color: var(--rosa-escuro);
  }

  p {
    margin: 0;
    color: var(--texto-secundario);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  span {
    font-weight: 600;
    color: var(--rosa-escuro);
    text-align: center;
  }

  button {
    width: 100%;
  }
`;

export const Grid2Colunas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const BotoesAcao = styled.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
  }
`;