import { type CodeLine } from "./types/types";

const space: CodeLine = { line: '', position: 0 };

export const postRequest: CodeLine[] = [
    {
        line: 'const newAlbum: MusicAlbum = {',
        position: 0
    },
    {
        line: 'id: 1,',
        position: 1,
        style: 'text-warning'
    },
    {
        line: `title: 'Experience',`,
        position: 1
    },
    {
        line: `artist: 'The Prodigy',`,
        position: 1
    },
    {
        line: `description: 'Experience is the debut studio album by the Prodigy.',`,
        position: 1
    },
    {
        line: 'releaseDate: {',
        position: 1
    },
    {
        line: 'day: 28,',
        position: 2
    },
    {
        line: `month: 'Sept',`,
        position: 2,
        style: 'underline decoration-1 underline-offset-2 decoration-rose-500 decoration-wavy'
    },
    {
        line: 'year: 1992,',
        position: 2,
    },
    {
        line: '},',
        position: 1,
    },
    {
        line: `genre: 'Electronic',`,
        position: 1,
    },
    {
        line: `label: 'XL Recordings',`,
        position: 1,
    },
    {
        line: `wiki: 'https://en.wikipedia.org/wiki/Experience_(The_Prodigy_album)',`,
        position: 1,
    },
    {
        line: '};',
        position: 0,
    },
    space,
    {
        line: `fetch('https://timeloopsapi.com/albums', {`,
        position: 0
    },
    {
        line: `method: 'POST',`,
        position: 1,
        style: 'bg-secondary text-secondary-content'
    },
    {
        line: 'body: JSON.stringify(newAlbum)',
        position: 1
    },
    {
        line: '})',
        position: 0
    },
    {
        line: '.then(response => response.json())',
        position: 1
    },
    {
        line: `.then(data => console.log('New album added:', data))`,
        position: 1
    },
    {
        line: `.catch(error => console.error('Error:', error));`,
        position: 1
    },
    space,
];

