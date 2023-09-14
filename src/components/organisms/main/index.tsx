import React from 'react';

import styled from "styled-components";
import {StyledDiv} from "../../../styles/container";

import {BigCard} from "../../molecules/nav_big_card";
import {SmallCard} from "../../molecules/nav_small_card";


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
                <SmallCard/>
                <BigCard/>
            </Nav>
            <Home>
                <HomeCard/>
            </Home>
        </StyledDiv>
    )
}