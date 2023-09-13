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

// @ts-ignore
export function ProgressBar({progressValue, setProgressValue}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        setProgressValue(newValue as number[]);
    };

    return (
        <ProgressDiv onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered ? (
                <Slider
                    defaultValue={progressValue}
                    color='success'
                    variant='solid'
                    sx={{
                        "--Slider-trackSize": "4px",
                    }}
                    onChange={handleChange}
                />
            ) : (
                <LinearProgress
                    determinate
                    value={progressValue}
                    color='success'
                    variant='solid'
                    size='sm'
                />
            )}
        </ProgressDiv>
    );
}