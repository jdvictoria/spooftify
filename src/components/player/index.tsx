import React from 'react';
import {StyledDiv} from "../../styles/container";

export function Player(props: {isLocal: boolean}){
    return(
       <StyledDiv style={{height: props.isLocal ? '12.5% ': '15%'}}>

       </StyledDiv>
    )
}