export type CodeLine = {
    line: string;
    position: 0 | 1 | 2 | 3;
};

export const monthType: CodeLine[] = [
    {
        line: `export type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June'`,
        position: 0
    },
    {
        line: `| 'July' | 'August' | 'September' | 'October' | 'November' | 'December';`,
        position: 1
    }
];

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
        line: 'name: string;',
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
        line: 'releaseDate: {',
        position: 1
    },
    {
        line: 'day: number;',
        position: 2
    },
    {
        line: 'month: Month;',
        position: 2
    },
    {
        line: 'year: number;',
        position: 2
    },
    {
        line: '};',
        position: 1
    },
    {
        line: 'genre: string;',
        position: 1
    },
    {
        line: 'label: string;',
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

//* skyscraper types =================================================
export const architectType: CodeLine[] = [
    {
        line: 'type Architect = {',
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

export const architectureStyleType: CodeLine[] = [
    {
        line: 'type ArchitectureStyle = {',
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

export const constructionDateType: CodeLine[] = [
    {
        line: 'type ConstructionDate = {',
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
    },
    {
        line: '};',
        position: 0
    },
];

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

export const ownerType: CodeLine[] = [
    {
        line: 'type Owner = {',
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

export const skyscraperType: CodeLine[] = [
    {
        line: 'export type Skyscraper = {',
        position: 0
    },
    {
        line: 'architects: Architect[];',
        position: 1
    },
    {
        line: 'architectureStyle: ArchitectureStyle;',
        position: 1
    },
    {
        line: 'constructionEnded: ConstructionDate;',
        position: 1
    },
    {
        line: 'constructionStarted: ConstructionDate;',
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
        line: 'openedDate: ConstructionDate;',
        position: 1
    },
    {
        line: 'owners: Owner[];',
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
        line: 'type: string;',
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
//* skyscraper types end =================================================

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
        line: 'usage: string;',
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
        line: 'image: string;',
        position: 1
    },

    {
        line: '};',
        position: 0
    },
];