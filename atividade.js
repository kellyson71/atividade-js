// 1
function converterSegundos(totalSegundos) {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    return `${horas}h ${minutos}min ${segundos}s`;
}

// 2
function converterTemperatura(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    const kelvin = celsius + 273.15;
    return {
        celsius,
        fahrenheit: Number(fahrenheit.toFixed(2)),
        kelvin: Number(kelvin.toFixed(2))
    };
}

// 3
function resumoPedido(preco, quantidade) {
    const subtotal = preco * quantidade;
    let desconto = 0;

    if (subtotal > 300) {
        desconto = subtotal * 0.10;
    } else if (subtotal > 100) {
        desconto = subtotal * 0.05;
    }

    const total = subtotal - desconto;

    return `Preço unitário: R$ ${preco.toFixed(2)}
Quantidade: ${quantidade}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto: R$ ${desconto.toFixed(2)}
Total a pagar: R$ ${total.toFixed(2)}`;
}

// 4
function verificarSituacaoEleitoralMilitar(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    const podeVotar = idade >= 16;
    const votoObrigatorio = idade >= 18 && idade < 70;
    const isentoServicoMilitar = idade < 18;

    return {
        idade,
        podeVotar,
        votoObrigatorio,
        isentoServicoMilitar
    };
}

// 5
function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Erro: divisão por zero";
            }
            return num1 / num2;
        default:
            return "Erro: operador inválido";
    }
}

// 6
function classificarIMC(peso, altura) {
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

// 7
function pedraPapelTesoura(jogador1, jogador2) {
    const j1 = jogador1.toLowerCase();
    const j2 = jogador2.toLowerCase();

    if (j1 === j2) {
        return "Empate";
    }

    const regras = {
        pedra: 'tesoura',
        papel: 'pedra',
        tesoura: 'papel'
    };

    if (regras[j1] === j2) {
        return "Jogador 1 venceu";
    }

    return "Jogador 2 venceu";
}

// 8
function ehPalindromo(texto) {
    const tratado = texto.toLowerCase().replace(/\s+/g, '');
    const invertido = tratado.split('').reverse().join('');
    return tratado === invertido;
}

// 9
function estatisticasNotas(notas) {
    if (!notas || notas.length === 0) {
        return null;
    }

    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    const maior = Math.max(...notas);
    const menor = Math.min(...notas);

    return {
        media: Number(media.toFixed(2)),
        maior,
        menor
    };
}

// 10
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let anterior = 0;
    let atual = 1;

    for (let i = 2; i <= n; i++) {
        const proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    return atual;
}

// 11
function validarSenha(senha) {
    const pendencias = [];

    if (senha.length < 8) {
        pendencias.push("Mínimo de 8 caracteres");
    }
    if (!/[A-Z]/.test(senha)) {
        pendencias.push("Ao menos uma letra maiúscula");
    }
    if (!/[0-9]/.test(senha)) {
        pendencias.push("Ao menos um número");
    }

    return pendencias;
}

// 12
function calcularTotalEstoque(produtos) {
    return produtos.reduce((total, p) => total + p.preco * p.quantidade, 0);
}

function encontrarMaisCaro(produtos) {
    return produtos.reduce((maisCaro, p) => (p.preco > maisCaro.preco ? p : maisCaro), produtos[0]);
}

function listarAbaixoDoMinimo(produtos, minimo) {
    return produtos.filter(p => p.quantidade < minimo);
}

// 13
function adicionarContato(agenda, nome, telefone, categoria) {
    agenda.push({ nome, telefone, categoria });
    return agenda;
}

function removerContatoPorNome(agenda, nome) {
    const index = agenda.findIndex(c => c.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
        agenda.splice(index, 1);
    }
    return agenda;
}

function listarPorCategoria(agenda, categoria) {
    return agenda.filter(c => c.categoria.toLowerCase() === categoria.toLowerCase());
}

// 13 (complemento: valores únicos)
function obterValoresUnicos(array) {
    return [...new Set(array)];
}

// 14
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco * (1 - percentual / 100);
    }

    estaDisponivel() {
        return this.quantidade > 0;
    }
}

