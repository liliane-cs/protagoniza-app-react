import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--fundo-principal);
    border: 1px solid var(--borda-suave);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover{
        transform: translateY(-4px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    }
`;

export const Imagem = styled.img`
    width: 100%;
    height: 408px;
    object-fit: cover;
    align-self: center;      
    border-radius: 12px;  
`;

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
`;

export const Titulo = styled.h3`
    margin: 0;
    font-size: 18px;
    color: var(--titulo);
    font-family: var(--fonte-titulo);
`;

export const Descricao = styled.p`
    margin: 0;
    font-size: 14px;
    color: var(--texto-secundario);
    line-height: 1.4;
`;

export const BotaoFavoritar =  styled.button`
  position: absolute;          
  top: 12px;
  right: 12px;
  border: none;
  background: var(--fundo-principal);
  width: 36px;
  height: 36px;
  border-radius: 50%;           
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "var(--rosa-escuro)" : "var(--borda)")};
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.15);
  }
`;
