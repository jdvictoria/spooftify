import React from 'react';

import {StyledDiv} from "../../../styles/container";

import {LeftNav} from "../../molecules/player_left_nav";
import {RightNav} from "../../molecules/player_right_nav";
import {CenterNav} from "../../molecules/player_center_nav";

export function Player(props: {isLocal: boolean}){
    return(
       <StyledDiv style={{height: props.isLocal ? '12.5% ': '15%', flexDirection: 'row'}}>
           <LeftNav/>
           <CenterNav/>
           <RightNav/>
       </StyledDiv>
    )
}