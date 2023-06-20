import { ColunaIcone } from "../model/coluna-icone";
import { ColunaAlteravelBuilder } from "./coluna-alteravel-builder";


export class ColunaIconeBuilder extends ColunaAlteravelBuilder{


    static override builder(): ColunaIconeBuilder{
        return new ColunaIconeBuilder();
    }

    override criarInstanciaObjeto(): ColunaIcone{
        return  new ColunaIcone();
    }

    funcaoClasse(funcaoClasse: Function){
        this.coluna.funcaoClasse = funcaoClasse;
        this.coluna.utilizaFuncaoClasse = true;
        return this;
    }

    funcaoTooltip(funcaoTooltip: Function){
        this.coluna.funcaoTooltip = funcaoTooltip;
        return this;
    }

    classePadrao(classePadrao: string){
        this.coluna.classePadrao = classePadrao;
        return this;
    }

    tooltipPadrao(tooltipPadrao: string){
        this.coluna.tooltipPadrao = tooltipPadrao;
        return this;
    }

    iconePadrao(iconePadrao: string){
        this.coluna.iconePadrao = iconePadrao;
        return this;
    }

}