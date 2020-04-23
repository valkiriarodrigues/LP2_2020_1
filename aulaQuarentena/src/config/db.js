import mongoose from 'mongoose';


const URI_BD ='mongodb://localhost/agenda'; //agenda é o nome do banco de dados

export const conectarBD = () => {
    mongoose
    .connect(URI_BD, {useNewUrlParser: true, useUnifiedTopology: true }) // pegou esses dois parametros do terminal
    .then(() => console.log (`mongoose conectado em ${URI_BD}` )) // procurar  e estar aqui
    .catch(erro => console.log(erro));  //se der erro na conecção do bamco vai informar aqui

}

//desconectar

export const desconectarBD = () => {
    mongoose
    .disconnect()
    .then(() => console.log (`mongoose desconectado em ${URI_BD}` ))
    .catch(erro => console.log(erro));  

}

