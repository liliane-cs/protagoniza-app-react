import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 580px;

  margin: 3rem auto;
  padding: 3.5rem;

  background: #fffaf8;

  border-radius: 2rem;

  box-shadow: 0 12px 32px rgba(123, 80, 89, 0.12);

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    margin: 0;

    font-family: var(--fonte-titulo);
    font-size: 3rem;
    font-weight: 700;

    color: var(--rosa-escuro);

    text-align: center;

    line-height: 1.1;
  }

  p {
    margin: 0;

    color: var(--texto-secundario);

    text-align: center;

    line-height: 1.7;

    font-size: 1rem;
  }

  a {
    color: var(--rosa-escuro);

    text-decoration: none;

    font-weight: 600;

    text-align: center;

    transition: 0.2s;
  }

  a:hover {
    opacity: 0.8;
  }

  /* Link "Esqueci minha senha" */
  a:first-of-type {
    text-align: right;
    font-size: 0.95rem;
  }

  button {
    width: 100%;
  }

  /* Google e LinkedIn */
  button:nth-of-type(2),
  button:nth-of-type(3) {
    background: white;

    color: var(--texto);

    border: 1px solid var(--borda-suave);

    font-weight: 500;
  }

  /* Texto antes dos botões sociais */
  p:nth-of-type(2) {
    position: relative;

    margin: 0.5rem 0;

    color: var(--texto-secundario);
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

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 2rem;

    h1 {
      font-size: 2.2rem;
    }
  }
`;