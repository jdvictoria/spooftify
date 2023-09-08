import React from 'react';

import styled from "styled-components";
import {LinearProgress} from "@mui/joy";
import {PlayerIcon} from "../../atoms/player_button";
import {ProgressGrid} from "../../../styles/container";

const StyledNav = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;

  right: 2.5px;
  height: 100%;
  
  justify-content: center;
  align-items: center;
`;

export function RightNav(){
    return(
        <StyledNav>
            <PlayerIcon meta={'playing'}/>
            <PlayerIcon meta={'lyrics'}/>
            <PlayerIcon meta={'queue'}/>
            <PlayerIcon meta={'devices'}/>
            <PlayerIcon meta={'volume'}/>
            <ProgressGrid style={{minWidth: 90}}>
                <LinearProgress determinate color='neutral' value={100} size='sm'/>
            </ProgressGrid>
            <PlayerIcon meta={'full'}/>
        </StyledNav>
    )
}