import { Injectable, Injector, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { MensagemService } from "../../mensagem/mensagem.service";
import { EntidadeBase } from "../../models/base-resource.model";
import { BaseResourceService } from "../../service/base-resource.service";

@Injectable()
export abstract class BaseConsultaComponent<T extends EntidadeBase> implements OnDestroy, OnInit {

    protected route: ActivatedRoute;
    protected router: Router;
    protected msgService: MensagemService;
    protected spinnerService: NgxSpinnerService;
    formulario: FormGroup;
    dataDatable;
    itens;

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
        this.montarTAbela();
        this.onInicializar();
    }

    ngOnDestroy(): void {
       
    }

    onInicializar(){
        this.formulario = this.montarFiltro();
        this.buscarRegistros();

    }

    montarTAbela(){
        this.dataDatable = this.montarDatatable();
    }

    editar(event){
        this.router.navigate([event.data.id, "edit"], { relativeTo: this.route })        
    }

    buscarRegistros(){
        this.spinnerService.show();
        this.service.consultaSumario(this.formulario.value).subscribe(ret=>{
            if(ret){
                this.itens = ret;

            }
            this.spinnerService.hide();
        }, erro=>{
            this.spinnerService.hide();
            this.msgService.showMensagemErro('', erro);
        })
    }

    // metodoBusca(service,parametros){
    //     return service.consultaSumario(parametros);
    // }  
}