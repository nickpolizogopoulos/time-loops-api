import { type CodeLine } from "./types/types";

export const space: CodeLine = { line: '', position: 0 };

const errorUnderline: string = 'underline decoration-1 underline-offset-2 decoration-rose-500 decoration-wavy';
const highlightedLine: string = 'bg-secondary text-secondary-content';
const highlightedText: string = 'text-warning';


export const postRequest: CodeLine[] = [
    {
        line: 'const newAlbum: MusicAlbum = {',
        position: 0
    },
    {
        line: 'id: 1,',
        position: 1,
        style: highlightedText
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
        style: errorUnderline
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
        style: highlightedLine
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

export const deleteRequest: CodeLine[] = [
    {
        line: `fetch('https://timeloopsapi.com/software-tools/7', {`,
        position: 0
    },
    {
        line: `method: 'DELETE'`,
        position: 1,
        style: highlightedLine
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
        line: `.then(data => console.log('Software Tool deleted:', data))`,
        position: 1
    },
    {
        line: `.catch(error => console.error('Error:', error));`,
        position: 1
    },
    space
];

export const putRequest: CodeLine[] = [
    {
        line: 'const updatedQuote =  {',
        position: 0
    },
    {
        line: `quote: "It is not that I'm so smart, it's just that I stay with problems longer",`,
        position: 1
    },
    {
        line: `author: "Albert Einstein",`,
        position: 1
    },
    {
        line: `category: "wisdom"`,
        position: 1
    },
    {
        line: '};',
        position: 0
    },
    space,
    {
        line: `fetch('https://timeloopsapi.com/quotes/1', {`,
        position: 0
    },
    {
        line: `method: 'PUT',`,
        position: 1,
        style: highlightedLine
    },
    {
        line: 'body: JSON.stringify(updatedQuote)',
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
        line: `.then(data => console.log('Updated Quote:', data))`,
        position: 1
    },
    {
        line: `.catch(error => console.error('Error:', error));`,
        position: 1
    },
    space
];

export const patchRequest: CodeLine[] = [
    {
        line: 'const patchedSkyscraper =  {',
        position: 0
    },
    {
        line: `subtitle: "One WTC"`,
        position: 1,
        style: highlightedText
    },
    {
        line: '};',
        position: 0
    },
    space,
    {
        line: `fetch('https://timeloopsapi.com/skyscrapers/4', {`,
        position: 0
    },
    {
        line: `method: 'PATCH',`,
        position: 1,
        style: highlightedLine
    },
    {
        line: 'body: JSON.stringify(patchedSkyscraper)',
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
        line: `.then(data => console.log('Updated Skyscraper:', data))`,
        position: 1
    },
    {
        line: `.catch(error => console.error('Error:', error));`,
        position: 1
    },
    space
];