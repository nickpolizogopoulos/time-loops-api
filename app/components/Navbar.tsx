'use client';

import Link from 'next/link';
import Image from 'next/image';

import ThemeController from './ThemeController';

type NavLink = {
    name: string;
    path: string;
};

const github: string = 'https://github.com/nickpolizogopoulos';

const navLinks: NavLink[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Docs',
        path: 'docs'
    },
    {
        name: 'GitHub',
        path: github
    }
];

const Navbar = () => {
    return (
        <>
            <div className="shadow-xl shadow-black/5">
                <nav className="navbar h-24 justify-between mx-auto max-w-screen-2xl px-5">
                    <section>
                        <button className="px-2 btn btn-ghost block sm:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <Link href="/">
                            <Image
                                className="max-w-52 ml-5"
                                width={2000}
                                height={2000}
                                src='/time-loops-logo.png'
                                alt='Time Loops API'
                            />
                        </Link>
                    </section>
                    
                    <ul className="menu menu-horizontal hidden sm:inline-flex px-0">
                        {
                            navLinks.map(link => {
                                const target = link.path === github ? '_blank' : '_self';
                                return <li
                                    key={link.path}
                                    className='px-2'
                                >
                                    <Link className='font-medium rounded-lg' href={link.path} target={target}>
                                        {link.name}
                                    </Link>
                                </li>
                            })
                        }
                        <li>
                            <ThemeController />
                        </li>
                    </ul>
                </nav>
                <div className="divider h-0 m-0" />
            </div>
        </>
    );
};

export default Navbar;