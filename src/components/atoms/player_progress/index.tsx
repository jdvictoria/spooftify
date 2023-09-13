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
                    color='success'
                    variant='solid'
                    sx={{
                        "--Slider-trackSize": "4px",
                    }}
                />
            ) : (
                <LinearProgress
                    determinate
                    color='success'
                    variant='solid'
                    value={75}
                    size='sm'
                />
            )}
        </ProgressDiv>
    );
}