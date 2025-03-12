function somaDigitos(N){
    function
    soma_digitos_uma_vez(numero){
        let soma = 0;
        while (numero > 0){
            soma += numero % 10;
            numero =
            Math.floor(numero / 10);
        }
                return soma
            }
            //Primeira aplicação
            let resultado = 
            soma_digitos_uma_vez(N)
            console.log("Primeira interação:", resultado);
}
    