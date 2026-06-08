import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { apiProfissionais } from "../../services/api/Api";

export default function ProfissionalDetalhe() {
  const {id} = useParams();
  const [profissional, setProfissional] = useState();

 useEffect(() => {
  async function buscarProfissional() {
    const resposta = await apiProfissionais.get("/profissionais");
    const profissionalEncontrada = resposta.data.find(
      (prof) => prof.id == id
    );
    setProfissional(profissionalEncontrada);
  }
  buscarProfissional();
}, [id]);

console.log(profissional);

  return (
    <>
      <h1>Detalhes da profissional</h1>
    </>
  );
};