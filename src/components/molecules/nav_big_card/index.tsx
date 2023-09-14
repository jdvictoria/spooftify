import React from "react";

import styled from "styled-components";

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
  background-color: yellow;
  height: 21.5%;
  width: 100%;
  
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const LowerDiv = styled.div`
  background-color: red;
  height: 78.5%;
  width: 100%;
  overflow-y: scroll;
  text-align: justify;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;


export function BigCard(){
    return(
        <NavBigCard>
            <UpperDiv>

            </UpperDiv>
            <LowerDiv>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It is a long established fact that
                a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable English.
                Many desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy.
            </LowerDiv>
        </NavBigCard>
    )
}