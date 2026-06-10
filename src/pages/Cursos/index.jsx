import { useState, useEffect } from "react";
import { apiCursos } from "../../services/api/Api.jsx";
import Loading from "../../components/Loading/index.jsx";
import ErrorMessage from "../../components/ErrorMessage/index.jsx";
import Card from "../../components/Card/index.jsx";
import {ListaCursos, Titulo, Filtro, Cabecalho} from "./style.jsx";
import { toast } from "react-toastify";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {

    async function buscarCursos() {
      try {
        const resposta = await apiCursos.get("/cursos");
        setCursos(resposta.data);
      } catch {
        setErro(true);
        toast.error("Não foi possível carregar os cursos.")
      } finally {
        setTimeout(() => setCarregando(false), 1500);
      }
    }

    buscarCursos();
  }, []);

  if (carregando) return <Loading/>;

  if (erro) return <ErrorMessage mensagem="Não foi possível carregar os cursos."/>;

  const areas = [...new Set(cursos.map((curso) => curso.area))];
  const cursosFiltrados = areaSelecionada
      ? cursos.filter((curso) => curso.area === areaSelecionada)
      : cursos;

  function alternarFavorito(id) {

    setFavoritos((anteriores) =>
        anteriores.includes(id)
            ? anteriores.filter((favId) => favId !== id)
            : [...anteriores, id]
    );
  }

  return (
      <>
        <Cabecalho>
        <Titulo>Cursos Profissionalizantes</Titulo>

        <Filtro
            value={areaSelecionada}
            onChange={(e) => setAreaSelecionada(e.target.value)}
        >
          <option value="">Todas as áreas</option>

          {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
          ))}
        </Filtro>
        </Cabecalho>

        <ListaCursos>
          {cursosFiltrados.map((curso) => (
              <Card
                  key={curso.id}
                  titulo={curso.titulo}
                  descricao={curso.area}
                  imagem={curso.imagem}
                  favoritado={favoritos.includes(curso.id)}
                  aoFavoritar={() => alternarFavorito(curso.id)}
              />
          ))}
        </ListaCursos>
      </>
  )
};