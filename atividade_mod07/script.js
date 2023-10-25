const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

function validar() {
    const valor1 = Number(number1.value);
    const valor2 = Number(number2.value);

    if ( valor1 >= valor2) {
        alert("O segundo número precisa ser maior que o primeiro");
    } else {
        alert("A inserção dos números foi realizada com sucesso!");
    }
}

