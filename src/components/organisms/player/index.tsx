import React from 'react';

import styled from "styled-components";
import {LinearProgress} from "@mui/joy";
import {ProgressGrid, ButtonsGrid, StyledDiv, ArtistStack} from "../../../styles/container";

import {PlayerIcon} from "../../atoms/player_button";
import {PlayerArtist} from "../../atoms/player_artist";

export const LeftNav = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;

  left: 7.5px;
  height: 100%;
  
  justify-content: center;
  align-items: center;
`;

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

  right: 2.5px;
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

export const ArtistSong = styled.span`
  color: #ffffff;
  font-size: 13px;
  font-family: "Circular Medium",sans-serif;
  letter-spacing: .5px;
  
  margin-bottom: 2.5px;
`

export const ArtistName = styled.span`
  color: #999999;
  font-size: 10px;
  font-family: "Circular Book",sans-serif;
  letter-spacing: .5px;
  
  margin-top: 2.5px;
`

export function Player(props: {isLocal: boolean}){
    return(
       <StyledDiv style={{height: props.isLocal ? '12.5% ': '15%', flexDirection: 'row'}}>
           <LeftNav>
               <PlayerArtist/>
               <ArtistStack>
                    <ArtistSong>
                        Fall In Love Alone
                    </ArtistSong>
                    <ArtistName>
                        Stacey Ryan
                    </ArtistName>
               </ArtistStack>
               <PlayerIcon meta={'heart'}/>
           </LeftNav>
           <CenterNav>
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
           </CenterNav>
           <RightNav>
               <PlayerIcon meta={'playing'}/>
               <PlayerIcon meta={'lyrics'}/>
               <PlayerIcon meta={'queue'}/>
               <PlayerIcon meta={'devices'}/>
               <PlayerIcon meta={'volume'}/>
               <ProgressGrid style={{minWidth: 90}}>
                   <LinearProgress determinate color='neutral' value={100} size='sm'/>
               </ProgressGrid>
               <PlayerIcon meta={'full'}/>
           </RightNav>
       </StyledDiv>
    )
}