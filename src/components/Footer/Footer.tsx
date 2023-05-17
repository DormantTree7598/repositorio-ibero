import React from "react";
import styled from "styled-components";
import Logo from "../../assets/LogoIbero.png";
import Mapa from "../../assets/Mapa.png";

export const Footer = () => {
  return (
    <FooterWrap>
      <Section gridArea={" 1 / 1 / 2 / 2"}>
        <Footerdiv>
          {" "}
          <img src={Logo} />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </Footerdiv>
      </Section>
      <Section gridArea={" 1 / 2 / 2 / 3"}>
        <Secondiv>
          <p>Explorar </p>
          <SubtitlesDiv>
            <p>Lorem ipsum </p>
            <p>Lorem ipsum dolor sit </p>
            <p>Lorem ipsum dolor </p>
            <p>Lorem ipsum dolor sit amet </p>
          </SubtitlesDiv>
        </Secondiv>
      </Section>
      <Section gridArea={" 1 / 3 / 2 / 4"}>
        <Septimodiv>
          <p>Ubicacion </p>
          <img src={Mapa} />
        </Septimodiv>
      </Section>
      <Section gridArea={"1 / 4 / 2 / 5"}>
        <Novenodiv>
          <p>Contacto</p>
          <SubtitlesDiv>
            <p>Lorem ipsum </p>
            <p>Lorem ipsum dolor sit </p>
            <p>Lorem ipsum dolor </p>
            <p>Lorem ipsum dolor sit amet </p>
          </SubtitlesDiv>
        </Novenodiv>
      </Section>
    </FooterWrap>
  );
};

export default Footer;
const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 535px;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  background-color: #d9d9d9;
`;
const Section = styled.div<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};
  width: 100%;
  height: 100%;

  color: red;
  display: flex;
  padding-lef: 2.5%;
  flex-direction: column;
`;
const Footerdiv = styled.div`
  color: black;
  margin: 10%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 191.02%;
  letter-spacing: 0.1em;
`;
const Secondiv = styled.div`
  color: black;
  margin: 5%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 137.02%;
  letter-spacing: 0.1em;
`;
const SubtitlesDiv = styled.div`
  font-family: "Inter";
  margin: 10%;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 137.02%;
  letter-spacing: 0.1em;
  color: #111013;
`;

const Septimodiv = styled.div`
  font-family: "Inter";
  margin: 5%;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 137.02%;
  letter-spacing: 0.1em;
  color: #111013;
`;

const Novenodiv = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 137.02%;
  letter-spacing: 0.1em;
  color: #111013;
`;
