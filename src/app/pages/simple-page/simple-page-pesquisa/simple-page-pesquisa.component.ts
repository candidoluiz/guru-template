import { Exemplo } from './../model/exemplo';
import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExemploService } from '../service/exemplo.service';
import { DataTableBuilder } from 'src/app/shared/builder/datatable-builder/datatable-builder';
import { BaseConsultaComponent } from 'src/app/shared/components/base-components/base-consulta.component';

@Component({
    selector: 'app-simple-page-pesquisa',
    templateUrl: './simple-page-pesquisa.component.html'
})
export class SimplePagePesquisaComponent extends BaseConsultaComponent<Exemplo> { 

    constructor(
        private exemploService: ExemploService,
        private formBuilder: FormBuilder,
        protected override injector: Injector
    ) { super(injector, exemploService)}

    montarDatatable() {
        return DataTableBuilder
            .builder()
                .criarColunasSimples('Código','id',1)
                .criarColunasSimples('Exemplo','nome')
                .criarColunasSimples('Observação','observacao')
            .construir();
    }

    montarFiltro(): FormGroup {        
        return this.formBuilder.group({
            nome: '',
            cidade: '',
            uf: ''
        });
    }  

    titulo(): string {       
        return 'CONSULTA DE EXEMPLO'
    }

    onPesquisar(){
        
    }

}