import styled from "styled-components";

export const Container = styled.main`
  max-width: 850px;

  margin: 2rem auto;

  padding: 3rem;

  background: var(--fundo-principal);

  border-radius: 24px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;

  gap: 2rem;

  h1 {
    margin: 0;

    text-align: center;

    font-family: var(--fonte-titulo);

    font-size: 2.8rem;

    color: var(--rosa-escuro);
  }

  p {
    margin: 0;

    color: var(--texto-secundario);

    line-height: 1.6;

    text-align: center;
  }

  a {
    color: var(--rosa-escuro);

    text-decoration: none;

    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    width: 100%;
  }

  /* Campos */

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* Separação visual dos blocos */

  > div:nth-of-type(7) {
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--borda-suave);
  }

  span {
    text-align: center;
    font-weight: 600;
    color: var(--rosa-escuro);
  }
`;