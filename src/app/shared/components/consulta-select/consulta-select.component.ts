import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConsultaSelect } from './consulta-select';
import { FormGroup } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'app-consulta-select',
    templateUrl: './consulta-select.component.html',
    styleUrls: ['./consulta-select.component.scss']
})
export class ConsultaSelectComponent implements OnInit {

     /**
     * Objeto de Consulta Select
     */
     @Input() consultaSelect: ConsultaSelect;

     /**
     * Nome que será apresentado em Label acima do select
     */
    @Input() nomeApresentacao: string = '';

    /**
     * Nome do campo (atributo) relacionado ao formulário passado como parâmetro
     */
    @Input() nomeCampo: string;

     /**
     * Formulário que será vinculado ao item selecionado
     */
     @Input() formulario: FormGroup;

     /**
     * Valor que será representado nas opções do select
     */
    @Input() bindLabel: string = 'descricaoPesquisa';

    /**
     * Valor efetivo que será enviado ao formulário quando o item for selecionado
     */
    @Input() bindValue: string;

    /**
     * Determina se a lista já vem pré-carregada (use com moderação)
     */
    @Input() preCarregado: boolean = false;

    /**
     * Placeholder do campo. Por padrão, virá como: Informe o(a) + nomeApresentacao
     */
    @Input() placeholder: string;

    /**
     * Determina se é possivel limpar o item selecionado
     */
    @Input() podeLimpar: boolean = true;

    @Input() appendTo: string = 'body';

    /**
     * Emite evento quando um item é selecionado
     */
    @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Emite evento quando o componente é aberto
     */
    @Output() onOpen: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Emite evento quando o componente é perde o foco
     */
     @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();

     @ViewChild('consultaNgSelect') consultaNgSelect: NgSelectComponent;

    constructor() { }

    ngOnInit(): void {
        this._preCarregado();
        this._placeholder();
    }

    _preCarregado(){
        if ( this.preCarregado ) {
            this.consultaSelect.consultar({term: ''});
        }
    }

    _placeholder(){
        if ( !this.placeholder ) {
            this.placeholder = "Informe o(a) " + this.nomeApresentacao;
        }
    }

    get loadingText() : string {
        return "Pesquisando registros...";
    }

    get notFoundText() : string {
        return "Nenhum registro encontrado.";
    }

    get formularioControl(){
        return this.formulario.get(this.nomeCampo)
    }

    change($event) {
        this.onChange.emit($event);
    }

    open($event) {
        this.onOpen.emit($event);
    }

    blur($event){
      this.onBlur.emit($event)
    }

    definirFocus(){
        this.consultaNgSelect.focus();
    }

    aplicaCssErro(){
        if(this.formularioControl?.enabled){
            return {
                'has-error':this.verificarTouchedValido(),
                'has-feedback':true
              };
        }
        return '';
      
    }

    verificarTouchedValido(){
        return  !this.formularioControl?.valid &&  this.formularioControl?.touched;
    }
}
