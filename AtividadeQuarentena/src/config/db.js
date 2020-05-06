//um arquivo onde faço as configurações dos banco de dados 
//cirar as funções conecta e desconecta 

import mongoose from 'mongoose';


const URI_BD ='mongodb://localhost/item'; //item é o nome do banco de dados

//conectar
export const conectarBD = () => {
    mongoose
    .connect(URI_BD, {useNewUrlParser: true, useUnifiedTopology: true }) // pegou esses dois parametros do terminal
    .then(() => console.log (`mongoose conectado em ${URI_BD}` )) // procurar  e estar aqui
    .catch(erro => console.log(erro));  //se der erro na conecção do banco vai informar aqui

}

//desconectar
export const desconectarBD = () => {
    mongoose
    .disconnect()
    .then(() => console.log (`mongoose desconectado em ${URI_BD}` ))
    .catch(erro => console.log(erro));  

}

