import { Component, Input, OnInit } from '@angular/core';
import { FormularioValidacao } from '../formulario-validacao';

@Component({
    selector: 'app-error-msg',
    templateUrl: './error-msg.component.html'
})
export class ErrorMsgComponent  {

    @Input() control
    @Input() label: string;

    get mensagemErro() {
        for(const nomePropriedade in this.control?.errors){
            if(this.control.errors.hasOwnProperty(nomePropriedade) && this.control.touched){
                return FormularioValidacao.getMensagemErro(this.label, nomePropriedade);
            }           
        }
        return null;
    }

   

}
