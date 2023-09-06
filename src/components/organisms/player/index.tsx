import React from 'react';
import {CenterProgressGrid, CenterButtonsGrid, StyledDiv} from "../../../styles/container";
import {PlayerButton} from "../../atoms/player_button";
import {LinearProgress} from "@mui/joy";
import styled from "styled-components";

export const CenterNav = styled.div`
  flex-direction: column;

  width: 33%;
  height: 100%;
  
  justify-content: center;
  align-items: center;
`;

export function Player(props: {isLocal: boolean}){
    return(
       <StyledDiv style={{height: props.isLocal ? '12.5% ': '15%'}}>
           <CenterNav>
               <CenterButtonsGrid>
                   <PlayerButton meta={'shuffle'}/>
                   <PlayerButton meta={'prev'}/>
                   <PlayerButton meta={'play'}/>
                   <PlayerButton meta={'next'}/>
                   <PlayerButton meta={'repeat'}/>
               </CenterButtonsGrid>
               <CenterProgressGrid>
                   <LinearProgress determinate color='neutral' value={75} sx={{
                       "--LinearProgress-thickness": "3.5px",
                   }}/>
               </CenterProgressGrid>
           </CenterNav>
       </StyledDiv>
    )
}