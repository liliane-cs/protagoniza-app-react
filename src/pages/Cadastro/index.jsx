import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { cadastrarProfissional } from "../../services/protagonizaService";

export const Cadastro = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (
    <>
      <ToastContainer />

      <Link to="/login">← Já faço parte dessa rede incrivel</Link>

      <h1>Criar conta</h1>
      <p>Este é o seu momento. Preencha seus dados e entre para uma comunidade de mulheres autônomas e empreendedoras que estão mudando o jogo</p>

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
        placeholder="Em qual area você brilha ?"
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

      <Button>Começar minha jornada de sucesso</Button>
    </>
  );
};