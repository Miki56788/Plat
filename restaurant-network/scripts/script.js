console.log("JavaScript подключен и работает!");

document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.scroll-fade');

    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight);
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
});
