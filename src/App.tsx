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
  flex-direction: column;

  width: 20%;
  height: 100%;
  
  justify-content: center;
  align-items: flex-end;
  
  background-color: #000000;
`;

export const NavSmallCard = styled.div`
  display: flex;
  position: relative;

  width: 97.5%;
  height: 18.5%;
  
  justify-content: center;
  align-items: center;
  
  margin-top: 8px;
  margin-bottom: 4px;
  
  border-radius: 10px;
  background-color: #121212;
`;

export const NavBigCard = styled.div`
  display: flex;
  position: relative;

  width: 97.5%;
  height: 80%;
  
  justify-content: center;
  align-items: center;
  
  margin-top: 4px;
  
  border-radius: 10px;
  background-color: #121212;
`;


export const Home = styled.div`
  display: flex;
  position: relative;
  
  width: 80%;
  height: 100%;
  
  justify-content: center;
  align-items: flex-end;
  
  background-color: #000000;
`;

export const HomeCard = styled.div`
  display: flex;
  position: relative;

  width: 98.5%;
  height: 98.5%;
  
  justify-content: center;
  align-items: center;
  
  margin-top: 4px;
  
  border-radius: 10px;
  background: linear-gradient(to bottom, #4e4c42, #121212);
`;

function App() {
  return (
    <AppContainer>
      <Body>
          <Nav>
              <NavSmallCard/>
              <NavBigCard/>
          </Nav>
          <Home>
              <HomeCard/>
          </Home>
      </Body>
      <Footer>

      </Footer>
    </AppContainer>
  );
}

export default App;
