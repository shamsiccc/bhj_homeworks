const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function resetGame(message) {
    alert(message);
    dead.textContent = '0';
    lost.textContent = '0';
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = function() {

        if (hole.classList.contains('hole_has-mole')) {

            dead.textContent = parseInt(dead.textContent) + 1;
            
            if (parseInt(dead.textContent) === 10) {
                resetGame('Поздравляем! Вы победили!');
            }
        } else {

            lost.textContent = parseInt(lost.textContent) + 1;
            
            if (parseInt(lost.textContent) === 10) {
                resetGame('Игра окончена. Вы проиграли!');
            }
        }
        
        hole.classList.remove('hole_has-mole');
    };
}