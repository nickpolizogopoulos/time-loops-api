'use client';

import { useState } from "react";

type Endpoint = {
    endpoint: string;
    category: 'albums' | 'quotes' | 'software-tools';
    objectLoad: 'album' | 'quote' | 'software-tool';
};

const album = JSON.stringify({
    id: 1,
    name: 'Thriller',
    artist: 'Michael Jackson',
    releaseDate: {
        day: 29,
        month: 'November',
        year: 1982
    },
    genre: 'Pop',
    label: 'Epic',
    wikipedia: 'https://en.wikipedia.org/wiki/Thriller_(album)',
}, null, 3);

const quote = JSON.stringify({
    id: 1,
    quote: `When done well, software is invisible`,
    author: `Bjarne Stroustrup`,
    category: `Software Industry`
}, null, 3);

const softwareTool = JSON.stringify({
    id: 1,
    title: 'C',
    description: 'A powerful, low-level programming language known for its efficiency and direct memory manipulation',
    usage: 'System programming, embedded systems, and performance-critical applications',
    creators: [
        {
            name: 'Dennis Ritchie',
            wiki: 'https://en.wikipedia.org/wiki/Dennis_Ritchie'
        },
    ],
    yearCreated: 1972,
    wiki: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'
}, null, 3);

const endpoints: Endpoint[] = [
    {
        endpoint: 'timeloopsapi.com/albums/1',
        category: 'albums',
        objectLoad: 'album'
    },
    {
        endpoint: 'timeloopsapi.com/quotes/1',
        category: 'quotes',
        objectLoad: 'quote'
    },
    {
        endpoint: 'timeloopsapi.com/software-tools/1',
        category: 'software-tools',
        objectLoad: 'software-tool'
    }
];

const Endpoints = () => {

    const [url, setUrl] = useState<Endpoint['category']>('albums');
    const [object, setObject] = useState<Endpoint['objectLoad']>('album');

    const urlClick = (category: Endpoint['category']): void => {
        setUrl(category);
    };

    const clickToCopy = (text: string): void => {
        navigator.clipboard.writeText(text);
    };

    const onObjectChange = (object: Endpoint['objectLoad']): void => {
        setObject(object);
    };

    const onButtonClick = (
        category: Endpoint['category'],
        objectLoad: Endpoint['objectLoad'],
        endpoint: Endpoint['endpoint']
    ): void => {
        urlClick(category);
        onObjectChange(objectLoad);
        clickToCopy(endpoint);
    };

    return (
        <section className="flex flex-col lg:flex-row justify-center gap-10 mb-14">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-4xl font-semibold mb-5 text-center">
                    Try any endpoint in your browser
                </h1>
                {
                    endpoints.map(endpoint => 
                        <div 
                            key={endpoint.category}
                            data-tip='Click to copy!'
                            className="tooltip tooltip-left min-w-full sm:min-w-fit"
                        >
                            <button 
                                onClick={_ => onButtonClick(endpoint.category, endpoint.objectLoad, endpoint.endpoint)}
                                className={`
                                    btn cursor-copy font-mono font-light min-w-full sm:min-w-96 hover:border-primary
                                    ${endpoint.objectLoad === object ? 'border border-primary shadow-inner' : ''}
                                `}
                            >
                                <code className="text-sm sm:text-base">{endpoint.endpoint}</code>
                            </button>
                        </div>
                    )
                }
            </div>

            <div className="mockup-browser mockup-browser-home bg-base-200/50 border-base-300 border xl:max-w-96">
                <div className="mockup-browser-toolbar">
                    <div className="input py-px border-base-300 border">
                        https://timeloopsapi.com/
                        <span className='hidden sm:inline mx-1 bg-white/10 py-px px-1 rounded-sm border border-primary border-opacity-70'>{url}</span>
                        <span className='inline sm:hidden'>{url}</span>
                        /1
                    </div>
                </div>
                <div className='border-base-300 flex justify-start border-t px-4 py-6'>
                    <pre>{object === 'album' ? album : object === 'quote' ? quote : softwareTool}</pre>
                </div>
            </div>
        </section>
    );
};

export default Endpoints;