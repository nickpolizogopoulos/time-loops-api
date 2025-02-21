type Endpoint = {
    name: string;
    path: string;
    description: string;
};

export const endpoints: Endpoint[] = [
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

type Operation = {
    name: string;
    description: string;
};

export const operations: Operation[] = [
    {
        name: 'Create (POST)',
        description: 'Simulate adding new records for music albums, quotes, buildings or software tools.'
    },
    {
        name: 'Read (GET)',
        description: 'Retrieve detailed information on all available categories and individual items.'
    },
    {
        name: 'Update (PUT)',
        description: 'Replace an entire existing record with a new one.'
    },
    {
        name: 'Update (PATCH)',
        description: 'Modify specific fields of an existing record.'
    },
    {
        name: 'Delete (DELETE)',
        description: 'Simulate the removal of existing records.'
    }
];