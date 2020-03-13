



import Cliente from '../model/Cliente' //  importa a classe Cliente com a palavra reservada import(forma mais moderna ES6)
 export default class ClienteController{

        // Método
    criarCliente(nome, endereco, cpf, telefone){
        let cliente =  new Cliente(nome,endereco, cpf, telefone); // istancia objeto da classe cliente
        
        return cliente;

    }
}

//module.exports = ClienteController; forma antiga de importar