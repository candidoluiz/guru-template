import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-template-datatable',
  templateUrl: './template-datatable.component.html'
})
export class TemplateDatatableComponent implements OnInit {
    
    @Input() products;
    @Output() onRowSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  rowSelect(event){
    this.onRowSelect.emit(event)
  }

}
