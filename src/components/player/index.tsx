import React, {useState} from 'react';
import {CenterButtons, StyledDiv} from "../../styles/container";
import {PlayerButton} from "../../styles/buttons";

import PrevNormal from '../../assets/icons/prev_normal.svg';
import PrevHover from '../../assets/icons/prev_hover.svg';
import NextNormal from '../../assets/icons/next_normal.svg';
import NextHover from '../../assets/icons/next_hover.svg'

import PauseNormal from '../../assets/icons/pause_normal.svg';
import PauseHover from '../../assets/icons/pause_hover.svg';
import PlayNormal from '../../assets/icons/play_normal.svg';
import PlayHover from '../../assets/icons/play_hover.svg';

export function Player(props: {isLocal: boolean}){
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const src = isClicked ? (isHovered ? PauseHover : PauseNormal) : (isHovered ? PlayHover : PlayNormal);

    return(
       <StyledDiv style={{height: props.isLocal ? '12.5% ': '15%'}}>
           <CenterButtons>
               <PlayerButton
                   src={src}
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}
                   onClick={handleClick}
               />
           </CenterButtons>
       </StyledDiv>
    )
}