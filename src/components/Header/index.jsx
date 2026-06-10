import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  IconeTheme,
  LinkIcon,
  LinkNav,
  Logo,
  Nav,
} from "./style";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Header = () => {
  const { tema, alternarTema } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Logo>Protagoniza</Logo>
      </Link>
      <Nav>
        <LinkNav to={"/"}>Início</LinkNav>
        <LinkNav to={"/profissionais"}>Profissionais</LinkNav>
        <LinkNav to={"/oportunidades"}>Oportunidades</LinkNav>
        <LinkNav to={"/cursos"}>Cursos</LinkNav>
        <LinkNav to={"/apoio"}>Rede de Apoio</LinkNav>
      </Nav>
      <div>
        <IconeTheme onClick={() => alternarTema()}>
          {tema === "light" ? <MdLightMode /> : <MdOutlineDarkMode />}
        </IconeTheme>
        <LinkIcon to={"/favoritos"}>
          <FaRegHeart />
        </LinkIcon>
        <LinkIcon to={"/login"}>
          <MdOutlineAccountCircle />
        </LinkIcon>
      </div>
    </HeaderWrapper>
  );
};
