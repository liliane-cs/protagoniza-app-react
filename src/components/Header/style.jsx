import { Link } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 2px 0 10px var(--rosa-claro);
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 40px;
  gap: 10px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
export const Logo = styled.h1`
  font-family: var(--fonte-titulo);
  color: var(--rosa-escuro);
  font-size: 24px;
`;
export const Nav = styled.div`
  display: flex;
  align-items:  center;
  justify-content: space-between:
`;

export const LinkIcon = styled(Link)`
  text-decoration: none;
  color: var(--rosa-escuro);
  margin-right: 10px;

  svg {
    width: 22px;
    height: 22px;
  }
`;
export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: var(--roxo);
  font-weight: 700;
  font-size: 12px;
  margin: 0 8px;
  padding-bottom: 5px;

  &.active {
    font-size: 13px;
    border-bottom: 2px solid var(--rosa-escuro);
    color: var(--rosa-escuro);
  }

  &:hover {
    color: var(--rosa-medio);
  }

  @media (min-width: 490px) {
    font-size: 14px;
    margin: 0 16px;

    &.active {
      font-size: 15px;
    }
  }
`;
export const Icons = styled.div``;
