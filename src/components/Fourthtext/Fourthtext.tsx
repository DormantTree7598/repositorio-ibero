import React from "react";
import styled from "styled-components";

export const FourthText = () => {
  return (
    <Fourthtitle>
      <Tercertitulo>
        MAQUINARIA
        <SubtitulosDiv>
          <p>LABOLATORIOS </p>
          <p>FABLAB </p>
          <p>INCUBADORAS</p>
          <p>CO-WORKING</p>
        </SubtitulosDiv>
      </Tercertitulo>
    </Fourthtitle>
  );
};
const Fourthtitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
const Tercertitulo = styled.div`
  position: absolute;
  width: 100%;
  height: 7%;
  left: 35%;
  top: 18%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 202.7%;
  letter-spacing: 0.435em;
  color: #ff314d;
  opacity: 1;
`;
const SubtitulosDiv = styled.div`
  font-family: "DM Sans";
  margin: 10%;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 202.7%;
  letter-spacing: 0.435em;
  color: #393939;
`;
