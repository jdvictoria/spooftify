import React, {useState} from 'react';

import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  
  height: 32.5px;
  width: 72.5px;

  margin: 2.5px 2.5px 7.5px 10px;
  
  justify-content: center;
  align-items: center;
  
  border-radius: 20px;
  background-color: #222222;
`;

const StyledText = styled.span`
  font-size: 13px;
  font-family: "Circular Book" , sans-serif;
  
  color: white;
  letter-spacing: .5px;
  
  justify-content: center;
  align-items: center;
`;

function toTitleCase(text: string) {
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export function FilterIcon(props: {meta: string}){
    const [isHovered, setIsHovered] = useState(false);

    const textSource = toTitleCase(props.meta);

    return(
        <StyledButton
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: isHovered ? '#2A2A2A' : '#222222',
            }}
        >
            <StyledText>
                {textSource}
            </StyledText>
        </StyledButton>
    )
}