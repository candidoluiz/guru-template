import { Exemplo } from './../model/exemplo';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExemploService } from '../service/exemplo.service';
import { DataTableBuilder } from 'src/app/shared/builder/datatable-builder/datatable-builder';
import { BaseConsultaComponent } from 'src/app/shared/components/base-components/base-consulta.component';

@Component({
    selector: 'app-simple-page-pesquisa',
    templateUrl: './simple-page-pesquisa.component.html'
})
export class SimplePagePesquisaComponent extends BaseConsultaComponent<Exemplo> {
    dataDatable;

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
        this.dataDatable = DataTableBuilder
            .builder()
                .criarColunasSimples('Código','id',1)
                .criarColunasSimples('Exemplo','nome')
                .criarColunasSimples('Observação','observacao')
            .construir();        
    }

    montarFiltro(): FormGroup {        
        return this.formBuilder.group({
            codigo: '',
            descricao: ''           
        });
    }

    titulo(): string {       
        return 'CONSULTA DE EXEMPLO'
    }

}