// 15
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return true;
        }
        return false;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    extrato() {
        return `Titular: ${this.titular} | Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

// 16
class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}

// 17
class Estoque {
    constructor(produtos = []) {
        this.produtos = produtos;
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    calcularValorTotal() {
        return this.produtos.reduce((total, p) => total + p.preco * p.quantidade, 0);
    }

    encontrarMaisCaro() {
        if (this.produtos.length === 0) return null;
        return this.produtos.reduce((maisCaro, p) => (p.preco > maisCaro.preco ? p : maisCaro), this.produtos[0]);
    }

    listarAbaixoDoMinimo(minimo) {
        return this.produtos.filter(p => p.quantidade < minimo);
    }
}

module.exports = {
    converterSegundos,
    converterTemperatura,
    resumoPedido,
    verificarSituacaoEleitoralMilitar,
    calculadora,
    classificarIMC,
    pedraPapelTesoura,
    ehPalindromo,
    estatisticasNotas,
    fibonacci,
    validarSenha,
    calcularTotalEstoque,
    encontrarMaisCaro,
    listarAbaixoDoMinimo,
    adicionarContato,
    removerContatoPorNome,
    listarPorCategoria,
    obterValoresUnicos,
    Produto,
    ContaBancaria,
    Retangulo,
    Estoque
};

if (require.main === module) {
    console.log("1:", converterSegundos(3665));
    console.log("2:", converterTemperatura(25));
    console.log("3:\n" + resumoPedido(50, 4));
    console.log("4:", verificarSituacaoEleitoralMilitar(2008));
    console.log("5:", calculadora(10, 2, '+'), calculadora(10, 0, '/'), calculadora(10, 2, '%'));
    console.log("6:", classificarIMC(70, 1.75));
    console.log("7:", pedraPapelTesoura("pedra", "tesoura"), pedraPapelTesoura("papel", "papel"));
    console.log("8:", ehPalindromo("A base do teto desaba"), ehPalindromo("javascript"));
    console.log("9:", estatisticasNotas([7.5, 8.0, 9.5, 6.0, 10.0]));
    console.log("10:", fibonacci(7));
    console.log("11:", validarSenha("abc"), validarSenha("Senha123"));

    const produtos = [
        { nome: "Teclado", preco: 250, quantidade: 5 },
        { nome: "Mouse", preco: 120, quantidade: 2 },
        { nome: "Monitor", preco: 900, quantidade: 1 }
    ];
    console.log("12 total:", calcularTotalEstoque(produtos));
    console.log("12 mais caro:", encontrarMaisCaro(produtos));
    console.log("12 abaixo de 3:", listarAbaixoDoMinimo(produtos, 3));

    let agenda = [];
    adicionarContato(agenda, "Carlos", "9999-1111", "Trabalho");
    adicionarContato(agenda, "Mariana", "9888-2222", "Amigos");
    console.log("13 listagem:", listarPorCategoria(agenda, "Trabalho"));
    removerContatoPorNome(agenda, "Carlos");
    console.log("13 apos remocao:", agenda);
    console.log("Valores unicos:", obterValoresUnicos([1, 2, 2, 3, 4, 4, 5]));

    const p1 = new Produto("Notebook", 3500, 4);
    p1.aplicarDesconto(10);
    console.log("14:", p1.nome, p1.preco, p1.estaDisponivel());

    const c1 = new ContaBancaria("Kellyson", 500);
    const c2 = new ContaBancaria("Maria", 200);
    c1.depositar(150);
    c1.sacar(100);
    c2.depositar(50);
    c2.sacar(400);
    console.log("15:", c1.extrato(), "|", c2.extrato());

    const ret = new Retangulo(10, 5);
    console.log("16 area:", ret.calcularArea(), "perimetro:", ret.calcularPerimetro());

    const estoqueClasse = new Estoque(produtos);
    console.log("17 total:", estoqueClasse.calcularValorTotal());
}
