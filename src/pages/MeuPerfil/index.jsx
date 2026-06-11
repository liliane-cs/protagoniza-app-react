import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./style";
import Button from "../../components/Button";
import CampoFormulario from "../../components/CampoFormulario";

import {
  editarProfissional,
  deletarProfissional,
} from "../../services/protagonizaService";

export const MeuPerfil = () => {
  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [contato, setContato] = useState("");
  const [foto, setFoto] = useState("");

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");

  const [confirmarDelete, setConfirmarDelete] = useState(false);
  const [isLoadingSalvar, setIsLoadingSalvar] = useState(false);
  const [isLoadingDeletar, setIsLoadingDeletar] = useState(false);

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
      toast.error("Você precisa estar logada para acessar esta página!");
      navigate("/login");
      return;
    }

    setId(String(usuarioLogado.id));
    setNome(usuarioLogado.nome || "");
    setEmail(usuarioLogado.email || "");
    setArea(usuarioLogado.area || "");
    setCidade(usuarioLogado.cidade || "");
    setDescricao(usuarioLogado.descricao || "");
    setContato(usuarioLogado.contato || "");
    setFoto(usuarioLogado.foto || "");
  }, [navigate]);

  async function salvar() {
    if (!nome || !email || !area || !cidade) {
      toast.error("Preencha os campos obrigatórios, protagonista!");
      return;
    }

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    let senhaFinal = usuarioLogado.senha;

    if (senhaAtual || novaSenha || confirmarNovaSenha) {
      if (senhaAtual !== usuarioLogado.senha) {
        toast.error("A senha atual está incorreta!");
        return;
      }
      if (novaSenha.length < 6) {
        toast.error("A nova senha deve ter pelo menos 6 caracteres!");
        return;
      }
      if (novaSenha !== confirmarNovaSenha) {
        toast.error("As novas senhas não coincidem!");
        return;
      }
      senhaFinal = novaSenha;
    }

    const dadosAtualizados = {
      nome,
      email,
      area,
      cidade,
      senha: senhaFinal,
      descricao,
      contato,
      foto,
    };

    setIsLoadingSalvar(true);

    const response = await editarProfissional(id, dadosAtualizados);

    if (response.status !== 200) {
      toast.error("Não conseguimos atualizar seu brilho agora!");
      setIsLoadingSalvar(false);
      return;
    }

    localStorage.setItem(
      "usuarioLogado",
      JSON.stringify({ id, ...dadosAtualizados }),
    );

    toast.success("Perfil atualizado com sucesso!");
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarNovaSenha("");
    setIsLoadingSalvar(false);
  }

  async function deletar() {
    setIsLoadingDeletar(true);

    const response = await deletarProfissional(id);

    if (response.status !== 200 && response.status !== 204) {
      toast.error("Não foi possível encerrar sua jornada agora.");
      setIsLoadingDeletar(false);
      return;
    }

    localStorage.removeItem("usuarioLogado");
    toast.success("Até logo, protagonista!");
    setIsLoadingDeletar(false);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  return (
    <S.Container>
      <ToastContainer />

      <Link to="/profissionais">← Conhecer outras protagonistas incríveis</Link>

      <S.Conteudo>
        <S.ColunaEsquerda>
          <h1>A protagonista da vez é você! ✨</h1>

          <p>
            Hora de dar aquele brilho no perfil e mostrar tudo o que faz de você
            uma profissional única.
          </p>

          <S.Grid2Colunas>
            <CampoFormulario
              labelDoCampo="Nome completo"
              tipoDoCampo="text"
              placeholderDoCampo="Como a protagonista atende pelo mundo?"
              valorDoCampo={nome}
              aoMudar={(e) => setNome(e.target.value)}
            />
            <CampoFormulario
              labelDoCampo="E-mail"
              tipoDoCampo="email"
              placeholderDoCampo="Seu melhor e-mail de negócios, diva!"
              valorDoCampo={email}
              aoMudar={(e) => setEmail(e.target.value)}
            />
          </S.Grid2Colunas>

          <S.Grid2Colunas>
            <CampoFormulario
              labelDoCampo="Área de atuação"
              tipoDoCampo="text"
              placeholderDoCampo="Qual é o seu superpoder profissional?"
              valorDoCampo={area}
              aoMudar={(e) => setArea(e.target.value)}
            />
            <CampoFormulario
              labelDoCampo="Cidade"
              tipoDoCampo="text"
              placeholderDoCampo="De qual canto do Brasil você protagoniza?"
              valorDoCampo={cidade}
              aoMudar={(e) => setCidade(e.target.value)}
            />
          </S.Grid2Colunas>

          <CampoFormulario
            labelDoCampo="Sua história"
            tipoDoCampo="text"
            placeholderDoCampo="Conte um pouco sobre sua trajetória inspiradora"
            valorDoCampo={descricao}
            aoMudar={(e) => setDescricao(e.target.value)}
          />

          <CampoFormulario
            labelDoCampo="Contato"
            tipoDoCampo="text"
            placeholderDoCampo="Como futuras clientes podem te encontrar?"
            valorDoCampo={contato}
            aoMudar={(e) => setContato(e.target.value)}
          />

          <CampoFormulario
            labelDoCampo="Foto"
            tipoDoCampo="text"
            placeholderDoCampo="Cole aqui o link da sua foto mais poderosa"
            valorDoCampo={foto}
            aoMudar={(e) => setFoto(e.target.value)}
          />

          {isLoadingSalvar && <span>Salvando...</span>}

          <S.BotoesAcao>
            <Button onClick={salvar}>Atualizar meu protagonismo</Button>
            <Button estiloBotao="outline" onClick={() => navigate(-1)}>
              Cancelar
            </Button>
          </S.BotoesAcao>
        </S.ColunaEsquerda>

        <S.ColunaDireita>
          <S.Painel>
            <h2>Alterar senha</h2>

            <CampoFormulario
              labelDoCampo="Senha Atual"
              tipoDoCampo="password"
              placeholderDoCampo="Digite sua senha atual"
              valorDoCampo={senhaAtual}
              aoMudar={(e) => setSenhaAtual(e.target.value)}
            />

            <CampoFormulario
              labelDoCampo="Nova Senha"
              tipoDoCampo="password"
              placeholderDoCampo="Crie uma nova senha poderosa"
              valorDoCampo={novaSenha}
              aoMudar={(e) => setNovaSenha(e.target.value)}
            />

            <CampoFormulario
              labelDoCampo="Confirmar Nova Senha"
              tipoDoCampo="password"
              placeholderDoCampo="Repita sua nova senha"
              valorDoCampo={confirmarNovaSenha}
              aoMudar={(e) => setConfirmarNovaSenha(e.target.value)}
            />

            {isLoadingSalvar && <span>Salvando...</span>}

            <Button onClick={salvar}>Atualizar senha</Button>
          </S.Painel>

          <S.Painel>
            <h2>Deletar conta</h2>

            <p>
              Nem toda protagonista escolhe sair de cena, mas se decidir partir,
              essa ação não poderá ser desfeita.
            </p>

            {!confirmarDelete ? (
              <Button onClick={() => setConfirmarDelete(true)}>
                Quero sair dos holofotes
              </Button>
            ) : (
              <>
                <p>
                  Tem certeza que deseja deixar essa rede de mulheres
                  extraordinárias?
                </p>

                {isLoadingDeletar && <span>Deletando...</span>}

                <Button onClick={deletar}>Sim, quero sair dos holofotes</Button>

                <Button
                  estiloBotao="outline"
                  onClick={() => setConfirmarDelete(false)}
                >
                  Não, ainda tenho muito para protagonizar
                </Button>
              </>
            )}
          </S.Painel>
        </S.ColunaDireita>
      </S.Conteudo>
    </S.Container>
  );
};
