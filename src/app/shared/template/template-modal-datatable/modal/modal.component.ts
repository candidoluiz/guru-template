import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    /**
     * Usado para setar o 'Titulo' no modal.
     */
    @Input() titulo: string;
    
    /**
     * Informa o componente para controlar a exibição dos botões.
     */
    @Input() formulario: FormGroup;

    /**
     * Informa qual o texto será exibido no botão de 'Salvar'.
     * Por padrão, o texto exibido é o 'Adicionar'.
     * 
     * Padrão - false
     */
    @Input() exibeTextoSalvar = false;

    /**
     * Exibe o botão "Adicionar" ou "Alterar".
     * Ex: False em situações que não se podem adicionar ou alterar registros.
     * 
     * Padrão - true
     */
    @Input() exibeAdicionarAlterar = true;

    /**
     * Esconde a barra de botoes
     * Ex: true em situações que é utilizado botoes personalizados.
     * 
     * Padrão - true
     */
    @Input() esconderBotoesPadrao = false;

    /**
    * Permite fechar o modal com o formulario invalido
    * Ex: true em situações que nao pode fechar o modal ate deixar o formulario valido.
    * 
    * Padrão - true
    */
    @Input() fecharFormularioInvalido = true;


    /**
     * Emite o evento de 'Fechar' que foi clicado no botão 'X' no cabeçalho do modal.
     */
    @Output() onEventoFechar: EventEmitter<any> = new EventEmitter();
    
    /**
     * Emite o evento de 'Salvar' que foi clicado no botão 'Salvar' no rodapé do modal.
     */
    @Output() onEventoSalvar: EventEmitter<any> = new EventEmitter();
    
    /**
     * Emite o evento de 'Cancelar' que foi clicado no botão 'Cancelar' no rodapé do modal.
     */
    @Output() onEventoCancelar: EventEmitter<any> = new EventEmitter();

    textoAdicionar = 'Adicionar';
    iconeAdicionar = 'ti-arrow-down';
    iconeFechar = 'icofont icofont-ui-close';

    constructor() { }

    ngOnInit(): void {
    }

    onFechar(){
        this.onEventoFechar.emit();
    }

    onSalvar(){
        this.onEventoSalvar.emit();
    }
    onCancelar(){
        this.onEventoCancelar.emit();
    }

    

}
