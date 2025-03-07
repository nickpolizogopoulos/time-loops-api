export const album = JSON.stringify({
    id: 1,
    title: 'Thriller',
    artist: 'Michael Jackson',
    description: "Thriller is Michael Jackson's groundbreaking album, blending pop, rock, and R&B. It features iconic hits like 'Billie Jean' and 'Beat It', revolutionizing the music industry and becoming one of the best-selling albums",
    releaseDate: {
        day: 29,
        month: 'November',
        year: 1982
    },
    genre: 'Pop',
    label: {
        name: 'Epic',
        link: 'https://en.wikipedia.org/wiki/Epic_Records'
    },
    wiki: 'https://en.wikipedia.org/wiki/Thriller_(album)',
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
    image: 'https://timeloopsapi.com/images/software-tools/c.svg',
    usage: 'System programming, embedded systems, and performance-critical applications',
    category: 'programming-language',
    creators: [
        {
            name: 'Dennis Ritchie',
            wiki: 'https://en.wikipedia.org/wiki/Dennis_Ritchie'
        },
    ],
    yearCreated: 1972,
    wiki: 'https://en.wikipedia.org/wiki/C_(programming_language)'
}, null, 3);