import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { EntidadeBase } from "../../../shared/models/base-resource.model";
import { Item } from "./itens";

export class Exemplo extends EntidadeBase {
    nome: string;
    observacao: string;
    itens: Item[];

    static montarFormulario(dados: Exemplo): FormGroup {
        return new FormGroup({
            id: new FormControl({ value: dados.id, disabled: true }),
            nome: new FormControl(dados.nome, [Validators.required]),
            observacao: new FormControl(dados.observacao),
            itens: new FormArray(dados.itens ? dados.itens.map(i=>Item.montarFormulario(i)): [])
        });
    }

    static montarFiltro(): FormGroup {
        return new FormGroup({
            nome: new FormControl(),
            cidade: new FormControl(),
            uf: new FormControl()
        });
    }

    static fromJson(jsonData: any): Exemplo {
        return Object.assign(new Exemplo(), jsonData);
    }

}