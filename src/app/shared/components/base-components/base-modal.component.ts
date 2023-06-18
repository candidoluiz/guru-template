import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DataTable } from "../../builder/model/datatable";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export abstract class BaseModalComponent<T> implements OnDestroy, OnInit {
    
    datatable;
    formulario: FormGroup;
    index = 0;
    edicao: boolean = false;

    abstract editar();

    private _modal: NgbModalRef;

     /**
     * Método inicial da construção do DataTable
     */
     abstract montarDatatable(): DataTable;

      /**
     * Método para informar o título do modal
     */
    abstract titulo(): string;

    set modal(modal: NgbModalRef) {
        this._modal = modal;
      }
    
      get modal(): NgbModalRef {
        return this._modal;
      }

    ngOnDestroy(): void {
        
    }
    ngOnInit(): void {      
        this.montarTabela();        
    }

    montarTabela() {
        this.datatable = this.montarDatatable();
    }

    onEditar(registro) {
        //this.modal = registro.modal;
        this.index = registro.index;
        this.edicao = true;
        this.editar();
      }
   

}