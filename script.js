function somaDigitos(N){
    function calcularSoma (soma){
        return numtoString().split('').reduce((Acc, digit) => acc + perseInt(digit), 0);
    }
     let primeiraIteracao = calcularSoma(n);
     console.log(`Primeira interação: ${primeiraIteracao}`);
     
     if (primeiraIteracao >= 10) {
        let segundaIteracao = calcularSoma(primeiraIteracao);
        console.log(`Segunda iteração: ${segundaIteracao}`);
    } else {
        console.log("Segunda iteração: Não é possível calcular.");
    }
}