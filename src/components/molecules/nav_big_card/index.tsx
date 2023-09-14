import React from "react";

import styled from "styled-components";

const NavBigCard = styled.div`
  display: flex;
  position: relative;

  width: 97.5%;
  height: 80%;
  
  justify-content: center;
  align-items: center;
  
  margin-top: 4px;
  
  border-radius: 10px;
  background-color: #121212;
`;

export function BigCard(){
    return(
        <NavBigCard>
        </NavBigCard>
    )
}