import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MensagemService } from '../../mensagem/mensagem.service';

@Component({
    selector: 'app-template-formulario',
    templateUrl: './template-formulario.component.html'
})
export class TemplateFormularioComponent implements OnInit {

    @Input() buttonLink: string;
    @Input() titulo: string;
    @Input() formulario: FormGroup;
    @Output() onEventoSalvar: EventEmitter<any> = new EventEmitter();

    @Input() modoEdicao: string = 'new';
    @Input() habilitaExcluir: boolean = true;
    @Output() onEventoExcluir: EventEmitter<any> = new EventEmitter();

    constructor(private msgService: MensagemService,) { }

    ngOnInit(): void {
    }

    onSalvar(voltar) {
        this.onEventoSalvar.emit(voltar)
    }

    mostrarExcluir(): boolean {
        return this.habilitaExcluir && this.modoEdicao=='edit';
    }

    onExcluir(){
        this.msgService.showMensagemExclusao().then((ret) => {
          if ( ret.value ){
            this.onEventoExcluir.emit();
          }
        });
      }

}
