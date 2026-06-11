import { useState, useEffect, useContext } from "react";
import { apiCursos } from "../../services/api/Api.jsx";
import Loading from "../../components/Loading/index.jsx";
import ErrorMessage from "../../components/ErrorMessage/index.jsx";
import Card from "../../components/Card/index.jsx";
import {ListaCursos, Titulo, Filtro, Cabecalho} from "./style.jsx";
import { toast } from "react-toastify";
import { FavoritosContext } from "../../context/FavoritosContext.jsx";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const {adicionarFavorito,estaFavoritado}=useContext (FavoritosContext);

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
               favoritado={estaFavoritado(curso.id, "curso")}
                aoFavoritar={(e)=>{
                  e.stopPropagation();
                  adicionarFavorito({...curso,tipo:"curso"});
                }}
              />
          ))}
        </ListaCursos>
      </>
  )
};