
function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleNumber(number) {
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

init();
