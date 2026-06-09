import styled from "styled-components";

export const ListaCursos = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 16px;     
  margin: 40px;                 
`;

export const Titulo = styled.h1`
    text-align: center;
    color: var(--titulo);
    font-family: var(--fonte-titulo);
    `;