// é aqui que vou criar o modelo do banco de dados
// e depois exportar para usa-lo assistir a aula 2 pra lembrar melhor
//criando o modelo 
import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    nome_item: { 
        type: String, 
        required: true //campo obrigatorio
    },

    quantidade_item: {
        type: Number,
        required: true //campo obrigatorio
    },

    marca_item: String // campo não obrigatório
   
});

const Item = mongoose.model('item', esquema);

export default Item;