import Link from "next/link"

const CTA = () => {
    return (
        <section className="flex justify-end mb-10">
            <Link href='/docs' className="max-w-fit group flex items-center gap-3 px-4 py-2transition-all">
            <span className='text-xl'>Docs</span>
            <span className="transition-transform transform group-hover:translate-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"/>
                </svg>
            </span>
            </Link>
        </section>
    );
};

export default CTA;