interface City {
    name: string;
    connections: Connection[];
}

interface Connection {
    name: string;
    weight: number;
}

const routesI: City[] = [
    {
        name: 'Ab Dendriel',
        connections: [
            { name: 'Carlin', weight: 70 },
            { name: 'Edron', weight: 70 },
            { name: 'Gray Island', weight: 150 },
            { name: 'Thais', weight: 120 },
            { name: 'Venore', weight: 80 },
            { name: 'Yalahar', weight: 160 },
        ],
    },
    {
        name: 'Ankrahmun',
        connections: [
            { name: 'Darashia', weight: 100 },
            { name: 'Edron', weight: 160 },
            { name: 'Liberty Bay', weight: 90 },
            { name: 'Port Hope', weight: 80 },
            { name: 'Venore', weight: 150 },
            { name: 'Yalahar', weight: 230 },
        ],
    },
    {
        name: 'Carlin',
        connections: [
            { name: 'Ab Dendriel', weight: 80 },
            { name: 'Edron', weight: 110 },
            { name: 'Svargrond', weight: 110 },
            { name: 'Thais', weight: 110 },
            { name: 'Venore', weight: 130 },
            { name: 'Yalahar', weight: 185 },
        ],
    },
    {
        name: 'Cormaya',
        connections: [
            { name: 'Edron', weight: 20 },
        ]
    },
    {
        name: 'Darashia',
        connections: [
            { name: 'Ankrahmun', weight: 100 },
            { name: 'Gray Island', weight: 150 },
            { name: 'Issavi', weight: 80 },
            { name: 'Krailos', weight: 110 },
            { name: 'Liberty Bay', weight: 200 },
            { name: 'Port Hope', weight: 180 },
            { name: 'Venore', weight: 60 },
            { name: 'Yalahar', weight: 210 },
        ],
    },
    {
        name: 'Edron',
        connections: [
            { name: 'Ab Dendriel', weight: 70 },
            { name: 'Ankrahmun', weight: 160 },
            { name: 'Carlin', weight: 110 },
            { name: 'Cormaya', weight: 20 },
            { name: 'Gray Island', weight: 150 },
            { name: 'Krailos', weight: 100 },
            { name: 'Liberty Bay', weight: 170 },
            { name: 'Oramond', weight: 110 },
            { name: 'Port Hope', weight: 150 },
            { name: 'Thais', weight: 160 },
            { name: 'Venore', weight: 40 },
        ],
    },
    {
        name: 'Gray Island',
        connections: [
            { name: 'Ab Dendriel', weight: 0 },
            { name: 'Darashia', weight: 0 },
            { name: 'Edron', weight: 0 },
            { name: 'Venore', weight: 0 },
        ],
    },
    {
        name: 'Issavi',
        connections: [
            { name: 'Darashia', weight: 80 },
            { name: 'Krailos', weight: 80 },
            { name: 'Oramond', weight: 100 },
            { name: 'Venore', weight: 80 },
        ],
    },
    {
        name: 'Krailos',
        connections: [
            { name: 'Darashia', weight: 110 },
            { name: 'Edron', weight: 100 },
            { name: 'Issavi', weight: 80 },
            { name: 'Oramond', weight: 110 },
            { name: 'Venore', weight: 110 },
        ],
    },
    {
        name: 'Liberty Bay',
        connections: [
            { name: 'Arnkrahmun', weight: 90 },
            { name: 'Darashia', weight: 200 },
            { name: 'Edron', weight: 170 },
            { name: 'Port Hope', weight: 50 },
            { name: 'Thais', weight: 180 },
            { name: 'Venore', weight: 180 },
            { name: 'Yalahar', weight: 275 },
        ],
    },
    {
        name: 'Oramond',
        connections: [
            { name: 'Edron', weight: 110 },
            { name: 'Issavi', weight: 100 },
            { name: 'Port Hope', weight: 200 },
            { name: 'Thais', weight: 150 },
            { name: 'Venore', weight: 130 },
        ],
    },
    {
        name: 'Port Hope',
        connections: [
            { name: 'Ankrahmun', weight: 110 },
            { name: 'Darashia', weight: 180 },
            { name: 'Edron', weight: 150 },
            { name: 'Liberty Bay', weight: 50 },
            { name: 'Oramond', weight: 150 },
            { name: 'Thais', weight: 160 },
            { name: 'Venore', weight: 160 },
            { name: 'Yalahar', weight: 260 },
        ],
    },
    {
        name: 'Roshamuul',
        connections: [
            { name: 'Thais', weight: 210 },
        ],
    },
    {
        name: 'Svargrond',
        connections: [
            { name: 'Carlin', weight: 110 },
            { name: 'Thais', weight: 180 },
            { name: 'Venore', weight: 150 },
        ],
    },
    {
        name: 'Thais',
        connections: [
            { name: 'Ab Dendriel', weight: 130 },
            { name: 'Carlin', weight: 110 },
            { name: 'Edron', weight: 160 },
            { name: 'Liberty Bay', weight: 180 },
            { name: 'Oramond', weight: 210 },
            { name: 'Port Hope', weight: 160 },
            { name: 'Roshamuul', weight: 210 },
            { name: 'Svargrond', weight: 180 },
            { name: 'Venore', weight: 170 },
            { name: 'Yalahar', weight: 200 },
        ],
    },
    {
        name: 'Venore',
        connections: [
            { name: 'Ab Dendriel', weight: 90 },
            { name: 'Ankrahmun', weight: 150 },
            { name: 'Carlin', weight: 130 },
            { name: 'Darashia', weight: 60 },
            { name: 'Edron', weight: 40 },
            { name: 'Gray Island', weight: 150 },
            { name: 'Issavi', weight: 80 },
            { name: 'Krailos', weight: 110 },
            { name: 'Liberty Bay', weight: 180 },
            { name: 'Oramond', weight: 130 },
            { name: 'Port Hope', weight: 160 },
            { name: 'Svargrond', weight: 150 },
            { name: 'Thais', weight: 170 },
            { name: 'Yalahar', weight: 230 },
        ],
    },
    {
        name: 'Yalahar',
        connections: [
            { name: 'Ab Dendriel', weight: 160 },
            { name: 'Ankrahmun', weight: 230 },
            { name: 'Carlin', weight: 185 },
            { name: 'Darashia', weight: 60 },
            { name: 'Liberty Bay', weight: 180 },
            { name: 'Port Hope', weight: 160 },
            { name: 'Thais', weight: 170 },
            { name: 'Venore', weight: 185 },
        ],
    },
];

function dijkstra(start: City, end: City) {

};

