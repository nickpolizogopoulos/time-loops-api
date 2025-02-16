'use client';

import { useState } from "react";

type Endpoint = {
    endpoint: string;
    category: 'albums' | 'quotes' | 'skyscrapers';
    objectLoad: 'album' | 'quote' | 'skyscraper';
};

const album = JSON.stringify({
    id: 1,
    title: 'Title',
    description: 'Lorem ipsum dolor sit, amet elit. Natus, velit!',
    nested: {
        option1: 'option1',
        option2: 'option2'
    },
    key: 'Lorem ipsum dolor sit isicing elit. Tempora, iusto.'
}, null, 2);

const quote = JSON.stringify({
    id: 2,
    title: 'Title',
    description: 'Lorem ipsum dolor sit, amet elit. Natus, velit!',
    nested: {
        option1: 'option1',
        option2: 'option2'
    },
    key: 'Lorem ipsum dolor sit isicing elit. Tempora, iusto.'
}, null, 2);

const skyscraper = JSON.stringify({
    id: 3,
    title: 'Title',
    description: 'Lorem ipsum dolor sit, amet elit. Natus, velit!',
    nested: {
        option1: 'option1',
        option2: 'option2'
    },
    key: 'Lorem ipsum dolor sit isicing elit. Tempora, iusto.'
}, null, 2);

const endpoints: Endpoint[] = [
    {
        endpoint: 'https://time-loops-api.com/albums/1',
        category: 'albums',
        objectLoad: 'album'
    },
    {
        endpoint: 'https://time-loops-api.com/quotes/1',
        category: 'quotes',
        objectLoad: 'quote'
    },
    {
        endpoint: 'https://time-loops-api.com/skyscrapers/1',
        category: 'skyscrapers',
        objectLoad: 'skyscraper'
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

    return (
        <section className="flex flex-col lg:flex-row pb-7 lg:items-start justify-center gap-10 mb-14">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold mb-5 text-center">
                    Try any endpoint in your browser
                </h1>
                {
                    endpoints.map(endpoint => 
                        <div 
                            key={endpoint.category}
                            data-tip={`Click to copy ${endpoint.objectLoad}!`}
                            className="tooltip tooltip-top"
                        >
                            <button 
                                onClick={() => {
                                    urlClick(endpoint.category);
                                    onObjectChange(endpoint.objectLoad);
                                    clickToCopy(endpoint.endpoint);
                                }}
                                className={`
                                    max-w-full min-w-full sm:min-w-96 btn cursor-copy 
                                    rounded-full font-mono font-light hover:border-primary
                                    ${endpoint.objectLoad === object ? 'border border-primary' : ''}
                                `}
                            >
                                <code className="min-w-full sm:min-w-96 text-xs sm:text-base">{endpoint.endpoint}</code>
                            </button>
                        </div>
                    )
                }
            </div>
            <div className="mockup-browser border-base-300 border max-w-auto lg:max-w-2xl">
                <div className="mockup-browser-toolbar">
                    <div className="input border-base-300 border">https://time-loops-api.com/
                        <span className='endpoint-category'>{url}</span>/1
                    </div>
                </div>
                <div className="border-base-300 flex justify-start border-t px-4 py-5">
                    <pre>{object === 'album' ? album : object === 'quote' ? quote : skyscraper}</pre>
                </div>
            </div>
        </section>
    );
};

export default Endpoints;