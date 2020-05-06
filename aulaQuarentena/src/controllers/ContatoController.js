
import Contato from '../models/Contato';


export default class ContatoController{
    
    async salvar(contato) {
       const contatoSalvo = await  Contato.create(contato);
       //atualizar
        return contatoSalvo; 
    }

     async recuperarTodos() {
         const contatos = await contato.find();
         return contatos;
     }

    async recuperarPorNome(nomeConsulta){
         const contatos = await contato.find({
            nome:{
                '$regex': nomeConsulta, 
                '$options':'i'
            }
        });

        return contatos;
    }

    async recuperarPeloId(id){
        const contato = await Contato.findById(id);
        return contato;
    }

    async remover(id){
      const resposta =  await Contato.deleteOne({
          _id: id
        });

        return resposta;
    }
    

}






