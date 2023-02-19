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
        this.montarDatatable();
        
    }

    ngOnDestroy(): void {
       
    }

    editar(event){
        this.router.navigate([event.data.id, "edit"], { relativeTo: this.route })        
    }


    metodoBusca(service,parametros){
        return service.consultaSumario(parametros);
    }
}