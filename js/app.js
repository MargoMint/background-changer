const button = document.getElementById('btn');
const textColor = document.querySelector('.color');

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function generateHex() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

button.addEventListener('click', () => {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    textColor.textContent = hexColor;
    textColor.style.color = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

