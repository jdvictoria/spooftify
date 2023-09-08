import React, {useState} from 'react';

import {Tooltip} from "@mui/joy";
import styled from "styled-components";
import {iconMappings} from "../../../data/icons";

const StyledButton = styled.img``;

export function PlayerIcon(props: {meta: string}){
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

    const imageSource =
        isClicked ? (isHovered ? click_hover : click)
            : (isHovered ? normal_hover : normal);
    const titleSource =
        isClicked ? altTitle || title : title;

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
                    marginLeft: 6.5,
                    marginRight: props.meta === 'playing' ? 12 : 6.5,
                    maxHeight: props.meta === 'play' ? '40px' : '25px',
                    maxWidth: props.meta === 'play' ? '40px' : '25px'
                }}
            />
        </Tooltip>
    )
}