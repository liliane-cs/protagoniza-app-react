import styled from "styled-components";

export const BotaoEstilizado = styled.button`
  width: 100%;
  height: 3.5rem;

  border-radius: 1rem;

  border: ${({ variante }) =>
    variante === "outline"
      ? "1px solid var(--rosa-escuro)"
      : "none"};

  background-color: ${({ variante }) =>
    variante === "outline"
      ? "transparent"
      : "var(--rosa-escuro)"};

  color: ${({ variante }) =>
    variante === "outline"
      ? "var(--rosa-escuro)"
      : "var(--texto-invertido)"};

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;