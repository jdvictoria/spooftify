import React from 'react';

import styled from "styled-components";

const NavSmallCard = styled.div`
  display: flex;
  position: relative;

  width: 97.5%;
  height: 18.5%;
  
  justify-content: center;
  align-items: center;
  
  margin-top: 8px;
  margin-bottom: 4px;
  
  border-radius: 10px;
  background-color: #121212;
`;

export function SmallCard(){
    return(
        <NavSmallCard>

        </NavSmallCard>
    )
}