import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { DataTable } from "../../builder/model/datatable";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { EntidadeBase } from "../../models/base-resource.model";

@Injectable()
export abstract class BaseModalComponent<T extends EntidadeBase> implements OnDestroy, OnInit {

    datatable;
    formulario: FormGroup;
    index = 0;
    edicao: boolean = false;

    abstract montarFormulario(entidade: any);
    abstract abrirModal();
    abstract salvar();
    abstract getItens(): FormArray;

    constructor() { }

    abstract editar();

    private _modal: NgbModalRef;

    /**
    * Método inicial da construção do DataTable
    */
    abstract montarDatatable(): DataTable;

    /**
   * Método para informar o título do modal
   */
    abstract titulo(): string;

    set modal(modal: NgbModalRef) {
        this._modal = modal;
    }

    get modal(): NgbModalRef {
        return this._modal;
    }

    ngOnDestroy(): void {

    }
    ngOnInit(): void {
        this.montarTabela();
    }

    montarTabela() {
        this.datatable = this.montarDatatable();
    }

    onInicializar(dados: T) {
        this.formulario = this.montarFormulario(dados);
        this.montarTabela();
    }

    onSalvar() {
        this.salvar();
        this.modal.close();
        this.edicao = false;
    }

    onSalvarNovo(dados = null) {
        if (!dados)
            dados = this.montarFormulario(this.formulario.getRawValue());

        this.getItens().push(dados);
    }

    onSalvarEdicao(dados = null) {
        if (!dados)
            dados = this.formulario.getRawValue();

        let controle = this.getItens().controls[this.index];
        controle.setValue(dados);
    }

    onEditar(registro) {
        this.modal = registro.modal;
        this.index = registro.index;
        this.edicao = true;
        this.editar();
    }

    onAbrirModal(event) {
        this.modal = event;
        this.abrirModal();
    }

    onExcluir(registro) {
        this.getItens().removeAt(registro);
      }

}