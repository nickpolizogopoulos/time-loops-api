import { JSX } from "react";

export interface CodeLine {
    line: string;
    position: 0 | 1 | 2 | 3;
};

export interface Request extends CodeLine {
    style?: string;
};

export type Endpoint = {
    name: string;
    path: string;
    description: string;
};

export type Operation = {
    name: string;
    description: string;
};

export type Section = {
    listTitle: string | JSX.Element;
    sectionTitle?: string;
    path: string;
    isCategoryTitle: boolean;
    content: string | JSX.Element;
};