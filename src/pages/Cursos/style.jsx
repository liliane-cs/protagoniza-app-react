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

export const Filtro = styled.select`
  font-size: 20px;                        
  padding: 10px 14px;                     
  border: 3px solid var(--borda-suave);   
  border-radius: 8px;                     
  background: var(--fundo-principal);     
  color: var(--texto);                    
  cursor: pointer;                        
  margin-bottom: 16px;                    

  &:focus {
    outline: 2px solid var(--rosa-medio);
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;     
  gap: 12px;               
  margin-bottom: 16px;     
`;