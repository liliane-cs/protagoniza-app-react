import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../../components/Button";
import Input from "../../components/Input";

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

    const response = await getProfissionais();

    if (response.status !== 200) {
      toast.error("Erro ao carregar profissionais!");
      return;
    }

    const emailJaCadastrado = response.data.find(
      (prof) => prof.email === email,
    );

    if (emailJaCadastrado) {
      toast.error("Este e-mail já está cadastrado!");
      return;
    }

    const cadastro = await cadastrarProfissional({
      nome,
      email,
      area,
      cidade,
      senha,
    });

    if (cadastro.status !== 201 && cadastro.status !== 200) {
      toast.error("Erro ao realizar cadastro!");
      return;
    }

    toast.success("Cadastro realizado com sucesso!");

    navigate("/login");
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

      <label>Nome completo</label>
      <Input
        type="text"
        placeholder="Seu nome de protagonista"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label>E-mail</label>
      <Input
        type="email"
        placeholder="Digite seu e-mail, diva!"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Área de atuação</label>
      <Input
        type="text"
        placeholder="Em qual área você brilha?"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      <label>Cidade</label>
      <Input
        type="text"
        placeholder="De onde você transforma o mercado?"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <label>Senha</label>
      <Input
        type="password"
        placeholder="Crie uma senha digna de uma protagonista"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <label>Confirmar senha</label>
      <Input
        type="password"
        placeholder="Confirme sua senha com vontade!"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
      />

      <Button onClick={cadastrar}>Começar minha jornada de sucesso</Button>
    </>
  );
};
