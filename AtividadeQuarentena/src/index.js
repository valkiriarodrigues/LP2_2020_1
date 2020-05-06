import  * as db from './config/db';
import ItemController from './controllers/ItemController';
import Item from './models/Item';



// fazer os testes

const ItemController = new ItemController();

let recuperarItens = async () => {
    db.conectarBD();
    

    const itens = await ItemController.recuperarItens();
    console.log(itens);

    db.desconectarBD();

}
recuperarItens();