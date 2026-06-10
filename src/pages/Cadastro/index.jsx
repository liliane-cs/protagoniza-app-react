import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../../components/Button";
import CampoFormulario from "../../components/CampoFormulario";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

import {
  getProfissionais,
  cadastrarProfissional,
} from "../../services/protagonizaService";

export const Cadastro = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);

  async function cadastrar() {
    if (!nome || !email || !area || !cidade || !senha || !confirmarSenha) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      toast.error("Digite um e-mail válido!");
      return;
    }

    if (senha.length < 6) {
      toast.error("A senha deve ter no mínimo 6 caracteres!");
      return;
    }

    if (senha !== confirmarSenha) {
      toast.error("As senhas não coincidem!");
      return;
    }

    setIsLoading(true);

    const responseProfissionais = await getProfissionais();

    if (responseProfissionais.status !== 200) {
      setErro(true);
      setIsLoading(false);
      return;
    }

    const emailJaCadastrado = responseProfissionais.data.find(
      (prof) => prof.email === email,
    );

    if (emailJaCadastrado) {
      toast.error("Este e-mail já está cadastrado!");
      setIsLoading(false);
      return;
    }

    const responseCadastro = await cadastrarProfissional({
      nome,
      email,
      area,
      cidade,
      senha,
    });

    if (responseCadastro.status !== 201) {
      setErro(true);
      setIsLoading(false);
      return;
    }

    toast.success("Cadastro realizado com sucesso!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);

    setIsLoading(false);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (erro) {
    return <ErrorMessage />;
  }

  return (
    <>
      <ToastContainer />

      <Link to="/login">← Já faço parte dessa rede incrível</Link>

      <h1>Criar conta</h1>

      <p>
        Este é o seu momento. Preencha seus dados e entre para uma comunidade de
        mulheres autônomas e empreendedoras que estão mudando o jogo.
      </p>

      <CampoFormulario
        labelDoCampo="Nome completo"
        tipoDoCampo="text"
        placeholderDoCampo="Seu nome de protagonista"
        valorDoCampo={nome}
        aoMudar={(e) => setNome(e.target.value)}
      />

      <CampoFormulario
        labelDoCampo="E-mail"
        tipoDoCampo="email"
        placeholderDoCampo="Digite seu e-mail, diva!"
        valorDoCampo={email}
        aoMudar={(e) => setEmail(e.target.value)}
      />

      <CampoFormulario
        labelDoCampo="Área de atuação"
        tipoDoCampo="text"
        placeholderDoCampo="Em qual área você brilha?"
        valorDoCampo={area}
        aoMudar={(e) => setArea(e.target.value)}
      />

      <CampoFormulario
        labelDoCampo="Cidade"
        tipoDoCampo="text"
        placeholderDoCampo="De onde você transforma o mercado?"
        valorDoCampo={cidade}
        aoMudar={(e) => setCidade(e.target.value)}
      />

      <CampoFormulario
        labelDoCampo="Senha"
        tipoDoCampo="password"
        placeholderDoCampo="Crie uma senha digna de uma protagonista"
        valorDoCampo={senha}
        aoMudar={(e) => setSenha(e.target.value)}
      />

      <CampoFormulario
        labelDoCampo="Confirmar senha"
        tipoDoCampo="password"
        placeholderDoCampo="Confirme sua senha com vontade!"
        valorDoCampo={confirmarSenha}
        aoMudar={(e) => setConfirmarSenha(e.target.value)}
      />

      <Button onClick={cadastrar}>Começar minha jornada de sucesso</Button>
    </>
  );
};
