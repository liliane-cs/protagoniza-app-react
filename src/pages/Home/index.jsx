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
  Button,
  Input,
  Quote,
} from "./style";
import Banner from "../../assets/screen.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [mostrarAdicao, setMostrarAdicao] = useState();
  const [frases, setFrases] = useState([]);
  const [fraseAtual, setFraseAtual] = useState("");
  const [fraseNova, setFraseNova] = useState("");

  const [nome, setNome] = useState("");

  const adicionarFrase = () => {
    axios
      .post("https://frases.docapi.dev/frase/criar", {
        frase: fraseNova,
        nomeAutor: nome,
      })
      .then((resp) => {
        const nova = resp.data;

        setFrases((prev) => {
          const atualizadas = [...prev, nova];

          const random =
            atualizadas[Math.floor(Math.random() * atualizadas.length)];

          setFraseAtual(`${random.frase} - ${random.nomeAutor}`);

          return atualizadas;
        });

        setFraseNova("");
        setNome("");
      })
      .catch(() => {
        setFraseAtual("Acredite no seu potencial!");
      });
  };

  useEffect(() => {
    axios.get("https://frases.docapi.dev/frase/obter").then((resp) => {
      console.log(resp.data);
      const frases = resp.data.resposta;

      setFrases(resp.data.resposta);
    });
  }, []);

  useEffect(() => {
    if (frases.length === 0) return;

    const trocarFrase = () => {
      const random = frases[Math.floor(Math.random() * frases.length)];

      setFraseAtual(`${random.frase} - ${random.nomeAutor}`);
    };

    trocarFrase();

    const interval = setInterval(trocarFrase, 5000);
    return () => clearInterval(interval);
  }, [frases]);

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
      <Title style={{ display: " flex", justifyContent: "space-between" }}>
        Palavras que nos movem
      </Title>
      <p>
        Frases reais de mulheres reais.{" "}
        <Button onClick={() => setMostrarAdicao(!mostrarAdicao)}>
          Deixe a sua também. Clique aqui!
        </Button>
      </p>
      {mostrarAdicao && (
        <div style={{ marginTop: "20px" }}>
          <Input
            type="text"
            placeholder="Digite uma frase"
            value={fraseNova}
            onChange={(e) => setFraseNova(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Button onClick={adicionarFrase} style={{ textDecoration: "none" }}>
            {" "}
            ENVIAR
          </Button>
        </div>
      )}
      <Quote style={{ textTransform: "unset", fontSize: "18px" }}>
        💬 {fraseAtual || "Carregando inspiração..."}
      </Quote>
    </Main>
  );
};
