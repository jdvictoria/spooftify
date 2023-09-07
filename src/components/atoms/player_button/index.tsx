import React, {useState} from 'react';
import styled from "styled-components";
import {Tooltip} from "@mui/joy";

import {
    ShuffleIcon,
    PrevIcon,
    PlayIcon,
    NextIcon,
    RepeatIcon
} from "../../../data/icons";

export const StyledButton = styled.img``;

export function PlayerButton(props: {meta: string}){
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    let imageSource;
    let titleSource;

    if (props.meta === 'play') {
        imageSource = isClicked ? (isHovered ? PlayIcon.click_hover : PlayIcon.click) : (isHovered ? PlayIcon.normal_hover : PlayIcon.normal);
        titleSource = isClicked ? "Pause" : "Play";
    } else if (props.meta === 'prev') {
        imageSource = isHovered ? PrevIcon.normal_hover : PrevIcon.normal;
        titleSource = "Previous";
    } else if (props.meta === 'next') {
        imageSource = isHovered ? NextIcon.normal_hover : NextIcon.normal;
        titleSource = "Next";
    } else if (props.meta === 'shuffle') {
        imageSource = isClicked ? (isHovered ? ShuffleIcon.click_hover : ShuffleIcon.click) : (isHovered ? ShuffleIcon.normal_hover : ShuffleIcon.normal);
        titleSource = isClicked ? "Disable Shuffle" : "Enable Shuffle";
    } else if (props.meta === 'repeat') {
        imageSource = isClicked ? (isHovered ? RepeatIcon.click_hover : RepeatIcon.click) : (isHovered ? RepeatIcon.normal_hover : RepeatIcon.normal);
        titleSource = isClicked ? "Disable Repeat" : "Enable Repeat";
    }

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