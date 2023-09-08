import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  
  justify-content: center;
  align-items: center;
  
  background-color: #000000;
`;

export const ButtonsGrid = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  margin-top: 12.5px;
  margin-bottom: 6.25px;
  
  justify-content: center;
  align-items: center;
`

export const ProgressGrid = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;
`

export const ArtistStack = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  margin-left: 7px;
  margin-right: 7px;
  
  justify-content: center;
  align-items: flex-start;
`