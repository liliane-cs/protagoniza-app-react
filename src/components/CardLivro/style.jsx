import styled from "styled-components";

export const Title = styled.h3`
  font-family: var(--fonte-titulo);
  color: var(--texto);
  font-size: 20px;
  letter-spacing: 5%;
`;
export const Autor = styled.p`
  color: var(--texto);
  text-transform: uppercase;
  letter-spacing: 5%;
`;
export const Capa = styled.img`
  height: 200px;
`;
export const InfoWrapper = styled.div``;
export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 80%;
  margin: auto;
  border: 1px solid var(--rosa-medio);
  padding: 40px;
  border-radius: 10px;
  background: var(--fundo-principal);
`;
