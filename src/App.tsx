import React from 'react';
import styled from "styled-components";
import {Container} from "@mui/joy";

const AppContainer = styled(Container)`
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
`;

export const Body = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: row;
  
  width: 100%;
  height: 80%;
  
  justify-content: center;
  align-items: center;
  
  background-color: red;
`;

export const Nav = styled(Container)`
  display: flex;
  position: relative;
  
  width: 100vw;
  height: 80vh;
  
  justify-content: center;
  align-items: center;
  
  background-color: red;
`;

export const Footer = styled(Container)`
  display: flex;
  position: relative;

  width: 100%;
  height: 20%;
  
  justify-content: center;
  align-items: center;
  
  background-color: orange;
`;

function App() {
  return (
    <AppContainer maxWidth={false} disableGutters>
      <Body maxWidth={false}>

      </Body>
      <Footer maxWidth={false}>

      </Footer>
    </AppContainer>
  );
}

export default App;
