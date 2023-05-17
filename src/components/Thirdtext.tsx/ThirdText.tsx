import React from "react";
import styled from "styled-components";

export const ThirdText = () => {
  return (
    <Thirdtitle>
      <Tercertitulo>‘’Lorem ipsum dolor‘’</Tercertitulo>
      <Thirdline></Thirdline>
      <ThirdParagraph>
        ‘’Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.’’
      </ThirdParagraph>
      <ThirdImage></ThirdImage>
    </Thirdtitle>
  );
};
const Thirdtitle = styled.div`
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 176.02%;
  /* or 28px */
  display: flex;
  align-items: center;
  text-align: center;
  color: #606060;
  opacity: 1;
`;
const Thirdline = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 25%;
  height: 0%;
  left: 37%;
  top: 23%;
  background: #606060;
  border: 2px solid #909090;
`;
const ThirdParagraph = styled.div`
  position: absolute;
  width: 96%;
  height: 28%;
  left: 5%;
  top: 25%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 176.02%;
  /* or 42px */
  display: flex;
  align-items: center;
  text-align: center;
  color: #606060;
`;
const ThirdImage = styled.div`
  position: absolute;
  width: 100%;
  height: 76%;
  left: 195%;
  top: 10%;
  background-color: black;
`;
