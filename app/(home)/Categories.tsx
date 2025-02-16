'use client';

import Link from "next/link";

type Card = {
    title: string;
    description: string;
    buttonText: string;
};
  
const cards: Card[] = [
    {
        title: 'Music Albums',
        description: 'Iconic Music Albums from World-Famous Artists!',
        buttonText: '/albums'
    },
    {
        title: 'Quotes',
        description: 'Iconic Quotes from Legendary Figures!',
        buttonText: '/quotes'
    },
    {
        title: 'Skyscrapers',
        description: 'Historic Skyscraper Buildings that shaped the Skyline!',
        buttonText: '/skyscrapers'
    }
];  

const Categories = () => {
    return (
        <>
            <h1 className="text-4xl font-bold mb-9 text-center">
                Choose between three categories
            </h1>
            <div className='flex flex-col items-center lg:flex-row justify-center gap-9 mb-12'>
                {
                    cards.map(card =>
                        <div key={card.description} className="card w-full md:w-7/12 lg:w-96 shadow-lg card-bordered border-primary">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">{card.title}</h2>
                                <p>{card.description}</p>
                                <div className="divider" />
                                <div className="card-actions justify-between">
                                    <Link href='' className="btn btn-primary btn-outline">
                                        Shape
                                    </Link>
                                    <Link href='' className="btn btn-primary">
                                        {card.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Categories;