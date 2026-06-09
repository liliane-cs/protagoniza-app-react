import styled from "styled-components";

export const InputEstilizado = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--borda-suave);
  border-radius: 8px;
  font-size: 14px;
  color: var(--texto);
  background-color: var(--fundo-principal);
  box-sizing: border-box;

  &::placeholder {
    color: var(--texto-secundario);
  }

  &:focus {
    outline: none;
    border-color: var(--rosa-escuro);
  }
`;