//* General types.
type Month = 'January' | 'February' | 'March' | 'April' | 'May' 
    | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

type CustomDate = {
    day: number;
    month: Month;
    year: number;
};

type NamedLink = {
    link: string;
    name: string;
};

//* Music Album type.
export type MusicAlbum = {
    id: number;
    title: string;
    artist: string;
    description: string;
    releaseDate: CustomDate;
    genre: string;
    label: NamedLink[];
    wiki: string;
};


//* Quote type.
export type Quote = {
    id: number;
    quote: string;
    author: string;
    category: string;
};


//* Software Tool type.
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


//* Skyscraper types.
type GalleryItem = {
    id: number;
    source: string;
    alt: string;
};

type Area = {
    city: string;
    country: string;
    mapsLink: string;
    street: string;
};

type SkyscraperType =
    | 'Commercial'
    | 'Office'
    | 'Retail'
    | 'Residential'
    | 'Hotel'
    | 'Shopping Mall';

export type Skyscraper = {
    architects: NamedLink[];
    architectureStyle: NamedLink;
    constructionEnded: CustomDate;
    constructionStarted: CustomDate;
    floorArea: number;
    floorCount: number;
    gallery: GalleryItem[];
    height: number;
    informationParagraphs: string[];
    location: Area;
    numberOfElevators: number;
    openedDate: CustomDate;
    photo: string;
    slug: string;
    subtitle: string;
    title: string;
    type: SkyscraperType[];
    website: string;
    wiki: string;
};