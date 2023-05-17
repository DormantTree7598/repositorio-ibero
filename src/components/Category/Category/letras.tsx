import React from "react";
import styled from "styled-components";

export const Letras = () => {
  return (
    <CategoryWrap>
      <Carrera>Categoria/Carrera</Carrera>
      <TitleProject>Titulo de proyecto</TitleProject>
      <Creadores>Creadores</Creadores>
      <Fecha>Fecha de publicacion</Fecha>
    </CategoryWrap>
  );
};

export default Letras;
const CategoryWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
const Carrera = styled.div`
  position: absolute;
  width: 98%;
  height: 7%;
  left: 0%;
  top: 3%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15em;
  color: #2e2e2e;
`;
const TitleProject = styled.div`
  position: absolute;
  width: 168px;
  height: 21px;
  left: 10%;
  top: 82%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15em;
  color: #2e2e2e;
`;
const Creadores = styled.div`
  position: absolute;
  width: 86px;
  height: 16px;
  left: 10%;
  top: 92%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 137.02%;
  display: flex;
  align-items: center;
  letter-spacing: 0.15em;
  color: #5c5c5c;
`;
const Fecha = styled.div`
  position: absolute;
  width: 155px;
  height: 16px;
  left: 10%;
  top: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 137.02%;
  display: flex;
  align-items: center;
  letter-spacing: 0.15em;
  color: #5c5c5c;
`;
