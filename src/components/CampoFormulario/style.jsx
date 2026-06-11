import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const Label = styled.label`
  color: var(--texto);

  font-size: 0.95rem;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 3.5rem;

  padding: 0 1rem;

  border-radius: 1rem;
  border: 1px solid var(--borda-suave);

  background-color: var(--fundo-principal);

  color: var(--texto);

  font-size: 1rem;

  outline: none;

  transition: 0.2s;

  &:focus {
    border-color: var(--rosa-escuro);
  }

  &::placeholder {
    color: var(--texto-secundario);
  }
`;
