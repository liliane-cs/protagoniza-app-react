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
  Text,
} from "./style";
import Banner from "../../assets/screen.png";
import { useEffect, useState } from "react";
import { getLivro } from "../../services/protagonizaService";
import { toast } from "react-toastify";
import { requestFormReset } from "react-dom";
import { CardLivro } from "../../components/CardLivro";
import Loading from "../../components/Loading";

export const Home = () => {
  const [mostrar, setMostrar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [livros, setLivros] = useState([]);

  const [livroAtual, setLivroAtual] = useState(null);
  const [busca, setBusca] = useState("");

  const adicionarLivro = async () => {
    if (!busca.trim()) {
      toast.warning("Digite um nome de um livro.");
      return;
    }

    setLoading(true);

    const livro = await getLivro(busca);

    if (!livro) {
      toast.error("Livro não encontrado");
      setLoading(false);
      return;
    }

    setLivros((prev) => [...prev, livro]);
    setLivroAtual(livro);

    toast.success("Livro indicado com sucesso");
    setBusca("");
    setLoading(false);
  };

  useEffect(() => {
    async function carregarLivro() {
      setLoading(true);
      const nomesLivros = [
        "Mulheres que Correm com os Lobos",
        "A Coragem de Ser Imperfeito",
        "Nasceu, e agora?",
      ];
      const resultados = await Promise.all(
        nomesLivros.map((nome) => getLivro(nome)),
      );

      const livrosValidos = resultados.filter((livro) => livro);

      if (livrosValidos.length > 0) {
        setLivros(livrosValidos);
        setLivroAtual(livrosValidos[0]);
      }
      setLoading(false);
    }

    carregarLivro();
  }, []);

  useEffect(() => {
    if (livros.length === 0) return;

    const interval = setInterval(() => {
      const random = livros[Math.floor(Math.random() * livros.length)];

      setLivroAtual(random);
    }, 5000);

    return () => clearInterval(interval);
  }, [livros]);
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
          <Text style={{ color: "var(--texto)" }}>
            Aqui você divulga seus serviços, encontra oportunidades na sua área,
            aprende no seu ritmo e se conecta com outras mulheres que entendem a
            sua realidade.
          </Text>
        </HeroText>
        <Imagem src={Banner} alt="" />
      </HeroSection>
      <ServicosSection>
        <Title>O que você encontra aqui</Title>
        <Text>
          Tudo em um lugar só, pensado para a rotina de quem trabalha por conta
          própria.
        </Text>
        <CardWrapper>
          <ServicosCard>
            <CardTitle>Divulgue seus serviços</CardTitle>
            <Text>
              Monte seu perfil profissional, mostre o que você faz e seja
              encontrada por quem precisa dos seus serviços — sem precisar pagar
              por anúncio.
            </Text>
          </ServicosCard>
          <ServicosCard>
            <CardTitle>Oportunidades na sua área</CardTitle>
            <Text>
              Freelas, contratos e parcerias de pessoas que buscam profissionais
              como você.
            </Text>
          </ServicosCard>
          <ServicosCard>
            <CardTitle>Cursos práticos</CardTitle>
            <Text>
              Aprenda precificação, vendas, redes sociais e muito mais — do
              jeito que cabe na sua rotina.
            </Text>
          </ServicosCard>
          <ServicosCard style={{ backgroundColor: "var(--rosa-escuro)" }}>
            <CardTitle style={{ color: "var(--texto-invertido)" }}>
              Rede de apoio
            </CardTitle>
            <Text style={{ color: "var(--texto-invertido)" }}>
              Troca de experiências, dicas e indicações entre mulheres que já
              passaram pelo que você está vivendo agora. Porque crescer junto é
              mais fácil.
            </Text>
          </ServicosCard>
        </CardWrapper>
      </ServicosSection>

      <Label>Leitura da comunidade</Label>
      <Title style={{ fontSize: "25px", margin: "20px 0 5px" }}>
        Palavras que nos movem
      </Title>
      <Text style={{ margin: "10px 0 20px" }}>
        Um livro indicado pela nossa comunidade.
      </Text>
      {loading ? (
        <Loading />
      ) : (
        livroAtual && (
          <CardLivro
            capa={`https://covers.openlibrary.org/b/id/${livroAtual.cover_i}-M.jpg`}
            titulo={livroAtual.title}
            autor={livroAtual.author_name}
          />
        )
      )}
      <Button onClick={() => setMostrar(!mostrar)}>Indique o próximo.</Button>

      {mostrar && (
        <>
          <Input
            placeholder="Indique um livro"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <Button onClick={adicionarLivro}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </>
      )}
    </Main>
  );
};
