import React, {useState} from 'react';

import styled from "styled-components";
import {Main} from "./components/organisms/main";
import {Player} from "./components/organisms/player";

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
