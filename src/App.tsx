import React, {useState} from 'react';
import styled from "styled-components";
import {Player} from "./components/organisms/player";
import {Main} from "./components/organisms/main";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [isLocal, setIsLocal] = useState(true);

  return (
    <AppContainer>
      <Main isLocal={isLocal}/>
      <Player isLocal={isLocal}/>
    </AppContainer>
  );
}

export default App;
