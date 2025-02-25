import Link from "next/link";

import Note from './_components/Note';
import { postRequest } from "./crudCode";
import {
    endpoints,
    operations
} from "./endpointsAndOperations";
import * as shapes from "./shapes";
import {
    type CodeLine,
    type Section
} from "./types/types";

const linePosition = (position: CodeLine['position']): string | undefined => {
    switch (position) {
        case 0:
            return undefined;
        case 1:
            return 'pl-7';
        case 2:
            return 'pl-14';
        default:
            return 'pl-24';
    }
};

export const sections: Section[] = [
    {
        listTitle: 'Getting started',
        sectionTitle: 'Getting started with Time Loops API',
        path: 'getting-started',
        isCategoryTitle: true,
        content: `Welcome to Time Loops API, your one-stop destination for real-world data on Music Albums, Quotes, Buildings, and Software Tools. This API offers authentic and detailed information that you can use to power your music apps, quotes apps, architecture projects, and software tools directories.`
    },
    {
        listTitle: 'What You Get',
        path: 'what-you-get',
        isCategoryTitle: false,
        content:
            <div className="overflow-x-auto">
                <table className="table text-xl font-light">
                    <thead>
                        <tr className='text-sm'>
                            <th>Endpoint</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            endpoints.map(endpoint =>
                                <tr key={endpoint.description}>
                                    <td>
                                        <Link href={endpoint.path} target='_blank' className='underline'>
                                            {endpoint.name}
                                        </Link>
                                    </td>
                                    <td>{endpoint.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
    },
    {
        listTitle: 'Supported Operations',
        path: 'supported-operations',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-4'>Time Loops API supports a full set of CRUD operations, allowing you to:</p>
                <ul className='list-decimal pl-10 pb-2'>
                    {
                        operations.map(operation =>
                            <li key={operation.description} className='text-xl font-light py-1'>
                                <span className='font-medium'>{operation.name}:</span> {operation.description}
                            </li>
                        )
                    }
                </ul>
                <Note strongText='Note:' note='The POST, PUT, PATCH and DELETE operations simulate real-world behavior but do not persist or modify data.' />
            </>
    },
    {
        listTitle: 'Shapes',
        path: 'shapes',
        isCategoryTitle: true,
        content:
            <>
                <p className="pb-4">These are the expected data shapes when fetching, using TypeScript as an example.</p>
                <p className="pb-1 text-lg font-medium">General type Month: Used in Albums and Skyscrapers.</p>
                <div className="mockup-code max-w-fit mb-7">
                    <div className='pt-2 pb-5'>
                        {
                            shapes.monthType.map((line, index) =>
                                <pre key={index} data-prefix={index + 1}>
                                    <code className={
                                        linePosition(line.position)
                                    }>
                                        {line.line}
                                    </code>
                                </pre>
                            )
                        }
                    </div>
                </div>
            </>
    },
    {
        listTitle: 'Albums',
        sectionTitle: '1. Albums',
        path: 'albums',
        isCategoryTitle: false,
        content:
            <div className="mockup-code max-w-96 mb-7">
                <div className='pt-2 pb-5'>
                    {
                        shapes.albumType.map((line, index) =>
                            <pre key={index} data-prefix={index + 1}>
                                <code className={
                                    linePosition(line.position)
                                }>
                                    {line.line}
                                </code>
                            </pre>
                        )
                    }
                </div>
            </div>
    },
    {
        listTitle: 'Quotes',
        sectionTitle: '2. Quotes',
        path: 'quotes',
        isCategoryTitle: false,
        content:
            <div className="mockup-code max-w-96 mb-7">
                <div className='pt-2 pb-5'>
                    {
                        shapes.quoteType.map((line, index) =>
                            <pre key={index} data-prefix={index + 1}>
                                <code className={
                                    linePosition(line.position)
                                }>
                                    {line.line}
                                </code>
                            </pre>
                        )
                    }
                </div>
            </div>
    },
    {
        listTitle: 'Skyscrapers',
        sectionTitle: '3. Skyscrapers (all types)',
        path: 'skyscrapers',
        isCategoryTitle: false,
        content:
            <>
                <div className="flex flex-wrap gap-4 justify-start">
                    {[
                        shapes.architectType,
                        shapes.architectureStyleType,
                        shapes.constructionDateType,
                        shapes.galleryItemType,
                        shapes.areaType,
                        shapes.ownerType
                    ].map((shapeType, index) => (
                        <div key={index} className="mockup-code min-w-full sm:min-w-fit mb-7">
                            <div className="pt-2 pb-5">
                                {shapeType.map((line, index) => (
                                    <pre key={index} data-prefix={index + 1}>
                                        <code className={
                                            linePosition(line.position)
                                        }>
                                            {line.line}
                                        </code>
                                    </pre>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mockup-code max-w-lg mb-7">
                    <div className='pt-2 pb-5'>
                        {
                            shapes.skyscraperType.map((line, index) =>
                                <pre key={index} data-prefix={index + 1}>
                                    <code className={
                                        linePosition(line.position)
                                    }>
                                        {line.line}
                                    </code>
                                </pre>
                            )
                        }
                    </div>
                </div>
            </>
    },
    {
        listTitle: 'Software Tools',
        sectionTitle: '4. Software Tools (all types)',
        path: 'software-tools',
        isCategoryTitle: false,
        content:
            <>
                <div className="mockup-code max-w-96 mb-7">
                    <div className='pt-2 pb-5'>
                        {
                            shapes.softwareToolCategoryType.map((line, index) =>
                                <pre key={index} data-prefix={index + 1}>
                                    <code className={
                                        linePosition(line.position)
                                    }>
                                        {line.line}
                                    </code>
                                </pre>
                            )
                        }
                    </div>
                </div>
                <div className="mockup-code max-w-96 mb-7">
                    <div className='pt-2 pb-5'>
                        {
                            shapes.softwareToolCreatorType.map((line, index) =>
                                <pre key={index} data-prefix={index + 1}>
                                    <code className={
                                        linePosition(line.position)
                                    }>
                                        {line.line}
                                    </code>
                                </pre>
                            )
                        }
                    </div>
                </div>
                <div className="mockup-code max-w-96 mb-7">
                    <div className='pt-2 pb-5'>
                        {
                            shapes.softwareToolType.map((line, index) =>
                                <pre key={index} data-prefix={index + 1}>
                                    <code className={
                                        linePosition(line.position)
                                    }>
                                        {line.line}
                                    </code>
                                </pre>
                            )
                        }
                    </div>
                </div>
            </>
    },
    {
        listTitle: 'Example Usage',
        path: 'example-usage',
        isCategoryTitle: true,
        content:
            <>
                <p>Here’s how you can start using Time Loops API in your project:</p>
                <Note strongText='Note:' note='The examples in the documentation are written in JavaScript using the fetch API, but you can achieve the same results using any programming language or HTTP client, such as Axios, which automatically parses JSON responses.' />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(GET)</span> Read a list</span>,
        sectionTitle: 'Read a list (GET request)',
        path: 'read-a-list',
        isCategoryTitle: false,
        content:
            <>
                <div className="mockup-code max-w-fit mb-1">
                    <div className='pt-2 pb-5'>
                        <pre data-prefix="1"><code>{`fetch('https://timeloopsapi.com/albums')`}</code></pre>
                        <pre data-prefix="2"><code className='pl-7'>{`.then(response => response.json())`}</code></pre>
                        <pre data-prefix="3"><code className='pl-7'  >{`.then(data => console.log(data));`}</code></pre>
                    </div>
                </div>
                <Note note='This will fetch the list of all albums.' />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(GET)</span> Single item</span>,
        sectionTitle: 'Read a Single item (GET request)',
        path: 'read-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <div className="mockup-code max-w-fit  mb-1">
                    <div className='pt-2 pb-5'>
                        <pre data-prefix="1"><code>{`fetch('https://timeloopsapi.com/albums/2')`}</code></pre>
                        <pre data-prefix="2"><code className='pl-7'>{`.then(response => response.json())`}</code></pre>
                        <pre data-prefix="3"><code className='pl-7'  >{`.then(data => console.log(data));`}</code></pre>
                    </div>
                </div>
                <Note note='This will fetch the third item from the list of all albums.' />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(POST)</span> Single item</span>,
        sectionTitle: 'Create a Single item (POST request)',
        path: 'post-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>To add a new music album, send a POST request to the /albums endpoint with the following data:</p>
                <div className="mockup-code max-w-fit  mb-1">
                    <div className='pt-2 pb-2'>
                        {
                            postRequest.map((line, index) =>
                                <pre key={index} data-prefix={index + 1} className={line.style ?? undefined}>
                                    <code className={
                                        linePosition(line.position)
                                    }>
                                        {line.line}
                                    </code>
                                </pre>
                            )
                        }
                    </div>
                </div>
                <Note strongText='Content-Type:' note={`Always include 'Content-Type': 'application/json' in the request headers to tell the server that you're sending JSON data.`} />
                <Note strongText='Data Structure:' note={`Make sure your request body matches the expected data structure for each type. Refer to the examples above for the format.`} />
                <Note strongText='Notice:' note={`The compiler shouts because month is of type Month. In this example, it must be written 'March'.`} />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(DELETE)</span> Single item</span>,
        sectionTitle: 'Delete a Single item (DELETE request)',
        path: 'delete-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quasi?</p>
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(PUT)</span> Single item</span>,
        sectionTitle: 'Update a Single item (PUT request)',
        path: 'put-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>MPOYXTISA Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quasi?</p>
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(PATCH)</span> Single item</span>,
        sectionTitle: 'Update a Single item (PATCH request)',
        path: 'patch-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quasi?</p>
            </>
    }
];