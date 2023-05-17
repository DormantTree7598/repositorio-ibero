import React from "react";
import styled from "styled-components";

export const InicioT = () => {
  return (
    <TituloWrap>
      <Encabezado>DEPARTAMENTO DE CIENCIAS E INGENIERIAS</Encabezado>
      <Subtitulo>INSTITUTO DE DISEÑO E INOVACION TECNOLOGICA</Subtitulo>
      <Line></Line>
      <Sobreus>Sobre nosotros</Sobreus>
      <Buttom>
        <Login>
          <span>Conoce más</span>
        </Login>
      </Buttom>
    </TituloWrap>
  );
};

export default InicioT;

const TituloWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
const Encabezado = styled.div`
  position: absolute;
  width: 58%;
  height: 18%;
  left: 8%;
  top: 21%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 83px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15em;
  color: #393939;
`;
const Subtitulo = styled.div`
  position: relative;
  width: 44%;
  height: 4%;
  left: 8%;
  top: 55%;
  font-family: "DM Sans";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 202.7%;
  display: flex;
  align-items: center;
  letter-spacing: 0.435em;
  color: #393939;
`;
const Line = styled.div`
  position: absolute;
  width: 626px;
  height: 0px;
  left: 8%;
  top: 50%;
  border: 1px solid #5c5c5c;
`;
const Sobreus = styled.div`
position: absolute;
width: 54%;
height: 9%;
left: 7%;
top: 85%;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 83px;
display: flex;
align-items: center;
letter-spacing: 0.15em;

color: rgba(57, 57, 57, 0.4);
`;
const Buttom = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 12%;
  height: 6%;
  left: 8%;
  top: 67%;
  
`;
const Login = styled.button`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ff4060;
  border-radius: 64px;
  text-transform: uppercase;
  color: #1a202c;
  :span {
    width: 127px;
    height: 22px;
    left: 325px;
    top: 487px;
    
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #000000;
    
  }
`;
