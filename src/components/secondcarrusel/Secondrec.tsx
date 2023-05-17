import React, { useState } from "react";
import styled from "styled-components";
interface SecondRectangulosProps {
  mensaje: string;
}
export const Secondrec: React.FC<SecondRectangulosProps> = ({ mensaje }) => {
  return (
    <Recmain>
      <Primero>
        <span>{mensaje}</span>
      </Primero>
    </Recmain>
  );
};
const Recmain = styled.div`
  width: 100%;
  height: 100%;
  background: #dedede;

  opacity: 1;
`;
const Primero = styled.div`
  left: 7%;
  top: 30%;
  :span {
    width: 18%;
    height: 10%;
    left: 144px;
    top: 68px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 186.52%;
    display: flex;
    align-items: center;
    letter-spacing: 0.255em;
    color: #5c5c5c;
  }
`;
