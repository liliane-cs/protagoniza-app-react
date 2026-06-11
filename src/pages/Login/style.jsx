import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 900px;
  margin: 3rem auto;
  background: var(--fundo-principal);
  border-radius: 2rem;
  box-shadow: 0 12px 32px rgba(123, 80, 89, 0.12);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  min-height: 580px;
`;

export const PainelEsquerdo = styled.div`
  width: 42%;
  background: linear-gradient(160deg, #fce8e8 0%, #f2b8b8 60%, #e8a0a0 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    width: 80%;
    max-width: 240px;
  }
`;

export const PainelDireito = styled.div`
  width: 58%;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    margin: 0;
    font-family: var(--fonte-titulo);
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--rosa-escuro);
    line-height: 1.1;
  }

  p {
    margin: 0;
    color: var(--texto-secundario);
    line-height: 1.7;
    font-size: 1rem;
  }

  a {
    color: var(--rosa-escuro);
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s;
  }

  a:hover {
    opacity: 0.8;
  }

  a:first-of-type {
    text-align: right;
    font-size: 0.95rem;
  }

  button {
    width: 100%;
  }

  button:nth-of-type(2),
  button:nth-of-type(3) {
    background: var(--fundo-principal);
    color: var(--texto);
    border: 1px solid var(--borda-suave);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }

  p:nth-of-type(2) {
    position: relative;
    text-align: center;
    margin: 0.2rem 0;
  }

  p:nth-of-type(2)::before,
  p:nth-of-type(2)::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 35%;
    height: 1px;
    background: var(--borda-suave);
  }

  p:nth-of-type(2)::before {
    left: 0;
  }

  p:nth-of-type(2)::after {
    right: 0;
  }

  p:nth-of-type(3) {
    text-align: center;
  }

  a:last-of-type {
    text-align: left;
    font-size: 0.95rem;
  }

  }
`;
