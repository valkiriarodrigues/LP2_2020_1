import ClienteController from './controller/ClienteController'

let nome = 'Valkiria Rodrigues';
let telefone = '(67) 99999-9999';
let endereco = 'Rua Duque de Caxias';
let cpf = '11111111111';

//instanciar controlador
let clienteCtrl = new ClienteController();

//cria um novo objeto de cliente
let cliente = clienteCtrl.criarCliente(nome, endereco, cpf, telefone);

console.log(cliente);




