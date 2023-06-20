import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Coluna } from '../../builder/model/coluna';
import { DataTable } from '../../builder/model/datatable';
import { FormArray } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ColunaData } from '../../builder/model/coluna-data';
import { ColunaAlteravel } from '../../builder/model/coluna-alteravel';
import { ColunaIcone } from '../../builder/model/coluna-icone';
import { ColunaPersonalizada } from '../../builder/model/coluna-personalizada';
import { ColunaTituloPersonalizada } from '../../builder/model/coluna-titulo-personalizada';

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
    @Input() itensArray: FormArray;

    @Output() onEditarItem = new EventEmitter();
    @Output() onVisualizarItem = new EventEmitter();
    @Output() onExcluirItem = new EventEmitter();

    semSombra = 'semSombra'   

    constructor(private modalService: NgbModal) { }

    ngOnInit(): void {
    }

    get colunas(): any[] { return this.datatable.colunas; }
    get podeEditar(): boolean { return this.datatable.permiteEditar; }
    get podeExcluir(): boolean { return this.datatable.permiteExcluir; }
    get podeImprimir(): boolean { return this.datatable.permiteImprimir; }

    onDefinirEstilo(coluna: Coluna) {
        return {
            'text-align': coluna.alinhamento,
            'max-width': `${coluna.tamanho}%`,
            'width': `${coluna.tamanho}%`
        }
    }

    get itens(){
        return this.itensArray?.value
    }

    definirTipoColuna(coluna){
        
        if( coluna instanceof ColunaIcone) return 'ICONE';
        else if( coluna instanceof ColunaData) return 'DATA';
        else if( coluna instanceof ColunaTituloPersonalizada) return 'TITULO-PERSONALIZADA';
        else if( coluna instanceof ColunaPersonalizada) return 'PERSONALIZADA';
        else if( coluna instanceof ColunaAlteravel) return 'ALTERAVEL';
    
            
        return null;
    }

    definirClasseIcone(coluna, element){
        if(coluna instanceof ColunaIcone  && coluna?.funcaoClasse ){
            return coluna.funcaoClasse(element);
        }

        return coluna.classePadrao;
    }

    definirTooltip(coluna,element){
        if(coluna instanceof ColunaIcone && coluna?.funcaoTooltip  ){            
            return coluna.funcaoTooltip(element);
        }

        return coluna.tooltipPadrao;
    }

    definirIcone(coluna,element){
        if(coluna instanceof ColunaIcone && coluna?.funcaoValor  ){            
            return coluna.funcaoValor(element);
        }

        return coluna.iconePadrao;
    }

    definirValor(coluna,element){
        if(coluna?.funcaoValor)
            return coluna.funcaoValor(element);
        return '';
    }

    onEditar(index){
        let modal = this.modalService.open(this.modalReferencia, { ariaLabelledBy: 'modal-basic-title', size: this.tamanhoModal, keyboard: false, backdrop: 'static' });
        this.onEditarItem.emit({modal: modal, index: index});       
    }

    onExcluir(element){
        this.onExcluirItem.emit(element);
    }

    onAbrirModal(){
        let modal = this.modalService.open(this.modalReferencia, { ariaLabelledBy: 'modal-basic-title', size: this.tamanhoModal, keyboard: false, backdrop: 'static' });
        this.onEventoAbrirModal.emit(modal);
    }

}
