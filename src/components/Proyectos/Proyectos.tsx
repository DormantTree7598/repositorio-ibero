import React from "react";
import styled from "styled-components";

export const Proyectos = () => {
  return (
    <SecondTitle>
      <SecondEncabezado>Proyectos destacados</SecondEncabezado>
      <SecondSubtitle>
        Lorem ipsum sit amet, consectetur adipiscing
      </SecondSubtitle>
      <Secondline></Secondline>
      <SecondCarrucel></SecondCarrucel>
    </SecondTitle>
  );
};
const SecondTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
const SecondEncabezado = styled.div`
  position: absolute;
  width: 32%;
  height: 15%;
  left: 0%;
  top: 35%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 650;
  font-size: 90px;
  line-height: 125px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15em;
  color: #393939;
`;
const SecondSubtitle = styled.div`
  position: absolute;
  width: 57%;
  height: 15%;
  left: 0%;
  top: 118%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 430;
  font-size: 20px;
  line-height: 186.52%;
  display: flex;
  align-items: center;
  letter-spacing: 0.255em;
  color: #5c5c5c;
`;
const Secondline = styled.div`
  position: absolute;
  width: 70%;
  height: 0px;
  left: 0%;
  top: 100%;
  border: 1px solid #5c5c5c;
`;
const SecondCarrucel = styled.div``;
