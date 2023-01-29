import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MensagemService } from '../../../../shared/mensagem/mensagem.service';


@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    modal: NgbModalRef;

    constructor(
        private msgService: MensagemService,private modalService: NgbModal,
        ) { }

    ngOnInit() {
    }

    teste(modal){
        this.modal = this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: false, backdrop: 'static' });    }
}
