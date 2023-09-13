import React, {useState} from 'react';

import styled from "styled-components";

const StyledButton = styled.img``;

export function SmallNavButton(props: {meta: string}){
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return(
        <>
            <StyledButton
                src={imageSource}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
                style={{

                }}
            />
        </>
    )
}