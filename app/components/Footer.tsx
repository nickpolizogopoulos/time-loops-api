import Link from "next/link";
import Image from 'next/image';
import Social from "./Social";

type NavLink = {
    name: string;
    path: string;
};

const navigationLinks: NavLink[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Docs',
        path: '/docs'
    },
    {
        name: 'Source Code',
        path: 'https://github.com/nickpolizogopoulos/time-loops-api'
    }
];

const Footer = () => {
    return (
        
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside className="flex flex-col sm:flex-row gap-7 xl:ml-16">
                <Link href='/'>
                    <Image
                        className="max-w-8 transition-all hover:-rotate-6 hover:scale-110"
                        width={2000}
                        height={2000}
                        src='/time-loops-icon.png'
                        alt='Time Loops API'
                    />
                </Link>
                <div>
                    <h6 className="footer-title">
                        © 2025 Time Loops API - All rights reserved.
                    </h6>
                    <p className='text-base'>
                        Reliable API for Developers Who Demand Real Data, 
                        by <Link href='https://nick-polizogopoulos.web.app/' className='underline' target='_blank'>
                            Nick Polizogopoulos
                        </Link>.
                    </p>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Navigate</h6>
                <ul className="flex gap-5 text-base font-light">
                    {
                        navigationLinks.map(link => 
                            <li key={link.path}>
                                <Link
                                    key={link.path} href={link.path} className="link link-hover"
                                    target={link.name === 'Source Code' ? '_blank' : '_self'}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
            <nav>
                <h6 className="footer-title">Find me</h6>
                <Social placement='footer' />
            </nav>
        </footer>
    );
};

export default Footer;