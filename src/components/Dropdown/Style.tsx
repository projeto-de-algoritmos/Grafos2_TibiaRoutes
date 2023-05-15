import styled from "styled-components";

export const Container = styled.button`
  height: 34px;
  border-radius: 2px;
  border-style: solid;
  border-width: 2px;
  border-color: #5a2800;
  padding: 8px;
  cursor: pointer;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 200px;
  @media (max-width: 750px){
    min-width: 34px;
    width: 34px;
    justify-content: center;
  }
`;

export const Label = styled.p`
  padding-left: 8px;
  color: #5a2800;
  font-weight: bolder;
  font-size: 20px;
  font-family: Verdana,Arial,Times New Roman,sans-serif;
  
  @media (max-width: 750px){
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 34px;
  border-radius: 8px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  width: 100%;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  overflow-y: auto;

  @media (max-width: 750px){
    width: 93vw;
  }
`;

export const Option = styled.button`
  border: none;
  background: transparent;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 18px;
  color: #5a2800;
  font-family: Verdana,Arial,Times New Roman,sans-serif;
  
  :hover {
    background-color:#0c4a55;
  }
`;