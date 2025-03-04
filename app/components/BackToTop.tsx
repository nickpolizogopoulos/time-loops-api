'use client';

import {
    useEffect,
    useState
} from 'react';

const BackToTopButton = () => {

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            setVisible(window.scrollY > 280);
        };

        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible &&
        <button
            onClick={scrollToTop}
            className="fixed bottom-2 right-2 sm:bottom-6 sm:right-6 p-1
            rounded border border-primary text-primary cursor-pointer
            transition-all duration-75 hover:scale-105"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
        </button>
    );
};

export default BackToTopButton;