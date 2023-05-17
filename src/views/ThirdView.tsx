import React from "react";
import styled from "styled-components";
import { ThirdText } from "../components/Thirdtext.tsx/ThirdText";

const ThirdView = () => {
  return (
    <ThirdViewStyles>
      <ThirdTitleProyectos>
        <ThirdText />
      </ThirdTitleProyectos>
    </ThirdViewStyles>
  );
};

export default ThirdView;

const ThirdTitleProyectos = styled.div`
  position: absolute;
  width: 28%;
  height: 69%;
  left: 14%;
  top: 228%;
`;

const ThirdViewStyles = styled.div`
  width: 100%;
  height: 90%;
  margin: 0;
  padding: 0;
  background-color: #d9d9d9;
`;
