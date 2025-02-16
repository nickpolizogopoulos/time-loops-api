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
        endpoint: 'timeloopsapi.com/skyscrapers/1',
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
        <section className="flex flex-col lg:flex-row justify-center gap-10 mb-16">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-4xl font-bold mb-5 text-center">
                    Try any endpoint in your browser
                </h1>
                {
                    endpoints.map(endpoint => 
                        <div 
                            key={endpoint.category}
                            data-tip={`Click to copy ${endpoint.objectLoad}!`}
                            className="tooltip tooltip-left min-w-full sm:min-w-fit"
                        >
                            <button 
                                onClick={() => onButtonClick(endpoint.category, endpoint.objectLoad, endpoint.endpoint)}
                                className={`min-w-full sm:min-w-96 btn cursor-copy font-mono font-light hover:border-primary
                                    ${endpoint.objectLoad === object ? 'border border-primary shadow-inner' : ''}`}
                            >
                                <code className="text-sm sm:text-base">{endpoint.endpoint}</code>
                            </button>
                        </div>
                    )
                }
            </div>
            <div className="mockup-browser border-base-300 border max-w-auto lg:max-w-2xl">
                <div className="mockup-browser-toolbar">
                    <div className="input py-px border-base-300 border">https://timeloopsapi.com/
                        <span className='hidden sm:inline mx-1 bg-white/10 py-px px-1 rounded-sm border border-primary border-opacity-70'>{url}</span>
                        <span className='inline sm:hidden'>{url}</span>
                        /1
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