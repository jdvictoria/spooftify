import React, {useState} from 'react';
import styled from "styled-components";
import {Tooltip} from "@mui/joy";

import PrevNormal from '../../../assets/icons/prev_normal.svg';
import PrevHover from '../../../assets/icons/prev_hover.svg';
import NextNormal from '../../../assets/icons/next_normal.svg';
import NextHover from '../../../assets/icons/next_hover.svg'

import PauseNormal from '../../../assets/icons/pause_normal.svg';
import PauseHover from '../../../assets/icons/pause_hover.svg';
import PlayNormal from '../../../assets/icons/play_normal.svg';
import PlayHover from '../../../assets/icons/play_hover.svg';

import RepeatNormal from '../../../assets/icons/repeat_normal.svg';
import RepeatHover from '../../../assets/icons/repeat_hover.svg';
import RepeatClicked from '../../../assets/icons/repeat_clicked.svg';
import RepeatClickedHover from '../../../assets/icons/repeat_clicked_hover.svg'

import ShuffleNormal from '../../../assets/icons/shuffle_normal.svg';
import ShuffleHover from '../../../assets/icons/shuffle_hover.svg';
import ShuffleClicked from '../../../assets/icons/shuffle_clicked.svg';
import ShuffleClickedHover from '../../../assets/icons/shuffle_clicked_hover.svg'

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
        imageSource = isClicked ? (isHovered ? PauseHover : PauseNormal) : (isHovered ? PlayHover : PlayNormal);
        titleSource = isClicked ? "Pause" : "Play";
    } else if (props.meta === 'prev') {
        imageSource = isHovered ? PrevHover : PrevNormal;
        titleSource = "Previous";
    } else if (props.meta === 'next') {
        imageSource = isHovered ? NextHover : NextNormal;
        titleSource = "Next";
    } else if (props.meta === 'shuffle') {
        imageSource = isClicked ? (isHovered ? ShuffleClickedHover : ShuffleClicked) : (isHovered ? ShuffleHover : ShuffleNormal);
        titleSource = isClicked ? "Disable Shuffle" : "Enable Shuffle";
    } else if (props.meta === 'repeat') {
        imageSource = isClicked ? (isHovered ? RepeatClickedHover : RepeatClicked) : (isHovered ? RepeatHover : RepeatNormal);
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