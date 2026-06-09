import { Link } from "react-router-dom";
import { HeaderWrapper, Icons, LinkIcon, LinkNav, Logo, Nav } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Protagoniza</Logo>
      <Nav>
        <LinkNav to={"/"}>Início</LinkNav>
        <LinkNav to={"/profissionais"}>Profissionais</LinkNav>
        <LinkNav to={"/oportunidades"}>Oportunidades</LinkNav>
        <LinkNav to={"/cursos"}>Cursos</LinkNav>
        <LinkNav to={"/apoio"}>Rede de Apoio</LinkNav>
      </Nav>
      <Icons>
        <LinkIcon to={"/favoritos"}>
          <FaRegHeart />
        </LinkIcon>
        <LinkIcon to={"/login"}>
          <MdOutlineAccountCircle />
        </LinkIcon>
      </Icons>
    </HeaderWrapper>
  );
};
