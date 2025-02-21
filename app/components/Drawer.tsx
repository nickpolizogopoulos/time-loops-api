import Link from "next/link";
import { sections } from "../docs/Sections";
import ThemeController from "./ThemeController";
import Social from "./Social";

const Drawer = () => {
    return (
        <div className="drawer z-50">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button sm:hidden">
                    Open drawer
                </label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                
                <ul className="flex flex-col justify-between menu min-h-screen bg-base-200 w-4/6">
                    <section>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <details open>
                                <summary>
                                    <Link href='/docs'>Docs</Link>
                                </summary>
                                <ul>
                                    {
                                        sections.map(section => 
                                            <li>
                                                <Link href={`/docs#${section.path}`}>{section.listTitle}</Link>
                                            </li>        
                                        )
                                    }
                                </ul>
                            </details>
                        </li>
                        <li><a>GitHub</a></li>
                    </section>
                    <section>
                        <div className="divider">Time Loops API</div>
                        <div className='flex flex-row justify-between px-4 pb-1'>
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