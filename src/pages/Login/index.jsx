import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { getProfissionais } from "../../services/protagonizaService";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async () => {
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

    try {
      const resposta = await getProfissionais();
      const usuarioEncontrado = resposta.data.find(
        (user) => user.email === email && user.senha === senha
      );

      if (!usuarioEncontrado) {
        toast.error("Email ou senha incorretos!");
        return;
      }

      navigate("/profissionais");
    } catch (error) {
      toast.error("Erro ao conectar com o servidor!");
    }
  };

  return (
    <>
      <ToastContainer />
      <h1>Login</h1>
      <p>Que bom te ver de novo!</p>
      <p>Faça login para acessar sua conta e conectar-se a oportunidades incríveis.</p>

      <label>E-mail</label>
      <Input
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Senha</label>
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <Link to="#">Esqueci minha senha</Link>

      <Button onClick={fazerLogin}>Entrar</Button>

      <p>ou continue com</p>

      <button>G Continuar com Google</button>
      <button>in Continuar com LinkedIn</button>

      <p>Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>

      <Link to="/">← Voltar para a home</Link>
    </>
  );
};