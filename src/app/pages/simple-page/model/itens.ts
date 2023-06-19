import { FormControl, FormGroup } from "@angular/forms";
import { EntidadeBase } from "../../../shared/models/base-resource.model";

export class Item extends EntidadeBase {
    nome: string;  

    static montarFormulario(dados: Item): FormGroup {
        return new FormGroup({
            id: new FormControl({ value: dados.id, disabled: true }),
            nome: new FormControl(dados.nome),          
        });
    }

}
