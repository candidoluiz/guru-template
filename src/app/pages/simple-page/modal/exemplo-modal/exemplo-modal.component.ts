import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DataTableBuilder } from 'src/app/shared/builder/datatable-builder/datatable-builder';
import { BaseModalComponent } from 'src/app/shared/components/base-components/base-modal.component';

@Component({
    selector: 'app-exemplo-modal',
    templateUrl: './exemplo-modal.component.html',
    styleUrls: ['./exemplo-modal.component.scss']
})
export class ExemploModalComponent extends BaseModalComponent<any> implements OnInit {

    @Input() arrayItens: FormArray

    constructor() { super() }

    override titulo(): string { return "Cadastro Especialidade"; }

    override montarDatatable() {
        return DataTableBuilder
            .builder()
            .criarColunasSimples('Código', 'id', 1)
            .criarColunasSimples('Nome', 'nome')
            .criarColunasSimples('Observação', 'observacao')
            .construir();
    }

    override editar() {
        this.arrayItens
    }

}
