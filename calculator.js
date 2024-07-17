let buffer = "0";
const screen = document.querySelector('.result');

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(number) {
    if (buffer === '0'){
        buffer = number;
    } else {
        buffer += number;
    }
}

function handleSymbol(symbol) {

}

function init() {
    console.log('hi');
    document.querySelector('.calc-buttons')
    .addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    });
}

function rerender() {
    screen.innerText = buffer;
}

init();
