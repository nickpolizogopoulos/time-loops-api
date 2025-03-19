'use client';

import Link from "next/link";
import {
    JSX,
    useState
} from "react";

type Props = {
    scrollToId: string;
    content: string | JSX.Element;
};

const SectionTitle = ({scrollToId, content}: Props) => {

    const [isPressed, setIsPressed] = useState(false);

    return (
        <Link
            className="flex pb-4 text-sm font-bold gap-2 items-start hover:opacity-75 hover:underline w-fit"
            href={`#${scrollToId}`}
        >
            <svg className='opacity-40 mt-[6px]' xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 15 15">
                <g fill="currentColor">
                    <path d="M12.243 3.757a2 2 0 0 0-2.829 0L7.293 5.88L5.879 4.464L8 2.344a4 4 0 0 1 5.657 0l.707.706l-.09.09A4 4 0 0 1 13.658 8l-2.121 2.121l-1.415-1.414l2.122-2.121a2 2 0 0 0 0-2.829Zm-8.486 8.486a2 2 0 0 0 2.829 0l2.121-2.122l1.414 1.415L8 13.655a4 4 0 0 1-5.657 0l-.707-.706l.09-.09A4 4 0 0 1 2.342 8l2.121-2.121L5.88 7.293L3.757 9.414a2 2 0 0 0 0 2.829"/>
                    <path d="M10.828 6.586L9.414 5.172L5.172 9.414l1.414 1.414z"/>
                </g>
            </svg>
            <h2
                className={`text-2xl font-semibold ${isPressed ? 'scale-95' : undefined} transition-transform duration-75`}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
            >
                {content}
            </h2>
        </Link>
    );
};

export default SectionTitle;