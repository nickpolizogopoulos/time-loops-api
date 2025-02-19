'use client';

import Link from "next/link";

type Card = {
    title: string;
    description: string;
    buttonText: string;
    docksPath: string;
};
  
const cards: Card[] = [
    {
        title: 'Music Albums',
        description: 'Iconic Music Albums from World-Famous Artists!',
        buttonText: '/albums',
        docksPath: 'albums'
    },
    {
        title: 'Quotes',
        description: 'Iconic Quotes from Legendary Figures!',
        buttonText: '/quotes',
        docksPath: 'quotes'
    },
    {
        title: 'Skyscrapers',
        description: 'Historic Skyscraper Buildings that shaped the Skyline!',
        buttonText: '/skyscrapers',
        docksPath: 'skyscrapers'
    },
    {
        title: 'Software Tools',
        description: 'Revolutionary Software Tools that Transformed Technology!',
        buttonText: '/software-tools',
        docksPath: 'software-tools'
    }
];  

const Categories = () => {
    return (
        <>
            <section className="mb-12 md:mb-10">
                <h1 className="text-4xl font-semibold text-center mb-10">
                    Choose between four categories
                </h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {
                        cards.map((card) => (
                            <div
                                key={card.description}
                                className="card bg-base-200/50 shadow-lg card-bordered border-primary max-w-96 sm:w-[48%] lg:w-96"
                            >
                                <div className="card-body">
                                    <h2 className="card-title font-semibold text-3xl">
                                        {card.title}
                                    </h2>
                                    <p>{card.description}</p>
                                    <div className="divider" />
                                    <div className="card-actions justify-between">
                                        <Link
                                            href={`/docs#${card.docksPath}`}
                                            className="btn btn-primary btn-outline bg-base-100 min-w-36"
                                        >
                                            See on Docs
                                        </Link>
                                        <Link
                                            target='_blank'
                                            href={`${card.buttonText}`}
                                            className="btn btn-primary min-w-36"
                                        >
                                            {card.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default Categories;