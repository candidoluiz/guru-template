import { NgxSpinnerService } from 'ngx-spinner';
import { MensagemService } from './../../../shared/mensagem/mensagem.service';
import { Component, Injector } from "@angular/core";
import { BaseFormularioComponent } from "../../../shared/components/base-components/base-formulario.component";
import { ExemploService } from "../service/exemplo.service";
import { Exemplo } from "../model/exemplo";

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html'
})
export class SimplePageComponent extends BaseFormularioComponent<Exemplo> {

    constructor(
        protected exemploService: ExemploService, 
        protected override injector: Injector, 
        msgService: MensagemService,
        protected spinner: NgxSpinnerService){
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
