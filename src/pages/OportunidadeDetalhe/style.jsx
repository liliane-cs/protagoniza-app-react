import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Voltar = styled.button`
  border: none;
  background: transparent;
  color: var(--rosa-escuro);
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
