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
    @Output() onRowSelect: EventEmitter<any> = new EventEmitter();   

  constructor() { }

  ngOnInit(): void {
  }

  rowSelect(event){
    this.onRowSelect.emit(event)
  }

  get colunas(): Coluna[]{return this.datatable.colunas;}
  get totalRecords(){ return 0;}

  onDefinirEstilo(coluna: Coluna){
    return{
        'text-align':coluna.alinhamento,
        'max-width':`${coluna.tamanho}%`,
        'width':`${coluna.tamanho}%`
    }
  } 

  pesquisar(event: LazyLoadEvent){

  }

}
