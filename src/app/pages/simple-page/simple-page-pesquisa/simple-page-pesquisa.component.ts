import { Exemplo } from './../model/exemplo';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseConsultaComponent } from '../../../shared/components/base-components/base-consulta.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExemploService } from '../service/exemplo.service';

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

    products = [      
        {'id':1,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':2,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':3,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':4,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':5,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':6,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':7,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':8,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':9,'nome':' uihrt erutihffd ihiuh iujhtuierhtet re uihrt erutih', observacao: 'fdfdfsds'},
    ]

    montarDatatable() {
        
    }

    montarFiltro(): FormGroup {
        return null;
        // return this.formBuilder.group({
        //     codigo: '',
        //     descricao: '',
        //     size: this.datatable.tamanhoPagina,
        //     page: this.datatable.numeroPagina
        // });
    }

    titulo(): string {
        return 'CONSULTA DE EXEMPLO'
    }

}