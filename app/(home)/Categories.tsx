import Link from "next/link";

type Card = {
    title: string;
    description: string;
    buttonText: string;
    docksPath: string;
};
  
const cards: Card[] = [
    {
        title: '100 Music Albums',
        description: 'Timeless Music Albums from World-Famous Artists and Bands!',
        buttonText: '/albums',
        docksPath: 'albums'
    },
    {
        title: '250 Quotes',
        description: 'Iconic Quotes from Legendary Figures!',
        buttonText: '/quotes',
        docksPath: 'quotes'
    },
    {
        title: '10 Skyscrapers',
        description: 'Historic Skyscraper Buildings that shaped the Skyline!',
        buttonText: '/skyscrapers',
        docksPath: 'skyscrapers'
    },
    {
        title: '50 Software Tools',
        description: 'Revolutionary Software Tools that Transformed Technology!',
        buttonText: '/software-tools',
        docksPath: 'software-tools'
    }
];  

const Categories = () => {
    return (
        <section className="mb-12 md:mb-10">
            <h2 className="text-4xl font-semibold text-center mb-10">
                Choose between four categories
            </h2>
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
    );
};

export default Categories;