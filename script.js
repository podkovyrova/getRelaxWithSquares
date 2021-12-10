const board = document.querySelector('#board');
const colors = ['rgb(231, 93, 150)', 'aqua', 'rgb(111, 240, 51)', 'rgb(85, 47, 189)', 'rgb(247, 83, 43)'];
const SQUARES_NUMBER = 396;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
        setColor(square)
    )
    square.addEventListener('mouseleave', () =>
        removeColor(square)
    )


    board.append(square); //добавляем дивы квадратиков в общий контейнер
}
function setColor(element) {  //добавляем цвет
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {  //убираем цвет
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() { //получить рандомный цвет
    const indexOfColors = Math.floor(Math.random() * colors.length);
    return colors[indexOfColors];
}