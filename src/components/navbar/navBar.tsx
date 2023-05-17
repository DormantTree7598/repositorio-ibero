import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavWrap>
      <NavContainer className={isNavOpen ? "open" : ""}>
        <NavElementsWrap>
          <NavItem href="/">Inicio</NavItem>
          <NavItem href="/proyectos">Proyectos</NavItem>
          <NavItem href="/cursos">Cursos</NavItem>
          <NavItem href="/espacios">Espacios</NavItem>
        </NavElementsWrap>
      </NavContainer>
      <NavMenuButton className={isNavOpen ? "open" : ""} onClick={toggleNav}>
        <span>{isNavOpen ? "X" : "☰"}</span>
      </NavMenuButton>
      <MainContent className={isNavOpen ? "open" : ""}></MainContent>
    </NavWrap>
  );
};
export default Navbar;
const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #f0f0f0;
  overflow-y: auto;
  transform: translateX(-200px);
  transition: all 0.2s ease-in-out;

  &.open {
    transform: translateX(0);
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.a`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  display: block;
  text-decoration: none;
  color: #3d3d3d;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: red;
  }
`;

const NavElementsWrap = styled.div`
  width: 64%;
  height: 17.5%;
  display: flex;
  flex-direction: column;
`;
const NavMenuButton = styled.button`
  position: absolute;
  top: 86%;
  left: 20%;
  width: 40px;
  height: 40px;
  background-color: gris;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  span {
    font-size: 1.5rem;
  }

  &.open {
    transform: translateX(200px);
  }

  &:hover {
    background-color: red;
  }
`;

const MainContent = styled.div`
  padding: 1rem;
  margin-left: 200px;
  transition: all 0.2s ease-in-out;

  &.open {
    margin-left: 0;
  }
`;

const NavWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0px;
  ${NavElementsWrap} {
    position: absolute;
    top: 40.5%;
    left: 24.5%;
  }
`;
