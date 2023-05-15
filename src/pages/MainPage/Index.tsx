import { dijkstra } from "../../utils/Graph";

const MainPage = () => {
    const test = () => {
        const shortestPath = dijkstra('Darashia', 'Roshamuul');
        console.log('Caminho mais curto:', shortestPath.path.join(' -> '));
        console.log('Preço total:', shortestPath.weightSum);
    }

    return (
        <div>
            <button onClick={test}>test</button>
        </div>
    )
}

export default MainPage;