import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem 8rem;
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 2rem 6rem;
  background: var(--fundo-principal);
  border-radius: 24px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

  button {
    grid-column: 1 / -1;
    justify-self: start;
    align-self: start;
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
  }

  img {
    grid-column: 1;
    width: 100%;
    height: 650px;
    object-fit: cover;
    border-radius: 24px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const CardInfo = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 0 1.5rem 0;
    font-family: var(--fonte-titulo);
    font-size: 2rem;
    color: var(--titulo);
    border-bottom: 1px solid #e6d9dc;
    padding-bottom: 1rem;
  }

  p {
    margin: 0;
    padding: 2.5rem 0;
    border-bottom: 1px solid #f0e4e7;
    display: grid;
    grid-template-columns: 1.8rem 110px 1fr;
    align-items: start;
    gap: 0.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--texto);

    &:last-of-type {
      border-bottom: none;
    }

    svg {
      color: #a0526a;
      font-size: 1.1rem;
      margin-top: 0.15rem;
    }

    span {
      font-weight: 600;
      color: var(--titulo);
    }
  }
`;