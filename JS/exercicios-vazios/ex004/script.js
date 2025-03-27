class divisao {
    constructor(divisor1, divisor2) {
        this.divisor1 = divisor1
        this.divisor2 = divisor2
    }

    calcularSoma() {
        return this.divisor1 + this.divisor2;
    }
    calcularSubtracao() {
        return this.divisor1 - this.divisor2;
    }
    calcularMultiplicacao() {
        return this.divisor1 * this.divisor2;
    }
    calcularDivisao() {
        return this.divisor1 / this.divisor2;
    }
}



const calcresultado = new divisao(Number(prompt("Digite um número: ")), Number(prompt("Digite o segundo número: ")));

resultado1 = calcresultado.calcularDivisao();
resultado2 = calcresultado.calcularSoma();
resultado3 = calcresultado.calcularSubtracao();
resultado4 = calcresultado.calcularMultiplicacao();

alert(resultado1)
alert(resultado2)
alert(resultado3)
alert(resultado4)