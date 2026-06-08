import { HeroSection, HeroText, HeroTitle, Imagem, Label } from "./style";
import Banner from "../../assets/screen.png";

export const Home = () => {
  return (
    <HeroSection>
      <HeroText>
        <Label>Para mulheres como você</Label>
        <HeroTitle>
          Conectando o{" "}
          <i>
            <br /> Talento Feminino
          </i>
        </HeroTitle>
        <p style={{ color: "var(--texto)" }}>
          Aqui você divulga seus serviços, encontra oportunidades na sua área,
          aprende no seu ritmo e se conecta com outras mulheres que entendem a
          sua realidade.
        </p>
      </HeroText>
      <Imagem src={Banner} alt="" />
    </HeroSection>
  );
};
