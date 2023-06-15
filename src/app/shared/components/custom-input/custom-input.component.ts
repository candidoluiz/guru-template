import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
};

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    providers: [INPUT_FIELD_VALUE_ACCESSOR],
    host:{'(blur)': 'onTouched($event)'}
})
export class CustomInputComponent implements ControlValueAccessor {

    /**
     * Classe a ser definida
     */
    @Input() classeCss;
    /**
     * Id do componente
     */
    @Input() id: string;
    /**
     * Nome que será exibido
     */
    @Input() label: string;
    /**
     * Tipo do componente
     */
    @Input() type = 'text';
    /**
     * Utilizado para pegar o valor do componente
     */
    @Input() control;
    /**
     * Indica se será um componete apenas leitura
     */
    @Input() isReadOnly = false;
    /**
     * Caso o Input for um text-area, esse será o default da quantiade
     * de linhas
     */
    @Input() rows = 5;

    /**
     * Evento que será emitido ao sair do componente
     */
    @Output() eventoBlur = new EventEmitter()

    onChangeCb: (_: any) => void = () => { };
    onTouched: (_: any) => void = () => { };
    
    private innerValue: any;

    get value() {
        return this.innerValue;
    }

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCb(v);
        }
    }

    idName(){       
        return `txt${this.label.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(' ','')}`;
    }  

    writeValue(v: any): void {
        this.value = v;
    }
    registerOnChange(fn: any): void {
        this.onChangeCb = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isReadOnly = isDisabled;
    }

    onBlur(){
        this.eventoBlur.emit();
        this.onTouched(0);
    }

    aplicaCssErro(){
        if(this.control?.enabled){
            return {
                'has-error':this.verificarTouchedValido(),
                'has-feedback':true
              };
        }
        return '';
      
    }

    verificarTouchedValido(){
        return  !this.control?.valid &&  this.control?.touched;
    }

}
