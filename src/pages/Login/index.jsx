import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../../components/Button";
import CampoFormulario from "../../components/CampoFormulario";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

import { getProfissionais } from "../../services/protagonizaService";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);

  async function fazerLogin() {
    if (!email || !senha) {
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

    setIsLoading(true);

    const response = await getProfissionais();

    if (response.status !== 200) {
      setErro(true);
      setIsLoading(false);
      return;
    }

    const usuarioEncontrado = response.data.find(
      (user) => user.email === email && user.senha === senha,
    );

    if (!usuarioEncontrado) {
      toast.error("Email ou senha incorretos!");
      setIsLoading(false);
      return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

    setIsLoading(false);

    toast.success(
      `Seja bem-vinda, ${usuarioEncontrado.nome}! Que bom ter você aqui. ✨`,
    );

    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  if (erro) {
    return <ErrorMessage />;
  }

  return (
    <>
      <ToastContainer />

      {isLoading && <Loading />}

      <h1>Faça seu login e protagonize!</h1>

      <p>Sua rede está com saudade! Entre para continuar protagonizando.</p>

      <CampoFormulario
        labelDoCampo="E-mail"
        tipoDoCampo="email"
        placeholderDoCampo="Digite seu e-mail, diva!"
        valorDoCampo={email}
        aoMudar={(e) => setEmail(e.target.value)}
      />

      <CampoFormulario
        labelDoCampo="Senha"
        tipoDoCampo="password"
        placeholderDoCampo="Sua senha de protagonista"
        valorDoCampo={senha}
        aoMudar={(e) => setSenha(e.target.value)}
      />

      <Link to="#">Esqueci minha senha</Link>

      <Button onClick={fazerLogin}>Quero entrar e PROTAGONIZAR</Button>

      <p>ou continue com</p>

      <Button estiloBotao="outline">G Continuar com Google</Button>

      <Button estiloBotao="outline">in Continuar com LinkedIn</Button>

      <p>
        Ainda não faz parte dessa rede de mulheres incríveis?{" "}
        <Link to="/cadastro">Cadastre-se agora</Link>
      </p>

      <Link to="/">← Voltar para nossa casa</Link>
    </>
  );
};
