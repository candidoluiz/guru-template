import { ColunaBuilder } from './coluna-builder';
import { Coluna } from '../model/coluna';
import { DataTable } from './../model/datatable';

export class DataTableBuilder{
    datatable: DataTable = new  DataTable;
    colunas: Coluna[] =[];

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

    adicionarColuna(coluna: Coluna): DataTableBuilder{
        this.colunas.push(coluna);
        return this;
    }

    construir(): DataTable{
        this.datatable.colunas = this.colunas;
        this.datatable.gerarColunasExibidas();
        return this.datatable;
    }
}