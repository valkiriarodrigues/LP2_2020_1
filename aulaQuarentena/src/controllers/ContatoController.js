import Contato from '../models/Contato';

const controller = {

    salvar: async (contato) => {
        await  Contato.create(contato);
    },

    recuperarTodos: async () => await contato.find(),
    
    recuperarPorNome: async(nomeConsulta) => await contato.find({
        nome:{
            '$regex': nomeConsulta, 
            '$options':'i'
        }
    })
};

export default controller;