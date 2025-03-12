function somaDigitos(N){
    function calcularSoma (soma){
        return numtoString().split('').reduce((Acc, digit) => acc + perseInt(digit), 0);
    }
     let primeiraIteracao = calcularSoma(n);
     console.log(`Primeira interação: ${primeiraIteracao}`);
     
