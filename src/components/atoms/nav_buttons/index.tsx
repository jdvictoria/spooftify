import React, {useState} from 'react';

import styled from "styled-components";
import {iconMappings} from "../../../data/icons";

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
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.span`
  font-size: 15px;
  font-weight: bold;
  font-family: "Circular Bold" , sans-serif;
  letter-spacing: .5px;
  justify-content: center;
  align-items: center;
`;

export function SmallNavButton(props: { meta: string; active: boolean; onClick: (meta: string) => void }) {
    const [isHovered, setIsHovered] = useState(false);

    const { normal, normal_hover, click } = iconMappings[props.meta] || {};

    const imageSource = props.active ? click : isHovered ? normal_hover : normal;
    const textSource = props.meta === 'home' ? 'Home' : 'Search';

    return (
        <StyledContainer>
            <StyledButton
                src={imageSource}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => props.onClick(props.meta)} // Pass meta to the parent
                style={{
                    margin: '10px 20px 10px 20px',
                    maxHeight: '25px',
                    maxWidth: '25px',
                }}
            />
            <StyledText
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => props.onClick(props.meta)} // Pass meta to the parent
                style={{
                    color: props.active ? '#ffffff' : isHovered ? '#ffffff' : '#b3b3b3',
                }}
            >
                {textSource}
            </StyledText>
        </StyledContainer>
    );
}