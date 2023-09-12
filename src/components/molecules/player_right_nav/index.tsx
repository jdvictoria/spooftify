import React from 'react';

import styled from "styled-components";
import {ProgressGrid} from "../../../styles/container";

import {PlayerIcon} from "../../atoms/player_button";
import {ProgressBar} from "../../atoms/player_progress";

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
                <ProgressBar/>
            </ProgressGrid>
            <PlayerIcon meta={'full'}/>
        </StyledNav>
    )
}