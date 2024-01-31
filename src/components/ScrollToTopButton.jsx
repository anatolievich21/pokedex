import {useEffect} from "react";

export const ScrollToTopButton = () => {

    useEffect(() => {
        const scrollListener = () => {
            const scrollToTopBtn = document.getElementById('scrollToTopBtn');

            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return <>
        <button id="scrollToTopBtn" style={{display: 'none'}} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
}