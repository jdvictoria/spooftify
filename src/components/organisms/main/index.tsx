import React from 'react';
import styled from "styled-components";
import {StyledDiv} from "../../../styles/container";

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

export function Main(props: {isLocal: boolean}){
    return(
        <StyledDiv style={{height: props.isLocal ? '87.5% ': '85%'}}>
            <Nav>
                <NavSmallCard/>
                <NavBigCard/>
            </Nav>
            <Home>
                <HomeCard/>
            </Home>
        </StyledDiv>
    )
}