import fs from 'fs';
import path from 'path';
import excelToJson from 'convert-excel-to-json';


import Municipio from '../entity/Municipio';
import { ANOS} from '../../constants/colunas';

export default class ArrecadacaoDAO{
    carregarArrecadacoesDosMunicipios(){
        let municipios = [];
        let dados = this.extrairDasosDaPlanilha('A4:P185');
        

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

    carregarArrecadacoesPorAno(ano){
        if (ano in ANOS){ //in verifica se alguma propriedade existe dentro e um objeto
            let coluna = ANOS[ano];
            let range = `${coluna}4:${coluna}185`;

            let arrecadacoes = this.extrairDasosDaPlanilha(range);
            let nomesMunicipios = this.extrairDasosDaPlanilha('A4:A185');
            console.log(arrecadacoes, nomesMunicipios);
        }

    }
    extrairDasosDaPlanilha(range){
        let caminhoArquivo = path.resolve(__dirname,'../../data/dados.xls');

        let dados = excelToJson({
           source: fs.readFileSync(caminhoArquivo), 
           range: range // range recebe range
       });

       return dados;
             
    }
}


 
    
