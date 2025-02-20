export const album = JSON.stringify({
    id: 1,
    name: 'Thriller',
    artist: 'Michael Jackson',
    releaseDate: {
        day: 29,
        month: 'November',
        year: 1982
    },
    genre: 'Pop',
    label: 'Epic',
    wikipedia: 'https://en.wikipedia.org/wiki/Thriller_(album)',
}, null, 3);

export const quote = JSON.stringify({
    id: 1,
    quote: `When done well, software is invisible`,
    author: 'Bjarne Stroustrup',
    category: 'Software Industry'
}, null, 3);

export const softwareTool = JSON.stringify({
    id: 1,
    title: 'C',
    description: 'A powerful, low-level programming language known for its efficiency and direct memory manipulation',
    usage: 'System programming, embedded systems, and performance-critical applications',
    creators: [
        {
            name: 'Dennis Ritchie',
            wiki: 'https://en.wikipedia.org/wiki/Dennis_Ritchie'
        },
    ],
    yearCreated: 1972,
    wiki: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'
}, null, 3);