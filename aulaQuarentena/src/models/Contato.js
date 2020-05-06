import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    nome: {
        type: String, //campo obrigatorio
        required: true
    },

    telefone: {
        type: String,
        required: true
    },
    email: String,
    dataNascimento: Date
});

const Contato = mongoose.model('contato', esquema);

export default Contato;