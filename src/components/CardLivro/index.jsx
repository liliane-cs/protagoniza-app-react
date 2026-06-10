import Loading from "../Loading";
import { Autor, Capa, InfoWrapper, SectionWrapper, Title } from "./style";

export const CardLivro = ({ capa, titulo, autor }) => {
  return (
    <SectionWrapper>
      <Capa src={capa} alt={titulo} />
      <InfoWrapper>
        <Title>{titulo}</Title>
        <Autor>{autor}</Autor>
      </InfoWrapper>
    </SectionWrapper>
  );
};
