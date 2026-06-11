import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 700px;

  margin: 3rem auto;
  padding: 3rem;

  background-color: var(--fundo-principal);

  border-radius: 2rem;

  box-shadow: 0 12px 32px rgba(123, 80, 89, 0.12);

  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  h1 {
    margin: 0;

    text-align: center;

    font-family: var(--fonte-titulo);

    font-size: 3rem;

    color: var(--rosa-escuro);

    line-height: 1.1;
  }

  p {
    margin: 0;

    text-align: center;

    color: var(--texto-secundario);

    line-height: 1.6;
  }

  a {
    color: var(--rosa-escuro);

    text-decoration: none;

    font-weight: 600;

    text-align: center;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    width: 100%;
  }

  textarea {
    width: 100%;

    min-height: 120px;

    padding: 1rem;

    border-radius: 1rem;

    border: 1px solid var(--borda-suave);

    background-color: var(--fundo-principal);

    color: var(--texto);

    resize: none;

    font-family: inherit;

    box-sizing: border-box;
  }
`;

export const Linha = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 1rem;
`;

export const Secao = styled.div`
  display: flex;

  flex-direction: column;

  gap: 1rem;
`;

export const Separador = styled.div`
  width: 100%;

  height: 1px;

  background-color: var(--borda-suave);

  margin: 0.5rem 0;
`;

export const Rodape = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0.75rem;

  align-items: center;
`;
