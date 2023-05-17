import "./App.css";
import ProjectMain from "./views/ProjectMain";
import styled from "styled-components";
import { Organizer } from "./pages/Organizer";

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  color: red;
`;

const App = () => {
  return (
    <AppDiv>
      <Organizer />
    </AppDiv>
  );
};

export default App;
