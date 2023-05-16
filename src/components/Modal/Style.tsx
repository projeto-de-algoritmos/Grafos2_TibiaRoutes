import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 700;
    width: inherit;
    outline: 0;
`;

export const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 500;
    cursor: pointer;
`;

export const StyledModal = styled.div`
    display: flex;
    z-index: 100;
    position: relative;
    margin: auto;
    border-radius: 8px;
    flex-direction: column;
    gap: 8px;
    max-width: 800px;
    max-height: 600px;
    overflow: auto;
    cursor: default;

    @media (max-width: 750px){
        width: 95vw;
    }
`;

export const MapImage = styled.img`
    height: 1800px;
    width: 1500px;
`

export const CloseButton = styled.p`
    position: fixed;
    font-size: 34px;
    color: #5a2800;
    cursor: pointer;
    right: 5%;
    font-weight: bolder;
`