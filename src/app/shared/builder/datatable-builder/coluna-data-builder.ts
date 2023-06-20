import { ColunaData } from "../model/coluna-data";
import { ColunaBuilder } from "./coluna-builder"

export class ColunaDataBuilder extends ColunaBuilder{

    static override builder(): ColunaDataBuilder{
        return new ColunaDataBuilder();
    }


    override criarInstanciaObjeto(): ColunaData{
        return  new ColunaData();
    }

    exibirData(){
        this.coluna.tipoExibicao = 'dd/MM/yyyy';
        return this;
    }

    exibirDataHora(){
        this.coluna.tipoExibicao = 'dd/MM/yyyy HH:mm';
        return this;
    }
}