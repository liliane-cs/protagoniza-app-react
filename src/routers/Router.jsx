import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import Profissionais from "../pages/Profissionais";
import ProfissionalDetalhe from "../pages/ProfissionalDetalhe";
import Oportunidades from "../pages/Oportunidades";
import Cursos from "../pages/Cursos";
import RedeDeApoio from "../pages/RedeDeApoio";
import Favoritos from "../pages/Favoritos";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { Layout } from "../Layout";

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/profissionais/:id" element={<ProfissionalDetalhe />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/apoio" element={<RedeDeApoio />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}