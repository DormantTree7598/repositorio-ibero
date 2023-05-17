import React from "react";
import { SecondViewStyles } from "../styles/styleSecondView";
import styled from "styled-components";
import { Proyectos } from "../components/Proyectos/Proyectos";
import { Secondrec } from "../components/secondcarrusel/Secondrec";
import { Example } from "../data/infoExample";
import { Letras } from "../components/Category/Category/letras";

const SecondView = () => {
  return (
    <SecondViewStyles>
      <TitleProyectos>
        <Proyectos />
      </TitleProyectos>
      <Secondslider>
        {Example.map((items) => (
          <Secondrec key={items.name} mensaje={items.name} />
        ))}
      </Secondslider>
      <Fichaproyectos>
        <Letras />
      </Fichaproyectos>
      <SecondsliderD>
        {Example.map((items) => (
          <Secondrec key={items.name} mensaje={items.name} />
        ))}
      </SecondsliderD>
      <FichaproyectosD>
        <Letras />
      </FichaproyectosD>
    </SecondViewStyles>
  );
};

export default SecondView;

const TitleProyectos = styled.div`
  position: absolute;
  width: 49%;
  height: 25%;
  margin: 0;
  padding: 0;
  left: 18%;
  top: 125%;
`;

const Secondslider = styled.div`
  position: absolute;
  width: 70%;
  height: 17%;
  left: 16%;
  top: 167%;
  display: grid;
  grid-template-columns: repeat(3, 37%);
  grid-template-rows: repeat(2, 100%);
  grid-column-gap: 10px;
  grid-row-garp: 169px;
`;
const SecondsliderD = styled.div`
  position: absolute;
  width: 70%;
  height: 17%;
  left: 16%;
  top: 198%;
  display: grid;
  grid-template-columns: repeat(3, 37%);
  grid-template-rows: repeat(2, 100%);
  grid-column-gap: 10px;
  grid-row-garp: 169px;
`;
const Fichaproyectos = styled.div`
  position: absolute;
  width: 9%;
  height: 28%;
  left: 85%;
  top: 163%;
`;

const FichaproyectosD = styled.div`
  position: absolute;
  width: 9%;
  height: 28%;
  left: 16%;
  top: 195%;
`;
