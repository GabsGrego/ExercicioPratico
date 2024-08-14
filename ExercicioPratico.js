function encontrarMaiorNumero(numeros){
    let maiorNumero = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero){
            maiorNumero = numeros[i];
        }
    }

    return maiorNumero;
}

function encontrarMenorNumero(numeros){
    let menorNumero = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero){
            menorNumero = numeros[i];
        }
    }

    return menorNumero;
}

let numeros = [10,4,22,15,9,2,13,23];
let maior = encontrarMaiorNumero(numeros);
let menor = encontrarMenorNumero(numeros);

console.log("Dentre os",numeros.length, "números do Array o maior número é", maior,"e o menor número é", menor,".");
