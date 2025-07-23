document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('timer');
    let timeLeft = parseTime(timerElement.textContent);
    
    function parseTime(timeStr) {
        const parts = timeStr.split(':');
        return parseInt(parts[2]) + 
               parseInt(parts[1]) * 60 + 
               parseInt(parts[0]) * 3600;
    }
    
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${hours}:${mins}:${secs}`;
    }
    
    function updateTimer() {
        timeLeft--;
        timerElement.textContent = formatTime(timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Вы победили в конкурсе!');
        }
    }
    
    const timerInterval = setInterval(updateTimer, 1000);
});