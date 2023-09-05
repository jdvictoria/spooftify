import React from 'react';
import {CenterButtons, StyledDiv} from "../../../styles/container";
import {PlayerButton} from "../../atoms/player_button";

export function Player(props: {isLocal: boolean}){
    return(
       <StyledDiv style={{height: props.isLocal ? '12.5% ': '15%'}}>
           <CenterButtons>
               <PlayerButton meta={'prev'}/>
               <PlayerButton meta={'play'}/>
               <PlayerButton meta={'next'}/>
           </CenterButtons>
       </StyledDiv>
    )
}