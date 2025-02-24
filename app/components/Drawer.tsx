'use client';

import Link from "next/link";
import { sections } from "../docs/Sections";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Social from "./Social";
import ThemeController from "./ThemeController";
import Image from 'next/image';
import { useEffect } from "react";

const Drawer = ({children}: Readonly<{children: React.ReactNode;}>) => {

    const closeDrawer = (): void => {
        (document.getElementById('drawer') as HTMLInputElement).checked = false;
    };

    const handleEscPress = (event: KeyboardEvent): void => {
        if (event.key === 'Escape')
            closeDrawer();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEscPress);
        return () =>
            window.removeEventListener('keydown', handleEscPress);
    }, []);

    return (
        <div className="drawer">
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                    {children}
                <Footer />
            </div>
            <div className="drawer-side z-50 sm:hidden">
                <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul tabIndex={0} className='menu bg-base-200 text-base-content min-h-full w-72 px-4 py-2 justify-between'>
                    <section>
                        <div className="flex items-center justify-between">
                            <div>
                                <Image
                                    className="max-w-4 transition-all hover:-rotate-6 hover:scale-110"
                                    width={2000}
                                    height={2000}
                                    src='/time-loops-icon.png'
                                    alt='Time Loops API Icon'
                                />
                            </div>
                            <label htmlFor='drawer' className="btn btn-ghost btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="currentColor" fillRule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z" clipRule="evenodd"/>
                                </svg>
                            </label>
                        </div>
                        <li>
                            <Link onClick={closeDrawer} href='/' className='drawer-item-parent'>Home</Link>
                        </li>
                        <li>
                            <details open>
                                <summary>
                                    <Link onClick={closeDrawer} href='/docs' className='drawer-item-parent'>Docs</Link>
                                </summary>
                                <ul>
                                    {
                                        sections.map(section =>
                                            <li onClick={closeDrawer} key={section.path} className={`${section.isCategoryTitle ? 'drawer-item-parent' : 'pl-5 font-light'}`}>
                                                <Link href={`/docs#${section.path}`}>{section.listTitle}</Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href='https://github.com/nickpolizogopoulos/time-loops-api' className='drawer-item-parent' target='_blank'>GitHub</Link>
                        </li>
                    </section>
                    <section>
                        <div className="divider"><span className='text-base font-semibold p-0 m-0'>Time Loops API</span></div>
                        <div className="flex flex-row align-center justify-between">
                            <Social placement='drawer' />
                            <ThemeController />
                        </div>
                    </section>
                </ul>
            </div>
        </div>
    );
};

export default Drawer;