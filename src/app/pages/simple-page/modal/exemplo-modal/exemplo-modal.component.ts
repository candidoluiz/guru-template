import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DataTableBuilder } from 'src/app/shared/builder/datatable-builder/datatable-builder';
import { BaseModalComponent } from 'src/app/shared/components/base-components/base-modal.component';
import { Exemplo } from '../../model/exemplo';
import { Item } from '../../model/itens';

@Component({
    selector: 'app-exemplo-modal',
    templateUrl: './exemplo-modal.component.html',
    styleUrls: ['./exemplo-modal.component.scss']
})
export class ExemploModalComponent extends BaseModalComponent<Item> implements OnInit {   

    @Input() arrayItens: FormArray

    constructor() { super() }

    override titulo(): string { return "Cadastro Especialidade"; }

    override montarDatatable() {
        return DataTableBuilder
            .builder()            
                .criarColunasSimples('Nome', 'nome')
                .criarColunasSimples('Observação', 'observacao')
                .permitirVisualizar()
                .permitirEditar()
                .permitirExcluir()
                .permitirImprimir()
            .construir();
    }

    override getItens(): FormArray {
        return this.arrayItens;
    }

    override montarFormulario(dados: any) {
        return Item.montarFormulario(dados)
    }

    override editar() {
        this.formulario = this.montarFormulario(this.arrayItens.value[this.index])
    }

    override salvar() {
        if(this.edicao){
            this.onSalvarEdicao();
        }else{
            this.onSalvarNovo();
        }
    }

    override abrirModal() {
        this.formulario = this.montarFormulario(new Item());
    }

}
