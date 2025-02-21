import Link from "next/link";
import { JSX } from "react";

import Note from './_components/Note';
import * as shapes from "./shapes";
import { operations } from "./supportedOperations";
import { postRequest } from "./crudCode";

type Section = {
    listTitle: string | JSX.Element;
    sectionTitle?: string;
    path: string;
    isCategoryTitle: boolean;
    content: string | JSX.Element;
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
                            operations.map(item => 
                                <tr>
                                    <td>
                                        <Link href={item.path} target='_blank' className='underline'>
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td>{item.description}</td>
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
                <p className='pb-1'><span className='font-medium'>Create (POST)</span>: Simulate adding new records for music albums, quotes, buildings, or software tools.</p>
                <p className='pb-1'><span className='font-medium'>Read (GET)</span>: Retrieve detailed information on all available categories and individual items.</p>
                <p className='pb-1'><span className='font-medium'>Update (PUT)</span>: Simulate modifying existing records.</p>
                <p><span className='font-medium'>Delete (DELETE)</span>: Simulate the removal of records.</p>
                <Note strongText='Note:' note='The POST, PUT, and DELETE operations simulate real-world behavior but do not persist or modify data.' />
            </>
    },
    {
        listTitle: 'Shapes',
        path: 'shapes',
        isCategoryTitle: true,
        content: 
            <>
                <p className="pb-4">The shapes provided here are written in TypeScript.</p>
                <p className="pb-1 text-lg font-medium">General type Month: Used in Albums and Skyscrapers.</p>
                <div className="mockup-code max-w-4xl mb-7">
                    <div className='pt-2 pb-5'>
                        {
                            shapes.monthType.map((line, index) =>
                                <pre data-prefix={index + 1}>
                                    <code className={
                                        line.position === 0 ? '' : line.position === 1 ? 'pl-7' : 'pl-14'
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
                            <pre data-prefix={index + 1}>
                                <code className={
                                    line.position === 0 ? '' : line.position === 1 ? 'pl-7' : line.position === 2 ? 'pl-14' : 'pl-24'
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
                            <pre data-prefix={index + 1}>
                                <code className={
                                    line.position === 0 ? '' : line.position === 1 ? 'pl-7' : 'pl-14'
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
                    ].map((shapeType, idx) => (
                        <div key={idx} className="mockup-code min-w-full sm:min-w-fit mb-7">
                            <div className="pt-2 pb-5">
                                {shapeType.map((line, index) => (
                                <pre key={index} data-prefix={index + 1}>
                                    <code className={line.position === 0 ? '' : line.position === 1 ? 'pl-7' : 'pl-14'}>
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
                                <pre data-prefix={index + 1}>
                                    <code className={
                                        line.position === 0 ? '' : line.position === 1 ? 'pl-7' : 'pl-14'
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
                            shapes.softwareToolCreatorType.map((line, index) =>
                                <pre data-prefix={index + 1}>
                                    <code className={
                                        line.position === 0 ? '' : line.position === 1 ? 'pl-7' : line.position === 2 ? 'pl-14' : 'pl-24'
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
                                <pre data-prefix={index + 1}>
                                    <code className={
                                        line.position === 0 ? '' : line.position === 1 ? 'pl-7' : line.position === 2 ? 'pl-14' : 'pl-24'
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
                <Note strongText='Note:' note='The examples in the documentation are written in JavaScript, but you can achieve the same results using any programming language or HTTP client, such as Axios, if preferred.' />
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
                        <pre data-prefix="3"><code  className='pl-7'  >{`.then(data => console.log(data));`}</code></pre>
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
                        <pre data-prefix="3"><code  className='pl-7'  >{`.then(data => console.log(data));`}</code></pre>
                    </div>
                </div>
                <Note note='This will fetch the third item in the list of all albums.' />
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
                                <pre data-prefix={index + 1} className={line.style ?? undefined}>
                                    <code className={
                                          line.position === 0 ? '' 
                                        : line.position === 1 ? 'pl-7' 
                                        : line.position === 2 ? 'pl-14' 
                                        : 'pl-24'
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
        listTitle: <span><span className='font-medium'>(PUT)</span> Single item</span>,
        sectionTitle: 'Update a Single item (PUT request)',
        path: 'put-a-single-item',
        isCategoryTitle: false,
        content:
            <>
                <p className='pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quasi?</p>
            </>
    },
];