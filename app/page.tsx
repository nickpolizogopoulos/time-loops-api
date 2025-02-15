'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

type Card = {
  title: string;
  description: string;
  button: string;
};

const cards: Card[] = [
  {
    title: 'Music Albums',
    description: 'Iconic Music Albums from World-Famous Artists!',
    button: '/albums'
  },
  {
    title: 'Quotes',
    description: 'Iconic Quotes from Legendary Figures!',
    button: '/quotes'
  },
  {
    title: 'Skyscrapers',
    description: 'Historic Skyscraper Buildings that shaped the Skyline!',
    button: '/skyscrapers'
  }
];

const album = JSON.stringify({
  id: 2,
  title: 'Title',
  description: 'Lorem ipsum dolor sit, amet elit. Natus, velit!',
  nested: {
    option1: 'option1',
    option2: 'option2'
  },
  key: 'Lorem ipsum dolor sit isicing elit. Tempora, iusto.'
}, null, 2);

const quote = JSON.stringify({
  id: 1,
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

const Home = () => {

  const [url, setUrl] = useState<'albums' | 'quotes' | 'skyscrapers'>('albums');
  const [object, setObject] = useState(album);

  const urlClick = (category: 'albums' | 'quotes' | 'skyscrapers'): void => {
    setUrl(category);
  };

  const onObjectChange = (object: 'album' | 'quote' | 'skyscraper'): void => {
    if (object === 'album')
      setObject(album);
    else if (object === 'quote')
      setObject(quote);
    else
      setObject(skyscraper);
  };

  return (
    <>
      <section className="hero min-h-80 py-10 lg:py-20">
        <div className="hero-content text-center flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Reliable API for Developers Who Demand Real Data
            </h1>

            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, esse tempore recusandae neque quod vel officia cum sit magni tempora aspernatur magnam? Odio sed aut ipsa fugiat ullam quibusdam qui, aperiam libero saepe ad perspiciatis harum! Aperiam nostrum tempora corrupti reprehenderit aliquid omnis. Eveniet veritatis magni soluta nobis cumque corporis.
            </p>

            <div className="flex justify-center gap-7">

              <button className="btn btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20">
                  <path fill="currentColor" d="m2 10l1.42-1.41L9 14.17V2h2v12.17l5.59-5.58L18 10l-8 8z"/>
                </svg>
                Get Started
              </button>

              <button className="btn btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 1v7h7m0 15H3V1h12l3 3l3 3v16Z"/>
                </svg>
                Documentation
              </button>

            </div>
        </div>
      </section>   

      <section className="flex flex-col lg:flex-row pb-7 lg:items-start justify-center gap-10 mb-14">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold mb-9 text-center">
              Try any endpoint in your browser
            </h1>

            <div data-tip={'Click to copy!'} className="tooltip">
              <button onClick={() => { urlClick('albums'); onObjectChange('album') }} className="btn btn-sm cursor-copy rounded-full font-mono font-light">
                <code className="min-w-96">https://time-loops-api.com/albums/1</code>
              </button>
            </div>
            <div data-tip={'Click to copy!'} className="tooltip tooltip-bottom">
              <button onClick={() => { urlClick('quotes'); onObjectChange('quote') }} className="btn btn-sm cursor-copy rounded-full font-mono font-light">
                <code className="min-w-96">https://time-loops-api.com/quotes/1</code>
              </button>
            </div>
            <div data-tip={'Click to copy!'} className="tooltip tooltip-bottom">
              <button onClick={() => { urlClick('skyscrapers'); onObjectChange('skyscraper') }} className="btn btn-sm cursor-copy rounded-full font-mono font-light">
                <code className="min-w-96">https://time-loops-api.com/skyscrapers/1</code>
              </button>
            </div>
          </div>
        
          <div className="mockup-browser border-base-300 border max-w-auto lg:max-w-2xl">
            <div className="mockup-browser-toolbar">
              <div className="input border-base-300 border">https://time-loops-api.com/<span className='endpoint-category'>{url}</span>/1</div>
            </div>
            <div className="border-base-300 flex justify-start border-t px-4 py-5">
                <pre>{object}</pre>
            </div>
          </div>
      </section>

      <section className="flex flex-col lg:flex-row pb-7 lg:items-start justify-center gap-10 mb-14">
          <div>
            <h1 className="text-4xl font-bold mb-9 text-center">
              Choose between three categories
            </h1>

            <div className='flex gap-9'>
              {
                cards.map(card => 
                  <div key={card.description} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title text-3xl">{card.title}</h2>
                      <p>{card.description}</p>
                      <div className="divider" />
                      <div className="card-actions justify-between">
                        <button className="btn btn-primary btn-outline">Shape</button>
                        <Link href='' className="btn btn-primary">{card.button}</Link>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>

          </div>
      </section>

      <section className="flex justify-end mb-10">
        <Link href='' className="max-w-fit group flex items-center gap-5 px-4 py-2transition-all">
          <span className='text-xl'>Docs</span>
          <span className="transition-transform transform group-hover:translate-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" width="20" height="20" viewBox="0 0 20 20">
              <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"/>
            </svg>
          </span>
        </Link>
      </section>
    </>
  );
};

export default Home;