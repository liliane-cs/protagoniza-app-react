import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  max-width: 1200px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const HeroText = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const HeroTitle = styled.h2`
  font-family: var(--fonte-titulo);
  font-size: 48px;
  color: var(--titulo);

  i {
    color: var(--subtitulo);
  }
`;
export const Label = styled.span`
  background-color: var(--fundo-hover);
  color: var(--rosa-escuro);
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
`;
export const Imagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
