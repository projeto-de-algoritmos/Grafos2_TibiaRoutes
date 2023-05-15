import { dijkstra } from "../../utils/Graph";
import Dropdown from "../../components/Dropdown/Index";
import { useState } from "react";
import { Box, ButtonText, Container, FindButton, SelectField, TextPrint } from "./Style";

const MainPage = () => {
    const [startingCityLabel, setStartingCityLabel] = useState('Starting City');
    const [destinationLabel, setDestinationLabel] = useState('Destination');
    const [startingCity, setStartingCity] = useState('');
    const [destination, setDestination] = useState('');
    const [route, setRoute] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    const selectStartingCity = (selectedStartingCity: string) => {
        setStartingCity(selectedStartingCity);
        setStartingCityLabel(selectedStartingCity);
    }

    const selectDestination = (selectedDestination: string) => {
        setDestination(selectedDestination);
        setDestinationLabel(selectedDestination);
    }

    const findPath = () => {
        const shortestPath = dijkstra(startingCity, destination);
        setRoute('Shortest route: ' + shortestPath.path.join(' -> '));
        setTotalPrice('Total cost: ' + shortestPath.weightSum + ' gps');
    }

    return (
        <Container>
            <Box>
                <SelectField>
                    <TextPrint>Find the best route from</TextPrint>
                    <Dropdown label={startingCityLabel} options={['Ab Dendriel', 'Ankrahmun', 'Carlin', 'Cormaya', 'Darashia', 'Edron', 'Gray Island', 'Issavi', 'Krailos', 'Liberty Bay', 'Oramond', 'Port Hope', 'Roshamuul', 'Svargrond', 'Thais', 'Venore', 'Yalahar']} onSelect={selectStartingCity}></Dropdown>
                    <TextPrint>to</TextPrint>
                    <Dropdown label={destinationLabel} options={['Ab Dendriel', 'Ankrahmun', 'Carlin', 'Cormaya', 'Darashia', 'Edron', 'Gray Island', 'Issavi', 'Krailos', 'Liberty Bay', 'Oramond', 'Port Hope', 'Roshamuul', 'Svargrond', 'Thais', 'Venore', 'Yalahar']} onSelect={selectDestination}></Dropdown>
                    <FindButton onClick={findPath}>
                        <ButtonText>
                            Find
                        </ButtonText>
                    </FindButton>
                </SelectField>
                <TextPrint>{route}</TextPrint>
                <TextPrint>{totalPrice}</TextPrint>
            </Box>
        </Container>
    )
}

export default MainPage;