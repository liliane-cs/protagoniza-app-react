import styled, { css } from "styled-components";

export const BotaoEstilizado = styled.button`
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  ${({ estiloBotao }) =>
    estiloBotao === "outline"
      ? css`
          background-color: transparent;
          color: var(--rosa-escuro);
          border: 1.5px solid var(--rosa-escuro);

          &:hover {
            background-color: var(--rosa-claro);
          }
        `
      : css`
          background-color: var(--rosa-escuro);
          color: var(--texto-invertido);
          border: none;

          &:hover {
            background-color: var(--rosa-medio);
          }
        `}
`;