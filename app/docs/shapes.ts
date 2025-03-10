import { type CodeLine } from "./types/types";

//* general types ==========
export const monthType: CodeLine[] = [
    {
        line: `export type Month =`,
        position: 0
    },
    {
        line: `| 'January' | 'February' | 'March' | 'April' `,
        position: 1
    },
    {
        line: `| 'May' | 'June' | 'July' | 'August'`,
        position: 1
    },
    {
        line: `| 'September' | 'October' | 'November' | 'December';`,
        position: 1
    }
];

export const namedLink: CodeLine[] = [
    {
        line: 'type NamedLink = {',
        position: 0
    },
    {
        line: 'link: string;',
        position: 1
    },
    {
        line: 'name: string;',
        position: 1
    },
    {
        line: '};',
        position: 0
    },
];

export const customDate: CodeLine[] = [
    {
        line: 'export type CustomDate = {',
        position: 0
    },
    {
        line: 'day: number;',
        position: 1
    },
    {
        line: 'month: Month;',
        position: 1
    },
    {
        line: 'year: number;',
        position: 1
    }
];

//* music albums types ==========
export const albumType: CodeLine[] = [
    {
        line: 'export type MusicAlbum = {',
        position: 0
    },
    {
        line: 'id: number;',
        position: 1
    },
    {
        line: 'title: string;',
        position: 1
    },
    {
        line: 'artist: string;',
        position: 1
    },
    {
        line: 'description: string;',
        position: 1
    },
    {
        line: 'releaseDate: CustomDate;',
        position: 1
    },
    {
        line: 'genre: string;',
        position: 1
    },
    {
        line: 'label: NamedLink[];',
        position: 1
    },
    {
        line: 'wiki: string;',
        position: 1
    },
    {
        line: '};',
        position: 0
    }
];

//* quotes types ==========
export const quoteType: CodeLine[] = [
    {
        line: 'export type Quote = {',
        position: 0
    },
    {
        line: 'id: number;',
        position: 1
    },
    {
        line: 'quote: string;',
        position: 1
    },
    {
        line: 'author: string;',
        position: 1
    },
    {
        line: 'category: string;',
        position: 1
    },
    {
        line: '};',
        position: 0
    }
];

//* skyscraper types ==========
export const galleryItemType: CodeLine[] = [
    {
        line: 'type GalleryItem = {',
        position: 0
    },
    {
        line: 'caption: string;',
        position: 1
    },
    {
        line: 'source: string;',
        position: 1
    },
    {
        line: '};',
        position: 0
    },
];

export const areaType: CodeLine[] = [
    {
        line: 'type Area = {',
        position: 0
    },
    {
        line: 'city: string;',
        position: 1
    },
    {
        line: 'country: string;',
        position: 1
    },
    {
        line: 'mapsLink: string;',
        position: 1
    },
    {
        line: 'street: string;',
        position: 1
    },
    {
        line: '};',
        position: 0
    },
];

export const skyscraperTypeType: CodeLine[] = [
    {
        line: 'type SkyscraperType =',
        position: 0
    },
    {
        line: `| 'Commercial'`,
        position: 1
    },
    {
        line: `| 'Office'`,
        position: 1
    },
    {
        line: `| 'Retail'`,
        position: 1
    },
    {
        line: `| 'Residential'`,
        position: 1
    },
    {
        line: `| 'Hotel'`,
        position: 1
    },
    {
        line: `| 'Shopping Mall';`,
        position: 1
    },
];

export const skyscraperType: CodeLine[] = [
    {
        line: 'export type Skyscraper = {',
        position: 0
    },
    {
        line: 'architects: NamedLink[];',
        position: 1
    },
    {
        line: 'architectureStyle: NamedLink;',
        position: 1
    },
    {
        line: 'constructionEnded: CustomDate;',
        position: 1
    },
    {
        line: 'constructionStarted: CustomDate;',
        position: 1
    },
    {
        line: 'floorArea: number;',
        position: 1
    },
    {
        line: 'floorCount: number;',
        position: 1
    },
    {
        line: 'gallery: GalleryItem[];',
        position: 1
    },
    {
        line: 'height: number;',
        position: 1
    },
    {
        line: 'informationParagraphs: string[];',
        position: 1
    },
    {
        line: 'location: Area;',
        position: 1
    },
    {
        line: 'numberOfElevators: number;',
        position: 1
    },
    {
        line: 'openedDate: CustomDate;',
        position: 1
    },
    {
        line: 'owners: NamedLink[];',
        position: 1
    },
    {
        line: 'photo: string;',
        position: 1
    },
    {
        line: 'record: string;',
        position: 1
    },
    {
        line: 'slug: string;',
        position: 1
    },
    {
        line: 'subtitle: string;',
        position: 1
    },
    {
        line: 'title: string;',
        position: 1
    },
    {
        line: 'type: SkyscraperType[];',
        position: 1
    },
    {
        line: 'website: string;',
        position: 1
    },
    {
        line: 'wiki: string;',
        position: 1
    },
    {
        line: '};',
        position: 0
    }
];

//* software-tools types ==========
export const softwareToolCreatorType: CodeLine[] = [
    {
        line: 'type Creator = {',
        position: 0
    },
    {
        line: 'name: string;',
        position: 1
    },
    {
        line: 'wiki: string;',
        position: 1
    },
    {
        line: '};',
        position: 0
    },
];

export const softwareToolCategoryType: CodeLine[] = [
    {
        line: `type Category =`,
        position: 0
    },
    {
        line: `| 'programming-language' | 'runtime' `,
        position: 1
    },
    {
        line: `| 'framework' | 'library' | 'query-language'`,
        position: 1
    },
    {
        line: `| 'relational-database-management-system';`,
        position: 1
    }
];

export const softwareToolType: CodeLine[] = [
    {
        line: 'export type SoftwareTool = {',
        position: 0
    },
    {
        line: 'id: number;',
        position: 1
    },
    {
        line: 'title: string;',
        position: 1
    },
    {
        line: 'description: string;',
        position: 1
    },
    {
        line: 'image: string;',
        position: 1
    },
    {
        line: 'usage: string;',
        position: 1
    },
    {
        line: 'category: Category;',
        position: 1
    },
    {
        line: 'creators: Creator[];',
        position: 1
    },
    {
        line: 'yearCreated: number;',
        position: 1
    },
    {
        line: 'wiki: string;',
        position: 1
    },
    {
        line: '};',
        position: 0
    }
];