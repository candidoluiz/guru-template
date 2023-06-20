import { ColunaAlteravel } from "../model/coluna-alteravel";
import { ColunaBuilder } from "./coluna-builder";

export class ColunaAlteravelBuilder extends ColunaBuilder{


    static override builder(): ColunaAlteravelBuilder{
        return new ColunaAlteravelBuilder();
    }


    override criarInstanciaObjeto(): ColunaAlteravel{
        return  new ColunaAlteravel();
    }

    funcaoValor(funcaoValor: Function){
        this.coluna.funcaoValor = funcaoValor;
        this.coluna.utilizaFuncaoValor = true;
        return this;
    }
}