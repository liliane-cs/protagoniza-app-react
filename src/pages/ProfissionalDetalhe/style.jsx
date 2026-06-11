import styled from "styled-components";

export const Container = styled.main`
  max-width: 1400px;
  margin: 2rem auto;
  padding: 2rem;

  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;

  background: var(--fundo-principal);

  border-radius: 24px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

  img {
    grid-column: 1;
    grid-row: 1 / 7;

    width: 100%;
    height: 650px;

    object-fit: cover;

    border-radius: 24px;

    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }

  button {
    grid-column: 2;
    justify-self: start;
  }

  h1 {
    grid-column: 2;

    margin: 0;

    font-family: var(--fonte-titulo);

    font-size: 4rem;

    color: var(--titulo);

    border-bottom: 1px solid #e6d9dc;

    padding-bottom: 1rem;
  }

  p {
    grid-column: 2;

    margin: 0;

    padding: 1.5rem;

    background: var(--fundo-principal);

    border: 1px solid #eadde0;

    border-radius: 18px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    line-height: 1.8;

    color: var(--texto);
  }
`;
