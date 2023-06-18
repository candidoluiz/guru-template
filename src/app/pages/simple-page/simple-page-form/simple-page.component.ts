import { Component, Injector, OnInit } from "@angular/core";
import { BaseFormularioComponent } from "../../../shared/components/base-components/base-formulario.component";
import { ExemploService } from "../service/exemplo.service";
import { Exemplo } from "../model/exemplo";
import { DataTableBuilder } from "src/app/shared/builder/datatable-builder/datatable-builder";

@Component({
    selector: 'app-simple-page',
    templateUrl: './simple-page.component.html'
})
export class SimplePageComponent extends BaseFormularioComponent<Exemplo> {

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

}
