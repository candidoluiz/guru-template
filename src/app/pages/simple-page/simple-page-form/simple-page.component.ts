import { ConsultaSelectPersonalizado } from './../../../shared/components/consulta-select/consulta-select-personalizado';
import { Component, Injector } from "@angular/core";
import { BaseFormularioComponent } from "../../../shared/components/base-components/base-formulario.component";
import { ExemploService } from "../service/exemplo.service";
import { Exemplo } from "../model/exemplo";
import { FormArray } from "@angular/forms";

@Component({
    selector: 'app-simple-page',
    templateUrl: './simple-page.component.html'
})
export class SimplePageComponent extends BaseFormularioComponent<Exemplo> {
    
    consultaSelectEncaminhamentoFiltro = new ConsultaSelectPersonalizado(this.exemploService);

    constructor(
        protected exemploService: ExemploService,
        protected override injector: Injector) {
        super(injector, new Exemplo(), exemploService, Exemplo.fromJson);
    }

    protected buildResourceForm(): void {
        this.formulario = Exemplo.montarFormulario(new Exemplo());
    }

    protected override creationPageTitle(): string {
        return "Cadastro de Novo Exemplo";
    }

    protected override editionPageTitle(): string {
        const categoryName = this.resource.nome || "";
        return "Editando Exemplo: " + categoryName;
    }

    get itens(): FormArray{
        return this.formulario.get('itens') as FormArray
    }

}
