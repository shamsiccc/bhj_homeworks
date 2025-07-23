document.addEventListener('DOMContentLoaded', function() {

    const reveals = document.querySelectorAll('.reveal');
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleScroll() {
        reveals.forEach(reveal => {
            if (isElementInViewport(reveal)) {
                reveal.classList.add('reveal_active');
            }
        });
    }
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
});