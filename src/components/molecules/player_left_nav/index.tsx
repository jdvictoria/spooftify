import React from 'react';

import styled from "styled-components";
import {ArtistStack} from "../../../styles/container";

import {PlayerIcon} from "../../atoms/player_button";
import {PlayerArtist} from "../../atoms/player_artist";

const StyledNav = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;

  left: 7.5px;
  height: 100%;
  
  justify-content: center;
  align-items: center;
`;

const ArtistSong = styled.span`
  color: #ffffff;
  font-size: 13px;
  font-family: "Circular Medium", sans-serif;
  letter-spacing: .5px;
  
  margin-bottom: 2.5px;
`

const ArtistName = styled.span`
  color: #999999;
  font-size: 10px;
  font-family: "Circular Book", sans-serif;
  letter-spacing: .5px;
  
  margin-top: 2.5px;
`

export function LeftNav(){
    return(
        <StyledNav>
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
        </StyledNav>
    )
}