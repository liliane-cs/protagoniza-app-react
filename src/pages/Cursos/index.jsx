import { useState, useEffect } from "react";
import { apiCursos } from "../../services/api/Api.jsx";
import Loading from "../../components/Loading/index.jsx";
import ErrorMessage from "../../components/ErrorMessage/index.jsx";
import Card from "../../components/Card/index.jsx";
import {ListaCursos, Titulo} from "./style.jsx";
import { toast } from "react-toastify";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);


  useEffect(() => {

    async function buscarCursos() {
      try {
        const resposta = await apiCursos.get("/cursos");
        setCursos(resposta.data);
      } catch (e) {
        setErro(true);
        toast.error("Não foi possível carregar os cursos.")
      } finally {
        setCarregando(false);
      }
    }

    buscarCursos();
  }, []);

  if (carregando) return <Loading/>;

  if (erro) return <ErrorMessage mensagem="Não foi possível carregar os cursos."/>;

  return (
      <>
        <Titulo>Cursos</Titulo>

        <ListaCursos>
          {cursos.map((curso) => (
              <Card
                  key={curso.id}
                  titulo={curso.titulo}
                  descricao={curso.area}
                  imagem={curso.imagem}
              />
          ))}
        </ListaCursos>
      </>
  )
};