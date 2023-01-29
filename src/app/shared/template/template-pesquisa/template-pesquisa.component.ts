import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-pesquisa[titulo]',
  templateUrl: './template-pesquisa.component.html'
})
export class TemplatePesquisaComponent implements OnInit {

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
    * Emite o evento de 'Novo'.
    */
    @Output() onEventoNovo: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router,private route: ActivatedRoute,) { }

    ngOnInit(): void {
    }

    onNovo(){
        this.router.navigate(this.caminhoNovo, { relativeTo: this.route });
        //this.onEventoNovo.emit();
      }
    
      onPesquisar(){
        this.onEventoPesquisar.emit();
      }

}
