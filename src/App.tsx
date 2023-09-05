import React, {useState} from 'react';
import styled from "styled-components";
import {Player} from "./components/player";
import {Main} from "./components/main";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [isLocal, setIsLocal] = useState(false);

  return (
    <AppContainer>
      <Main isLocal={isLocal}/>
      <Player isLocal={isLocal}/>
    </AppContainer>
  );
}

export default App;
