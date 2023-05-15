import { useState } from "react";
import Icon from "../Icon/Icon";
import { Option, Container, OptionsContainer, Label } from "./Style";

interface DropdownInterface {
    label: string;
    options: any[];
    width?: string;
    onSelect: (value: string) => void;
}

const Dropdown = ({ label, options, width, onSelect }: DropdownInterface) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleSelect = (option: string) => {
        onSelect(option);
        setOpen(false);
    }

    const renderOptions = () => {
        return options.map((option) => (
            <Option onClick={() => handleSelect(option)}>
                {option}
            </Option>
        ))
    }

    return (
            <Container onClick={() => setOpen(!open)}>

                <Label>{label}</Label>
                <Icon
                    icon={'expand_more'}
                    size={'40px'}
                    color={'#5a2800'}
                />

                {open &&
                    <OptionsContainer>
                        {renderOptions()}
                    </OptionsContainer>
                }
            </Container >
    );
}

export default Dropdown;
