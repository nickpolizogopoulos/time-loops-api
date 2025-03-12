import Link from "next/link";

import Note from './_components/Note';
import {
    deleteRequest,
    postRequest
} from "./crudCode";
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
        content: `
            Welcome to Time Loops API, your one-stop destination for real-world data on Music Albums, Quotes, 
            Buildings, and Software Tools. This API offers authentic and detailed information that you can use 
            to power your music apps, quotes apps, architecture projects, and software tools directories.
        `
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
                                        <Link href={endpoint.path} target='_blank' className='link link-primary'>
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
                <Note strongText='Note:'
                    note={
                        <span>The POST, PUT, PATCH and DELETE operations simulate real-world behavior but{' '}
                            <span className="docs-strong-note">do not persist or modify data.</span>
                        </span>
                    }
                />
            </>
    },
    {
        listTitle: 'Shapes',
        path: 'shapes',
        isCategoryTitle: true,
        content:
            <>
                <p className="pb-2">These are the expected data shapes when fetching, using TypeScript as an example.</p>
                <p className="pb-4">
                    You can find all types{' '}
                    <Link className='link link-primary' href='https://github.com/nickpolizogopoulos/time-loops-api/blob/main/app/(api)/types.ts' target='_blank'>
                        here
                    </Link>{' '}
                    or copy them directly from the boxes below.
                </p>
                <p className="pb-1 text-lg font-medium">General types such as Month, CustomDate and NamedLink: Used in Album and Skyscraper types.</p>

                <div className="flex flex-wrap gap-4 justify-start">
                    {
                        [
                            shapes.monthType,
                            shapes.namedLink,
                            shapes.customDate
                        ]
                        .map((shapeType, index) => (
                            <div key={index} className="mockup-code max-w-96 mb-7 pr-7">
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
                        ))
                    }
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
                        shapes.skyscraperTypeType,
                        shapes.areaType,
                        shapes.galleryItemType
                    ].map((shapeType, index) => (
                        <div key={index} className="mockup-code max-w-96 mb-7 pr-7">
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
                <div className="flex flex-wrap gap-4 justify-start">
                    {[
                        shapes.softwareToolCreatorType,
                        shapes.softwareToolCategoryType
                    ].map((shapeType, index) => (
                        <div key={index} className={`mockup-code min-w-full lg:min-w-fit mb-7 pr-7`}>
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
                <Note strongText='Note:' 
                    note='
                        The examples in the documentation are written in JavaScript / TypeScript
                        using the fetch API, but you can achieve the same results using any programming 
                        language or HTTP client, such as Axios, which automatically parses JSON responses.
                    '
                    />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(GET)</span> Read a list</span>,
        sectionTitle: 'Read a list (GET request)',
        path: 'read-a-list',
        isCategoryTitle: false,
        content:
            <>
                <div className="mockup-code max-w-fit mb-1 pr-7">
                    <div className='pt-2 pb-5'>
                    <pre data-prefix="1"><code>{`fetch('https://timeloopsapi.com/albums')`}</code></pre>
                        <pre data-prefix="2"><code className='pl-7'>{`.then(response => response.json())`}</code></pre>
                        <pre data-prefix="3"><code className='pl-7'  >{`.then(data => console.log('Albums:', data))`}</code></pre>
                        <pre data-prefix="4"><code className='pl-7'  >{`.catch(error => console.error('Error:', error));`}</code></pre>
                    </div>
                </div>
                <Note strongText="Notice:"
                    note={
                        <span>No need to specify method: "GET", because <span className="docs-strong-note">
                            <span className="font-mono text-sm">fetch()</span> defaults to a GET request</span>{' '}
                            if no method is provided.
                        </span>
                    }
                />
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
                <div className="mockup-code max-w-fit mb-1 pr-7">
                    <div className='pt-2 pb-5'>
                        <pre data-prefix="1"><code>{`fetch('https://timeloopsapi.com/albums/2')`}</code></pre>
                        <pre data-prefix="2"><code className='pl-7'>{`.then(response => response.json())`}</code></pre>
                        <pre data-prefix="3"><code className='pl-7'  >{`.then(data => console.log('Album:', data))`}</code></pre>
                        <pre data-prefix="4"><code className='pl-7'  >{`.catch(error => console.error('Error:', error));`}</code></pre>
                    </div>
                </div>
                <Note note='This will fetch the second item from the list of all albums.' />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(POST)</span> Single item</span>,
        sectionTitle: 'Create a Single item (POST request)',
        path: 'post-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>
                    To add a new music album, send a POST request to the{' '}
                    <Link className='link link-primary' href='/albums' target='_blank'>
                        albums
                    </Link>{' '}
                    endpoint.
                </p>
                <div className="mockup-code max-w-fit mb-1">
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
                <Note strongText='Data Structure:' 
                    note={`
                        Make sure your request body matches the expected data structure for each type. 
                        Refer to the examples above for the format.
                    `}
                />
                <Note strongText='Notice:'
                    note={
                        <span>The POST request includes <span className="docs-strong-note">id: 1, because 
                        TypeScript expects the id key.</span> The id will be generated on the server based 
                        on the length of the Albums array.</span>
                    }
                />
                <Note strongText='Notice:'
                    note={
                        <span>The compiler shouts because month is of <span className="docs-strong-note">type Month</span>. 
                        In this example, it must be written 'September'.</span>
                    }
                />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(DELETE)</span> Single item</span>,
        sectionTitle: 'Delete a Single item (DELETE request)',
        path: 'delete-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>Deleting a single item is straightforward:</p>
                <div className="mockup-code max-w-fit mb-1">
                    <div className='pt-2 pb-2'>
                        {
                            deleteRequest.map((line, index) =>
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
                <Note strongText="This returns:"
                    note={`
                        Software Tool deleted: { "message": "Software Tool with id 7 
                        (JavaScript) has been deleted successfully" }
                    `}
                />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(PUT)</span> Single item</span>,
        sectionTitle: 'Update a Single item (PUT request)',
        path: 'put-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>
                    The PUT request will <span className='underline'>replace the entire resource</span> with the new data. 
                    All fields must be provided, and missing fields will be overwritten.
                </p>
                <Note strongText="Reminder: " 
                    note={
                        <span>The PUT request does not actually update the resource on the server. Instead, the API{' '}
                        <span className="docs-strong-note">simulates the update</span>, 
                        making it appear as if the change was successful.</span>
                    }
                />
            </>
    },
    {
        listTitle: <span><span className='font-medium'>(PATCH)</span> Single item</span>,
        sectionTitle: 'Update a Single item (PATCH request)',
        path: 'patch-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>
                    The PATCH request will <span className='underline'>only update the specified fields</span>,
                    leaving the other fields of the resource unchanged.
                </p>
                <Note strongText="Reminder: " 
                    note={
                        <span>The PATCH request won't actually modify the resource on the server. Instead,{' '}
                            <span className="docs-strong-note">the API mimics the update</span>, 
                            giving the impression that the change was applied.</span>
                    }
                />
            </>
    }
];