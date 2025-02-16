'use client';

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside className="ml-16">
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current"
                >
                    <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
                </svg>
                <p>
                    Time Loops API - Reliable API for Developers Who Demand Real Data
                </p>
                <p>
                    <span className="mr-1">by</span> 
                    <Link href="https://nick-polizogopoulos.web.app/" className="underline" target="_blank">
                        Nick Polizogopoulos
                    </Link>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Navigate</h6>
                <Link href='' className="link link-hover">Home</Link>
                <Link href='' className="link link-hover">Docs</Link>
                <Link href='' className="link link-hover">Source Code</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link href='' className="link link-hover">Terms of use</Link>
                <Link href='' className="link link-hover">Privacy policy</Link>
                <Link href='' className="link link-hover">Cookie policy</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Find me</h6>
                <div className="grid grid-flow-col gap-4">
                    <Link href="https://www.linkedin.com/in/nickpolizogopoulos" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </Link>
                    <Link href="https://github.com/nickpolizogopoulos" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </Link>
                    <Link href="https://linktr.ee/nick_polizogopoulos" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path>
                        </svg>
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;