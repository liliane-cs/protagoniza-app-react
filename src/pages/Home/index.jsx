import {
  HeroSection,
  HeroText,
  Title,
  Imagem,
  Label,
  ServicosSection,
  ServicosCard,
  CardWrapper,
  Main,
  CardTitle,
} from "./style";
import Banner from "../../assets/screen.png";

export const Home = () => {
  return (
    <Main>
      <HeroSection>
        <HeroText>
          <Label>Para mulheres como você</Label>
          <Title style={{ fontSize: "48px" }}>
            Conectando o
            <i>
              <br /> Talento Feminino
            </i>
          </Title>
          <p style={{ color: "var(--texto)" }}>
            Aqui você divulga seus serviços, encontra oportunidades na sua área,
            aprende no seu ritmo e se conecta com outras mulheres que entendem a
            sua realidade.
          </p>
        </HeroText>
        <Imagem src={Banner} alt="" />
      </HeroSection>
      <ServicosSection>
        <Title>O que você encontra aqui</Title>
        <p>
          Tudo em um lugar só, pensado para a rotina de quem trabalha por conta
          própria.
        </p>
        <CardWrapper>
          <ServicosCard>
            <CardTitle>Divulgue seus serviços</CardTitle>
            <p>
              Monte seu perfil profissional, mostre o que você faz e seja
              encontrada por quem precisa dos seus serviços — sem precisar pagar
              por anúncio.
            </p>
          </ServicosCard>
          <ServicosCard>
            <CardTitle>Oportunidades na sua área</CardTitle>
            <p>
              Freelas, contratos e parcerias de pessoas que buscam profissionais
              como você.
            </p>
          </ServicosCard>
          <ServicosCard>
            <CardTitle>Cursos práticos</CardTitle>
            <p>
              Aprenda precificação, vendas, redes sociais e muito mais — do
              jeito que cabe na sua rotina.
            </p>
          </ServicosCard>
          <ServicosCard style={{ backgroundColor: "var(--rosa-escuro)" }}>
            <CardTitle style={{ color: "var(--texto-invertido)" }}>
              Rede de apoio
            </CardTitle>
            <p style={{ color: "var(--texto-invertido)" }}>
              Troca de experiências, dicas e indicações entre mulheres que já
              passaram pelo que você está vivendo agora. Porque crescer junto é
              mais fácil.
            </p>
          </ServicosCard>
        </CardWrapper>
      </ServicosSection>
    </Main>
  );
};
