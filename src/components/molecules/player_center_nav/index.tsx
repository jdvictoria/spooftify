import React from 'react';

import styled from "styled-components";
import {LinearProgress} from "@mui/joy";
import {ButtonsGrid, ProgressGrid} from "../../../styles/container";

import {PlayerIcon} from "../../atoms/player_button";

const StyledNav = styled.div`
  flex-direction: column;

  min-width: 37.5%;
  height: 100%;
  
  justify-content: center;
  align-items: center;
`;

const ProgressTimer = styled.span`
  color: #999999;
  font-size: 12px;
  font-family: "Circular Book",sans-serif;
  
  margin-right: 10px;
  margin-left: 10px;
`

export function CenterNav(){
    return(
        <StyledNav>
            <ButtonsGrid>
                <PlayerIcon meta={'shuffle'}/>
                <PlayerIcon meta={'prev'}/>
                <PlayerIcon meta={'play'}/>
                <PlayerIcon meta={'next'}/>
                <PlayerIcon meta={'repeat'}/>
            </ButtonsGrid>
            <ProgressGrid>
                <ProgressTimer>
                    0:00
                </ProgressTimer>
                <LinearProgress determinate color='neutral' value={75} size='sm'/>
                <ProgressTimer>
                    0:00
                </ProgressTimer>
            </ProgressGrid>
        </StyledNav>
    )
}