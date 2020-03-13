import ArrecadacaoDAO from './ArrecadacaoDAO';


const descricao = `Testa as operações de leitura 
sobre a planilhia de dados de arrecadações de 
tributos sobre exploração mineral nos municipios do estado do Parana
`;

var dao;

describe(descricao, () => {

    beforeAll(() => dao = new ArrecadacaoDAO());

    test('deve carregar as arrecadações de todos os municipios', () => {
        let municipios = dao.carregarArrecadacoesDosMunicipios();
        /**
         * Espera que o vetor municipios tenha 182 elementos dentro
         *  dele ou seja os 182 municipios existentes na planilhia de dados
         */
        expect(municipios.length).toBe(182); // função do jest

    });
});