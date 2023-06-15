import { ColunaBuilder } from './coluna-builder';
import { Coluna } from '../model/coluna';
import { DataTable } from './../model/datatable';

export class DataTableBuilder{
    datatable: DataTable = new  DataTable;
    colunas: Coluna[] =[];

    /**
     * Método inicial da contrução das colunas
     * @returns 
     */
    static builder(){
        return new DataTableBuilder();
    }

    permitirVisualizar(): DataTableBuilder{
        this.datatable.permiteVisualizar = true;
        return this;
    }

    permitirImprimir(): DataTableBuilder{
        this.datatable.permiteImprimir = true;
        return this;
    }

    permitirEditar(): DataTableBuilder{        
        return this.permitirEditarQuando(true);
    }   

    permitirExcluir(): DataTableBuilder{
        return this.permitirExcluirQuando(true)        
    }

    permitirExcluirQuando(condicao: boolean): DataTableBuilder{
        this.datatable.permiteExcluir = condicao;
        return this;
    }

    permitirEditarQuando(condicao: boolean): DataTableBuilder{
        this.datatable.permiteEditar = condicao
        return this;
    }

    /**
     * Criação da coluna simples onde terá seu alinhamento ao centro
     * @param titulo Titulo da coluna
     * @param propriedade Propriedade que virá da api
     * @param tamanho tamanho passado em numerico para ser exibido em % na coluna default 5%
     * @returns 
     */
    criarColunasSimples(titulo: string, propriedade: string, tamanho: number = 5): DataTableBuilder{
        this.colunas.push(
            ColunaBuilder.builder()
                .alinharCentro()
                .propriedade(propriedade)
                .titulo(titulo)
                .tamanho(tamanho)
                .construir()
            );
        return this;

    }

    /**
     * Criação da coluna simples onde terá seu alinhamento a esquerda
     * @param titulo Titulo da coluna
     * @param propriedade Propriedade que virá da api
     * @param tamanho tamanho passado em numerico para ser exibido em % na coluna default 10%
     * @returns 
     */
    criarColunasTexto(titulo: string, propriedade: string, tamanho: number = 10): DataTableBuilder{
        this.colunas.push(
            ColunaBuilder.builder()
                .alinharEsquerda()
                .propriedade(propriedade)
                .titulo(titulo)
                .tamanho(tamanho)
                .construir()
            );
        return this;

    }

    /**
     * Adiciona uma coluna persolnalizada
     * @param coluna Coluna
     * @returns 
     */
    adicionarColuna(coluna: Coluna): DataTableBuilder{
        this.colunas.push(coluna);
        return this;
    }

    /**
     * Finaliza a construção das colunas
     * @returns 
     */
    construir(): DataTable{
        this.datatable.colunas = this.colunas;
        this.datatable.gerarColunasExibidas();
        return this.datatable;
    }
}