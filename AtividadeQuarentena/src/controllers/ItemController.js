//importar o modelo criado em model

import Item from '../models/Item';

export default class ItemController{
    //salvando um item
    async salvar(item) {
       const itemSalvo = await  Item.create(item);
       //atualizar e salvar
        return itemSalvo; 
    }
//recuperando um item
     async recuperarTodos() {
         const itens = await item.find();
         return itens;
     }

    async recuperarPorItem(consultarItem){
         const itens = await itens.find({
            nome_item:{
                '$regex': consultarItem, 
                '$options':'i'
                //ignorando letras maiusculas e minusculas
            }
        });

        return itens;
    }
//recuperando o item pelo seu id
    async recuperarPeloId(id){
        const item = await Item.findById(id);
        return item;
    }
//remover um unico item
    async remover(id){
      const resposta =  await Item.deleteOne({
          _id: id
        });

        return resposta;
    }
    

}






