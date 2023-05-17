import React from "react";
import styled from "styled-components";
import { FourthText } from "../components/Fourthtext/Fourthtext";

const FourthView = () => {
  return (
    <FourthViewStyles>
      <FourthTitleProyectos>
        <FourthText />
      </FourthTitleProyectos>
    </FourthViewStyles>
  );
};

export default FourthView;

const FourthTitleProyectos = styled.div`
  position: absolute;
  width: 15%%;
  height: 32%;
  left: 14%;
  top: 328%;
  background: red;
`;

const FourthViewStyles = styled.div`
  width: 100%;
  height: 90%;
  margin: 0;
  padding: 0;
`;
