import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, StyledModal, Backdrop, MapImage, CloseButton } from './Style';

export interface ModalInterface {
    isShown: boolean;
    hide: () => void;
};

const Modal = ({
    isShown,
    hide,
}: ModalInterface) => {

    const modal = (
        <React.Fragment>
            <Backdrop onClick={hide} />
            <Wrapper>
                <StyledModal>
                    <CloseButton onClick={hide}>X</CloseButton>
                    <MapImage alt='Map Image' src={require('../../assets/TibiaMap.jpg')}>

                    </MapImage>
                </StyledModal>
            </Wrapper>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;