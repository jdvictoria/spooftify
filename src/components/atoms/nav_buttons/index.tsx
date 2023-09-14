import React, {useState} from 'react';

import {Tooltip} from "@mui/joy";
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
  max-height: 25px;
  max-width: 25px;

  margin: 10px 20px 10px 20px;
  
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

function toTitleCase(text: string) {
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export function NavigationIcon(props: { meta: string; active: boolean; onClick: (meta: string) => void; plain: boolean}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHeld, setIsHeld] = useState(false);

    const {
        normal,
        normal_hover,
        click,
        click_hover,
        title,
    } = iconMappings[props.meta] || {};

    const imageSource =
        props.active ? (isHovered ? click_hover : click)
        : (isHovered ? normal_hover : normal);

    const expandSource = isHeld ? click : (isHovered ? normal_hover : normal);

    const titleSource = title;

    const textSource = toTitleCase(props.meta);

    return (
        <Tooltip
            title={titleSource}
            placement="top"
            size="sm"
            variant="soft">
            <StyledContainer>
                <StyledButton
                    src={props.meta === 'expand' || props.meta === 'collapse' ? expandSource : imageSource}
                    onMouseDown={() => setIsHeld(true)}
                    onMouseUp={() => setIsHeld(false)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => props.onClick(props.meta)}
                />
                {!props.plain && (
                    <StyledText
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => props.onClick(props.meta)}
                        style={{
                            color: props.active ? '#ffffff' : isHovered ? '#ffffff' : '#b3b3b3',
                        }}
                    >
                        {textSource}
                    </StyledText>
                )}
            </StyledContainer>
        </Tooltip>
    );
}