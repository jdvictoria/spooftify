import React, {useState} from "react";

import styled from "styled-components";
import {NavigationIcon} from "../../atoms/nav_buttons";

const NavBigCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 97.5%;
  height: 80%;
  
  justify-content: center;
  align-items: center;
  
  margin-top: 4px;
  
  border-radius: 10px;
  background-color: #121212;
`;

const UpperDiv = styled.div`
  display: flex;
  position: relative;
  
  height: 21.5%;
  width: 97.5%;
  
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  justify-content: center;
  align-items: center;
`;

const LowerDiv = styled.div`
  background-color: red;
  height: 78.5%;
  width: 97.5%;
  overflow-y: scroll;
  text-align: justify;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #5A5A5A;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #898989;
    border-radius: 10px;
  }
`;


export function BigCard(){
    const [activeButton, setActiveButton] = useState('library');
    const [arrowButton, setArrowButton] = useState('expand');

    const handleButtonClick = (meta: string) => {
        setTimeout(() => {
            setActiveButton((prevActiveButton) =>
                prevActiveButton === meta ? '' : meta
            );
        }, 250);
    };

    const handleArrowClick = () => {
        if(arrowButton === 'expand') {
            setTimeout(() => {
                setArrowButton('collapse');
            }, 250);
        } else if(arrowButton === 'collapse') {
            setTimeout(() => {
                setArrowButton('expand');
            }, 250);
        }
    }

    return(
        <NavBigCard>
            <UpperDiv>
                <NavigationIcon
                    meta="library"
                    active={activeButton === 'library'}
                    onClick={() => handleButtonClick('library')}
                    plain={false}
                />
                <NavigationIcon
                    meta='add'
                    active={activeButton === 'add'}
                    onClick={() => handleButtonClick('add')}
                    plain={true}
                />
                <NavigationIcon
                    meta={arrowButton}
                    active={activeButton === arrowButton}
                    onClick={handleArrowClick}
                    plain={true}
                />
            </UpperDiv>
            <LowerDiv>

            </LowerDiv>
        </NavBigCard>
    )
}