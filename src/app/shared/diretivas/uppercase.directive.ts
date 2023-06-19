import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[salUppercase]',
  host: {
    '(input)': '$event'
  }
})
export class UppercaseDirective {

  ultimoValor: string;

  constructor(private elRef: ElementRef) { }

  @HostListener('input', ['$event']) onInput($event){
    var inicio = $event.target.selectionStart;
    var fim = $event.target.selectionEnd;

    // $event.target.value = $event.target.value.toUpperCase();
    $event.target.value = $event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    $event.target.setSelectionRange(inicio, fim);
    $event.preventDefault();

    if ( !this.ultimoValor || (this.ultimoValor && $event.target.value.length > 0 && this.ultimoValor !== $event.target.value)) {
      this.ultimoValor = this.elRef.nativeElement.value = $event.target.value;

      //Propagando
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('input', false, true);
      event.target.dispatchEvent(evt);

    }
  }

//   @HostListener('blur', ['$event'])
//   onBlur($event: any) {
//     $event.target.value = $event?.target?.value?.trim();
//   }

//   @HostListener('change', ['$event'])
//   onChange($event: any) {
//     $event.target.value = $event?.target?.value?.trim();
//   }
}
