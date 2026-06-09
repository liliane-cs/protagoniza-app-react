import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { apiProfissionais } from "../../services/api/Api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
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
      const resposta = await apiProfissionais.get("/profissionais");
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
  }

  return (
    <>
      <ToastContainer />
      <h1>Login</h1>

      <Input
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <Button onClick={handleLogin}>Entrar</Button>
    </>
  );
}