import { type Request } from "./types/types";

export const postRequest: Request[] = [
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
        line: 'body: JSON.stringify({',
        position: 1
    },
    {
        line: `title: 'New Album',`,
        position: 2
    },
    {
        line: `artist: 'Artist Name',`,
        position: 2
    },
    {
        line: `description: 'My Album Description',`,
        position: 2
    },
    {
        line: 'releaseDate: {',
        position: 2
    },
    {
        line: 'day: 15,',
        position: 3
    },
    {
        line: `month: 'Mar',`,
        position: 3,
        style: 'underline decoration-1 underline-offset-2 decoration-rose-500 decoration-wavy'
    },
    {
        line: 'year: 2023,',
        position: 3
    },
    {
        line: '},',
        position: 2
    },
    {
        line: `genre: 'Pop',`,
        position: 2
    },
    {
        line: `label: 'XYZ Label',`,
        position: 2
    },
    {
        line: `wiki: 'https://en.wikipedia.org/wiki/Album_Name',`,
        position: 2
    },
    {
        line: '}),',
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
    }
];