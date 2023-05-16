import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f1e0c5;
  overflow: hidden;
  flex-direction: column;
`;

export const Box = styled.div`
    display: flex;
    width: 80%;
    height: 50%;
    min-width: 800px;
    box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 0.5);
    background-color: #d4c0a1;
    flex-direction: column;
    border-color: #726154;
    border-width: 2px;
    border-style: solid;
    align-items: center;
`;

export const SelectField = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const TextPrint = styled.p`
  color: #5a2800;
  font-weight: bolder;
  font-size: 20px;
  font-family: Verdana,Arial,Times New Roman,sans-serif;
  margin-top: 18px;
`;

export const FindButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5a2800;
    border-radius: 2px;
    cursor: pointer;
    width: 75px;
    height: 34px;
`;

export const ButtonText = styled.p`
  color: #d4c0a1;
  font-weight: bolder;
  font-size: 20px;
  font-family: Verdana,Arial,Times New Roman,sans-serif;
`;

export const TibiaImage = styled.img`
    position: absolute;
    top: 5%;
    height: 100px;
`;

export const OpenMap = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 5%;
    right: 5%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    gap: 8px;
`