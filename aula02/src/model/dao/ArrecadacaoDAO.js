import fs from 'fs';
import path from 'path';
import excelToJson from 'convert-excel-to-json';

import municipio from '../entity/Municipio';
import Municipio from '../entity/Municipio';

export default class ArrecadacaoDAO{
    carregarArrecadacoesDosMunicipios(){
        let municipios = [];


        /**
         * aponta para o arquivo da planilha de dados
         */

         let caminhoArquivo = path.resolve(__dirname,'../../data/dados.xls');

        let dados = excelToJson({
            source: fs.readFileSync(caminhoArquivo), // source=>fonte dos dados
            range: 'A4:P185' // coluna A linha 4 ,, coluna P linha 185 da planilha de municipios

        });

        dados.Plan1.forEach(elemento => {
            let nome = elemento.A;
            /**
             * object.values desenvolve todos os 
             * valores propriedades existentes dentro de um objeto
             */
           let valores = (Object.values(elemento)) ;
           let arrecadacoes = valores.slice(1, valores.length);
           let municipio =  new Municipio(nome, arrecadacoes);
           municipios.push(municipio);
        });

        return municipios;
    }
    

 
    
}