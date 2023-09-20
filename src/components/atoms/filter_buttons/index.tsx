import React from 'react';

import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: 27.5px;
  
  margin-top: 10px;
  margin-bottom: 10px;
  
  justify-content: flex-start;
  align-items: center;
`;

const StyledButton = styled.img`
  height: 25px;
  width: 25px;

  margin: 10px 20px 10px 20px;
  
  justify-content: center;
  align-items: center;
  
  border-radius: 10px;
  background-color: #222222;
`;

export function FilterIcon(props: {meta: string}){
    return(
        <StyledContainer>
            <StyledButton>

            </StyledButton>
        </StyledContainer>
    )
}