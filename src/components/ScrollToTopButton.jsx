export const ScrollToTopButton = () => {

    window.addEventListener('scroll', () => {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    return <>
        <button id="scrollToTopBtn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/*&#8679;*/}
        </button>
    </>
}