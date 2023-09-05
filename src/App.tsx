import React from 'react';
import styled from "styled-components";

const isRunLocal = false;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  
  width: 100%;
  height: ${isRunLocal ? '87.5% ': '85%'};
  
  justify-content: center;
  align-items: center;
  
  background-color: red;
`;

export const Footer = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: ${isRunLocal ? '12.5% ': '15%'};
  
  justify-content: center;
  align-items: center;
  
  background-color: #000000;
`;

export const Nav = styled.div`
  display: flex;
  position: relative;

  width: 20%;
  height: 100%;
  
  justify-content: center;
  align-items: center;
  
  background-color: green;
`;

export const Home = styled.div`
  position: relative;
  
  width: 80%;
  height: 100%;
  
  justify-content: center;
  align-items: center;
  
  background-color: yellow;
`;



function App() {
  return (
    <AppContainer>
      <Body>
          <Nav/>
          <Home/>
      </Body>
      <Footer>

      </Footer>
    </AppContainer>
  );
}

export default App;
