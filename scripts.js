// Função para adicionar o valor do botão clicado no display
function input(value) {
    document.getElementById('display').value += value;
}

// Função para calcular o valor do display
function calculate() {
    var display = document.getElementById('display');
    display.value = eval(display.value);
}

// Função para inverter o sinal do dispaly
function inverter() {
    var display = document.getElementById('display');
    display = display.value * -1;
    document.getElementById('display').value = display;
    
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Adicionando funcionalidade para as teclas do teclado
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const display = document.getElementById('display');
    // verificando se o valor da tecla é um número   
    if (!isNaN(key)) {
        display.value += key;
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        display.value += key;
    } else if (key === '.') {
        display.value += key;
    }
});
