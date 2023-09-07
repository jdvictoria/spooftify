import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  
  justify-content: center;
  align-items: center;
  
  background-color: #000000;
`;

export const CenterButtonsGrid = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  margin-top: 12.5px;
  margin-bottom: 6.25px;
  
  justify-content: center;
  align-items: center;
`

export const CenterProgressGrid = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const RightButtonsGrid = styled.div`
  display: flex;
  position: relative;
  flex-direction: row-reverse;

  justify-content: center;
  align-items: center;
`