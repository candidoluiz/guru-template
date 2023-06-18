import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Coluna } from '../../builder/model/coluna';
import { DataTable } from '../../builder/model/datatable';
import { FormArray } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-template-modal-datatable',
    templateUrl: './template-modal-datatable.component.html',
    styleUrls: ['./template-modal-datatable.component.scss']
})
export class TemplateModalDatatableComponent implements OnInit {

    /**
     * Usado para informar um título para o card acima da datatable.
     *
     * @type string
     */
    @Input() tituloCard: string;

    /**
     * Atributo usado para referênciar o modal que será aberto.
     */
    @Input() modalReferencia: any;

    /**
    * O Tamanho do modal poderá ser:
    *
    * 'sm'
    * 'md'
    * 'lg'
    * 'xl'
    * 'el'
    * 
  */
  @Input() tamanhoModal: 'sm' | 'lg' | 'xl' | string;

    /**
   * O evento Abrir Modal retorna uma referência do modal que está aberto.
   * 
   * @return NgbModalRef
  */
  @Output() onEventoAbrirModal: EventEmitter<NgbModalRef> = new EventEmitter();

    @Input() datatable: DataTable;
    @Input() iconeVisualizarPersonalizado: TemplateRef<any>;
    @Input() iconeEditarPersonalizado: TemplateRef<any>;
    @Input() iconeExcluirPersonalizado: TemplateRef<any>;
    @Input() iconeImprimirPersonalizado: TemplateRef<any>;
    @Input() itens: any[] = [
        {id: '1', nome:'teste',observacao: 'fff'},
        {id: '2', nome:'teste',observacao: 'fff'},
        {id: '3', nome:'teste',observacao: 'fff'},
        {id: '4', nome:'teste',observacao: 'fff'},
    ];

    @Output() onEditarItem = new EventEmitter();
    @Output() onVisualizarItem = new EventEmitter();
    @Output() onExcluirItem = new EventEmitter();

    semSombra = 'semSombra'   

    constructor(private modalService: NgbModal) { }

    ngOnInit(): void {
    }

    get colunas(): Coluna[] { return this.datatable.colunas; }

    onDefinirEstilo(coluna: Coluna) {
        return {
            'text-align': coluna.alinhamento,
            'max-width': `${coluna.tamanho}%`,
            'width': `${coluna.tamanho}%`
        }
    }

    definirTipoColuna(coluna){

    }

    onEditar(element){
        this.onEditarItem.emit(element);
    }

    onExcluir(element){
        this.onExcluirItem.emit(element);
    }

    onAbrirModal(){
        let modal = this.modalService.open(this.modalReferencia, { ariaLabelledBy: 'modal-basic-title', size: this.tamanhoModal, keyboard: false, backdrop: 'static' });
        this.onEventoAbrirModal.emit(modal);
    }

}
