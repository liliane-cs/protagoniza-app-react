import styled from "styled-components";

export const BotaoEstilizado = styled.button`
  background-color: var(--rosa-escuro);
  color: var(--texto-invertido);
  border: none;
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: var(--rosa-medio);
  }
`;