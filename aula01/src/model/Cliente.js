export default class Cliente{ // exporta deixa publica a classe cliente com a forma mais moderna ES6

    constructor(nome, endereco, cpf, telefone){ // constructor é uma função
        this.nome = nome; // this (esse  é o nome desse objeto) não sei o nome do cliemte então cria um string vazia
        this.endereco = endereco;
        this.cpf = cpf;
        this.telefone = telefone;
         
    }

}

//module.exports = Cliente; // exportando e deixando publico a classe cliente com a forma mais antiga