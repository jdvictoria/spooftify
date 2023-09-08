import React from 'react';

import styled from "styled-components";

import StaceyRyan from '../../../assets/image/staceyryan.jpeg';

const StyledImage = styled.img`
  width: 57.5px;
  height: 57.5px;
  
  margin-left: 7px;
  margin-right: 7px;
  
  border-radius: 5px;
`

export function PlayerArtist(){
    return(
        <StyledImage
            src={StaceyRyan}
        />
    )
}