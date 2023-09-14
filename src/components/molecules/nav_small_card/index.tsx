import React, {useState} from 'react';

import styled from "styled-components";
import {NavigationIcon} from "../../atoms/nav_buttons";

const NavSmallCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 97.5%;
  height: 18.5%;
  
  justify-content: center;
  align-items: flex-start;
  
  margin-top: 8px;
  margin-bottom: 4px;
  
  border-radius: 10px;
  background-color: #121212;
`;

export function SmallCard(){
    const [activeButton, setActiveButton] = useState('home');

    const handleButtonClick = (meta: string) => {
        setActiveButton(meta);
    };

    return(
        <NavSmallCard>
            <NavigationIcon meta="home" active={activeButton === 'home'} onClick={handleButtonClick} plain={false}/>
            <NavigationIcon meta="search" active={activeButton === 'search'} onClick={handleButtonClick} plain={false}/>
        </NavSmallCard>
    )
}