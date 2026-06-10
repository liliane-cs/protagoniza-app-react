import styled from "styled-components";

export const Main = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: auto;
`;
export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

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

export const ServicosSection = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 50px 0;
`;
export const ServicosCard = styled.div`
  background-color: var(--fundo-principal);
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0px 0 10px var(--borda-suave);
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  text-align: start;
  margin-top: 20px;
`;

export const CardTitle = styled.h3`
  font-family: var(--fonte-titulo);
  color: var(--titulo);
  letter-spacing: 3%;
  font-size: 21px;
`;

export const Title = styled.h2`
  font-family: var(--fonte-titulo);
  font-size: 36px;
  color: var(--titulo);
  margin: 15px 0 0;

  i {
    color: var(--subtitulo);
  }
`;
export const Text = styled.p`
  color: var(--texto);
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
export const Button = styled.button`
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 20px;
  color: var(--texto-invertido);
  background-color: var(--rosa-medio);
  cursor: pointer;
`;
export const Input = styled.input`
  border-radius: 6px;
  border: 1px solid var(--rosa-medio);
  padding: 8px 10px;
  margin: 0 10px;
  background: transparent;
`;
