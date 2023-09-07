import React, {useState} from 'react';
import styled from "styled-components";
import {Tooltip} from "@mui/joy";

import {
    iconMappings,
    PrevIcon,
    NextIcon,
} from "../../../data/icons";

export const StyledButton = styled.img``;

export function PlayerButton(props: {meta: string}){
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const {
        normal,
        normal_hover,
        click,
        click_hover,
        title,
        altTitle,
    } = iconMappings[props.meta] || {};

    if (!normal || !normal_hover) {
        return null;
    }

    const imageSource = isClicked ? (isHovered ? click_hover : click) : (isHovered ? normal_hover : normal);
    const titleSource = isClicked ? altTitle || title : title;

    return(
        <Tooltip
            title={titleSource}
            placement="top"
            size="sm"
            variant="soft">
            <StyledButton
                src={imageSource}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
                style={{
                    marginLeft: 10,
                    marginRight: 10,
                    maxHeight: props.meta === 'play' ? '40px' : '25px',
                    maxWidth: props.meta === 'play' ? '40px' : '25px'
                }}
            />
        </Tooltip>
    )
}