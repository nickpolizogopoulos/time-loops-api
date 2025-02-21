type Operation = {
    name: string;
    path: string;
    description: string;
};

export const operations: Operation[] = [
    {
        name: 'Music Albums',
        path: '/albums',
        description: 'Detailed information about music albums, including artist, genre, release date, and more.'
    },
    {
        name: 'Quotes',
        path: '/quotes',
        description: 'A collection of insightful quotes from a variety of categories and authors.'
    },
    {
        name: 'Skyscrapers',
        path: '/skyscrapers',
        description: 'Data about famous buildings, including architects, architectural styles, construction dates, and more.'
    },
    {
        name: 'Software Tools',
        path: '/software-tools',
        description: 'Information about software tools, including descriptions, usage, creators, and more.'
    }
];