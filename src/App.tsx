import React from 'react';
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  
  width: 100vw;
  height: 80vh;
  
  justify-content: center;
  align-items: center;
  
  background-color: red;
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

export const Footer = styled.div`
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
