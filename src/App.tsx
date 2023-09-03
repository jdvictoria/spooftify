import React from 'react';
import styled from "styled-components";
import {Container} from "@mui/joy";

const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  
  justify-content: center; // vertical
  align-items: center; // horizontal
  
  max-width: 100%;
  height: 100vh;
  
  background-color: red;
`;

function App() {
  return (
    <AppContainer maxWidth={false}>
    </AppContainer>
  );
}

export default App;
