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
        <section className="flex flex-col lg:flex-row pb-7 lg:items-start justify-center gap-10 mb-14">
            <div>
                <h1 className="text-4xl font-bold mb-9 text-center">
                    Choose between three categories
                </h1>
                <div className='flex gap-9'>
                {
                    cards.map(card => 
                    <div key={card.description} className="card bg-base-100 w-96 shadow-xl card-bordered border-primary">
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
            </div>
        </section>
    );
};

export default Categories;