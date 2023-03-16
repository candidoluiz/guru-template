import { Injectable, Injector, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { PaginaConsulta } from "../../builder/model/pagina-consulta";
import { MensagemService } from "../../mensagem/mensagem.service";
import { EntidadeBase } from "../../models/base-resource.model";
import { BaseResourceService } from "../../service/base-resource.service";

@Injectable()
export abstract class BaseConsultaComponent<T extends EntidadeBase> implements OnDestroy, OnInit {

    protected route: ActivatedRoute;
    protected router: Router;
    protected msgService: MensagemService;
    protected spinnerService: NgxSpinnerService;
    protected qntRegistro = 5;
    formulario: FormGroup;
    dataDatable;
    itens: PaginaConsulta<T>;

    abstract montarFiltro(): FormGroup;
    abstract montarDatatable();
    abstract titulo(): string;

    constructor(
        protected injector: Injector,
        private service: BaseResourceService<T>,
    ) {
        this.route = this.injector.get(ActivatedRoute);
        this.router = this.injector.get(Router);
        this.msgService = this.injector.get(MensagemService);
        this.spinnerService = this.injector.get(NgxSpinnerService);
    }
    ngOnInit(): void {
        this.onInicializar();
        this.montarTabela();
    }

    ngOnDestroy(): void {

    }

    onInicializar() {
        this.formulario = this.montarFiltro();
    }

    montarTabela() {
        this.dataDatable = this.montarDatatable();
    }

    editar(event) {
        this.router.navigate([event.data.id, "edit"], { relativeTo: this.route })
    }

    onPesquisar() {
        this.onMudarPagina({ first: 0, rows: this.qntRegistro })
    }

    onMudarPagina(val) {
        this.paginacao(val);
        this.buscarRegistros();
    }

    private paginacao(val) {
        this.formulario.addControl('page', new FormControl(''))
        this.formulario.addControl('size', new FormControl(''))

        this.formulario.get("page").setValue(this.paginaSelecionada(val.rows, val.first));
        this.formulario.get("size").setValue(val.rows);
    }

    private paginaSelecionada(quantidade, pagina) {
        return pagina / quantidade
    }

    buscarRegistros() {
        this.spinnerService.show();
        this.service.consultaSumario(this.formulario.value).subscribe(ret => {
            if (ret) {
                this.retornoBusca(ret);
            }
            this.spinnerService.hide();
        }, erro => {
            this.spinnerService.hide();
            this.erroBusca(erro);
        })
    }

    protected retornoBusca(retorno) {
        this.itens = new PaginaConsulta(retorno);
    }

    protected erroBusca(erro) {
        this.msgService.showMensagemErro('', erro);
    }
}