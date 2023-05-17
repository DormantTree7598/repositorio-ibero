import React from "react";
import { ProjectMainDiv } from "../styles/styleProjectmain";
import NavBarComponent from "../components/navbar/navBar";
import Header from "../components/Header/Header";
import InicioT from "../components/inicio/inicioPage";
import styled from "styled-components";
import { Rectangulos } from "../components/carruselProyectos/Rctangulos";
import { Example } from "../data/infoExample";
import Idit from "../assets/Idit.png";

const ProjectMain = () => {
  return (
    <ProjectMainDiv>
      <GradientImage>
        <HeaderWraper>
          <Header />
        </HeaderWraper>
        <Navbar>
          <NavBarComponent />
        </Navbar>
        <Titulo>
          <InicioT />
        </Titulo>
        <Carrusel>
          {Example.map((items) => (
            <Rectangulos mensaje={items.name} />
          ))}
        </Carrusel>
      </GradientImage>
    </ProjectMainDiv>
  );
};
export default ProjectMain;

const HeaderWraper = styled.div`
  position: absolute;
  width: 99%;
  height: 10.3%;
  margin: 0;
  padding: 0;
  top: 0%;
  left: 0%;
`;
const GradientImage = styled.div`
  background-image: url("background-image: url("./idit.png")");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
`;
const Navbar = styled.div`
  position: absolute;
  width: 11%;
  height: 80%;
  margin: 0;
  padding: 0;
  top: 10.3%;
  left: 0%;
  opacity: 0.5;
  z-index: 1;
`;
const Titulo = styled.div`
  position: absolute;
  width: 88%;
  height: 79%;
  margin: 0;
  padding: 0;
  left: 11%;
  top: 10.3%;
`;
const Carrusel = styled.div`
  position: absolute;
  display: grid;
  left: 25%;
  top: 90%;
  grid-template-columns: repeat(3, 465px);
  grid-template-rows: 269px;
  grid-column-gap: 29px;
`;
