import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EntidadeBase } from "../../../shared/models/base-resource.model";

export class Exemplo extends EntidadeBase{
    nome: string;

    static montarFormulario(dados: Exemplo): FormGroup{
        return new FormGroup({
            id: new FormControl({value: dados.id, disabled: true}),
            nome: new FormControl( dados.nome, [Validators.required]),         
        });
    }

    static fromJson(jsonData: any): Exemplo {
        return Object.assign(new Exemplo(), jsonData);
      }

  }