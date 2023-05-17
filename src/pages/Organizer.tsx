import React from "react";
import styled from "styled-components";
import ProjectMain from "../views/ProjectMain";
import SecondView from "../views/SecondView";
import ThirdView from "../views/ThirdView";
import FourthView from "../views/ForthView";
import Footer from "../components/Footer/Footer";
export const Organizer = () => {
  return (
    <OrganizerGrid>
      <Section gridArea="1 / 1 / 2 / 2">
        <ProjectMain />
      </Section>
      <Section gridArea="2 / 1 / 3 / 2">
        <SecondView />
      </Section>
      <Section gridArea="4 / 1 / 5 / 2">
        <ThirdView />
      </Section>
      <Section gridArea="5 / 1 / 6 / 2">
        <FourthView />
      </Section>
      <Section gridArea="6 / 1 / 7 / 2 ">
        <Footer />
      </Section>
    </OrganizerGrid>
  );
};
const OrganizerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1080px) 535px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const Section = styled.div<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};
  width: 100%;
`;
