//* General 
export type Month = 'January' | 'February' | 'March' | 'April' | 'May' 
    | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';


//* Music Album
export type MusicAlbum = {
    id: number;
    title: string;
    artist: string;
    description: string;
    releaseDate: {
        day: number;
        month: Month;
        year: number;
    };
    genre: string;
    label: string;
    wiki: string;
};


//* Quote
export type Quote = {
    id: number;
    quote: string;
    author: string;
    category: string;
};


//* Software Tool
type Creator = {
    name: string;
    wiki: string;
};

type Category = 
    | 'programming-language' 
    | 'runtime'
    | 'framework'
    | 'library'
    | 'query-language'
    | 'relational-database-management-system';

export type SoftwareTool = {
    id: number;
    title: string;
    description: string;
    image: string;
    usage: string;
    category: Category;
    creators: Creator[];
    yearCreated: number;
    wiki: string;
};


//* Skyscraper
type Architect = {
    link: string;
    name: string;
};

type ArchitectureStyle = {
    link: string;
    name: string;
};

type ConstructionDate = {
    day: number;
    month: string;
    year: number;
};

type GalleryItem = {
    caption: string;
    source: string;
};

type Area = {
    city: string;
    country: string;
    mapsLink: string;
    street: string;
};

type Owner = {
    link: string;
    name: string;
};

type SkyscraperType =
    | 'Commercial'
    | 'Office'
    | 'Retail'
    | 'Residential'
    | 'Hotel'
    | 'Shopping Mall';

export type Skyscraper = {
    architects: Architect[];
    architectureStyle: ArchitectureStyle;
    constructionEnded: ConstructionDate;
    constructionStarted: ConstructionDate;
    floorArea: number;
    floorCount: number;
    gallery: GalleryItem[];
    height: number;
    informationParagraphs: string[];
    location: Area;
    numberOfElevators: number;
    openedDate: ConstructionDate;
    owners: Owner[];
    photo: string;
    record: string;
    slug: string;
    subtitle: string;
    title: string;
    type: SkyscraperType[];
    website: string;
    wiki: string;
};