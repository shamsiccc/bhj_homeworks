(() => {

    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    
    if (!cookie || !counter) {
        console.error('Элементы не найдены!');
        return;
    }
    
    let clickCount = 0;
    const originalWidth = 200;
    let isBig = true;
    
    cookie.addEventListener('click', () => {

        clickCount++;
        counter.textContent = clickCount;
        
        if (isBig) {
            cookie.width = originalWidth * 0.9;
        } else {
            cookie.width = originalWidth;
        }
        isBig = !isBig;
        
        cookie.style.transition = 'width 0.1s ease';
    });
    
    cookie.style.cursor = 'pointer';
})();