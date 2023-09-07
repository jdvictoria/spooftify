import React from 'react';
import {CenterProgressGrid, CenterButtonsGrid, StyledDiv, RightButtonsGrid} from "../../../styles/container";
import {PlayerButton} from "../../atoms/player_button";
import {LinearProgress} from "@mui/joy";
import styled from "styled-components";

export const CenterNav = styled.div`
  flex-direction: column;

  min-width: 37.5%;
  height: 100%;
  
  justify-content: center;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;

  right: 5px;
  height: 100%;
  
  justify-content: center;
  align-items: center;
`;

export const ProgressTimer = styled.span`
  color: #999999;
  font-size: 12px;
  font-family: "Circular Book",sans-serif;
  
  margin-right: 10px;
  margin-left: 10px;
`

export function Player(props: {isLocal: boolean}){
    return(
       <StyledDiv style={{height: props.isLocal ? '12.5% ': '15%', flexDirection: 'row'}}>
           <CenterNav>
               <CenterButtonsGrid>
                   <PlayerButton meta={'shuffle'}/>
                   <PlayerButton meta={'prev'}/>
                   <PlayerButton meta={'play'}/>
                   <PlayerButton meta={'next'}/>
                   <PlayerButton meta={'repeat'}/>
               </CenterButtonsGrid>
               <CenterProgressGrid>
                   <ProgressTimer>
                       0:00
                   </ProgressTimer>
                   <LinearProgress determinate color='neutral' value={75} size='sm'/>
                   <ProgressTimer>
                       0:00
                   </ProgressTimer>
               </CenterProgressGrid>
           </CenterNav>
           <RightNav>
               <RightButtonsGrid>
                   <PlayerButton meta={'full'}/>
               </RightButtonsGrid>
           </RightNav>
       </StyledDiv>
    )
}