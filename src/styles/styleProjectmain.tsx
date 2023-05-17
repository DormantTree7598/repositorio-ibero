import styled from "styled-components";
import Idit from "../assets/Idit.png";

export const ProjectMainDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(to left, rgba(245, 246, 252, 0.12), #f0f0f0),
    url(${Idit});
  background-size: cover;
  background-position: center;
`;
