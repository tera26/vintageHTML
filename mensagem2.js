document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const numberOfSquares = 7; // Número de quadrados pretos que você quer
    const squares = [];
    const squareSize = 100; // Tamanho dos quadrados

    function isOverlapping(x, y) {
        return squares.some(square => {
            return (
                x < square.x + squareSize &&
                x + squareSize > square.x &&
                y < square.y + squareSize &&
                y + squareSize > square.y
            );
        });
    }

    function generatePosition() {
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        const offsetX = (containerWidth - (numberOfSquares * squareSize)) / 2; // Centralizar horizontalmente
        const offsetY = (containerHeight - (numberOfSquares * squareSize)) / 2; // Centralizar verticalmente

        let x, y;
        do {
            x = offsetX + Math.random() * (containerWidth - offsetX - squareSize);
            y = offsetY + Math.random() * (containerHeight - offsetY - squareSize);
        } while (isOverlapping(x, y));

        return { x, y };
    }

    for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Gera posições aleatórias dentro do contêiner
        const { x, y } = generatePosition();

        // Define as posições dos quadrados
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;

        squares.push({ x, y });
        container.appendChild(square);
    }
});
