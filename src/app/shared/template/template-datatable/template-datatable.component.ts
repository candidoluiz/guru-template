import { Coluna } from './../../builder/model/coluna';
import { DataTable } from './../../builder/model/datatable';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
    selector: 'app-template-datatable',
    templateUrl: './template-datatable.component.html'
})
export class TemplateDatatableComponent implements OnInit {

    @Input() products;
    @Input() datatable: DataTable;
    @Input() qntRegistro: number = 5;   
    @Output() onRowSelect: EventEmitter<any> = new EventEmitter();
    @Output() onEventoMudarPagina: EventEmitter<any> = new EventEmitter();

    first: number = 0;
   
    constructor() { }

    ngOnInit(): void {
    }

    exibePaginacao(): boolean {
        return this.products?.content?.length > 0;
    }

    rowSelect(event) {
        this.onRowSelect.emit(event)
    }

    get colunas(): Coluna[] { return this.datatable.colunas; }
    get totalRecords() { return this.products?.totalElements; }

    onDefinirEstilo(coluna: Coluna) {
        return {
            'text-align': coluna.alinhamento,
            'max-width': `${coluna.tamanho}%`,
            'width': `${coluna.tamanho}%`
        }
    }

    pesquisar(event: LazyLoadEvent) {
        this.onEventoMudarPagina.emit(event)
    }

    resetPaginacao(){
        this.first = 0;
    }

}
