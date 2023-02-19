import { Coluna } from './coluna';

export class DataTable {
    permiteVisualizar: boolean;
    permiteEditar: boolean;
    permiteExcluir: boolean;
    permiteImprimir: boolean;

    colunas: Coluna[];

    cabecalho: string[];
    colunasExibidas: string[];
    colunasBotoesAcao: number;

    gerarColunasExibidas() {
        let colunasExibidas = ['botoesAcao'];
        let cabecalhoExibido = ['botoesAcao'];

        this.colunasBotoesAcao = 1;

        if (this.permiteVisualizar) {
            colunasExibidas.push('visualizar');
            this.colunasBotoesAcao += 1;
        }
        if (this.permiteEditar) {
            colunasExibidas.push('editar');
            this.colunasBotoesAcao += 1;
        }
        if (this.permiteExcluir) {
            colunasExibidas.push('excluir');
            this.colunasBotoesAcao += 1;
        }
        if (this.permiteImprimir) {
            colunasExibidas.push('imprimir');
            this.colunasBotoesAcao += 1;
        }

        this.colunas
            .filter(col => !col.oculta)
            .forEach(col => {
                colunasExibidas.push(col.propriedade);
                cabecalhoExibido.push(col.propriedade);
            })

        this.colunasExibidas = colunasExibidas;
        this.cabecalho = cabecalhoExibido;
    }

    calcularWidthAcoes(){
        return this.colunasBotoesAcao*3;
    }
}