import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateDatatableComponent } from '../template-datatable/template-datatable.component';

@Component({
    selector: 'app-template-pesquisa[titulo]',
    templateUrl: './template-pesquisa.component.html'
})
export class TemplatePesquisaComponent implements OnInit {
    first=0;

    @Input() datatable;
    @Input() products;
    @Input() dataTablePersonalizado: TemplateRef<any>;

    @ViewChild(TemplateDatatableComponent) templateDatatableComponent: TemplateDatatableComponent;


    /**
    * Informa o caminho que será roteado ao usuário clicar no botão 'Novo'.
    */
    @Input() caminhoNovo: string[];

    /**
     * Informa o titulo do card
     */
    @Input() titulo: string;

    /**
    * Emite o evento de 'Pesquisar'.
    */
    @Output() onEventoPesquisar: EventEmitter<any> = new EventEmitter();


    /**
   * Emite o evento de 'Mudar de Página' após clique do usuário na página da table.
   * 
   * @return number - Número da página.
   */
    @Output() onEventoMudarPagina: EventEmitter<any> = new EventEmitter();

    /**
    * Emite o evento de 'Novo'.
    */
    @Output() onEventoNovo: EventEmitter<any> = new EventEmitter();


    /**
   * Emite o evento de 'Editar'.
   */
    @Output() onEventoEditar: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router, private route: ActivatedRoute,) { }

    ngOnInit(): void {
    }

    onNovo() {
        this.router.navigate(this.caminhoNovo, { relativeTo: this.route });
        //this.onEventoNovo.emit();
    }

    onPesquisar() {
        this.onEventoPesquisar.emit();
        this.templateDatatableComponent.resetPaginacao();
    }

    editar(element) {
        this.onEventoEditar.emit(element)
    }

    onMudarPagina(evento) {
        this.onEventoMudarPagina.emit(evento);
    }
  

}
