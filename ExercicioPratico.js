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

let numeros = [11,4,20,15,8,2,13,28];
let maior = encontrarMaiorNumero(numeros);
let menor = encontrarMenorNumero(numeros);

console.log("Dentre os",numeros.length, "números do Array o maior número é", maior,"e o menor número é", menor,".");