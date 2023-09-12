import React, {useState} from 'react';

import {LinearProgress, Slider} from "@mui/joy";
import styled from "styled-components";

const ProgressDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  
  width: 100%;
  max-height: 15px;
`;
export function ProgressBar() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <ProgressDiv onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered ? (
                <Slider
                    defaultValue={75}
                    sx={{
                        "--Slider-trackSize": "5px"
                    }}
                />
            ) : (
                <LinearProgress
                    determinate
                    value={75}
                    color='primary'
                    size='sm'
                />
            )}
        </ProgressDiv>
    );
}