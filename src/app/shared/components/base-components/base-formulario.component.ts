import { Directive, OnInit, AfterContentChecked, Injector } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { switchMap } from "rxjs/operators";
import { MensagemService } from "../../mensagem/mensagem.service";
import { EntidadeBase } from "../../models/base-resource.model";
import { BaseResourceService } from "../../service/base-resource.service";


@Directive()
export abstract class BaseFormularioComponent<T extends EntidadeBase> implements OnInit, AfterContentChecked {

    currentAction: string;
    formulario: FormGroup;
    pageTitle: string;
    serverErrorMessages: string[] = null;
    submittingForm: boolean = false;
    voltar = false;
    protected msgService: MensagemService;
    protected spinnerService: NgxSpinnerService;

    protected route: ActivatedRoute;
    protected router: Router;
    protected formBuilder: FormBuilder;

    constructor(
        protected injector: Injector,
        public resource: T,
        protected resourceService: BaseResourceService<T>,
        protected jsonDataToResourceFn: (jsonData) => T,
    ) {
        this.route = this.injector.get(ActivatedRoute);
        this.router = this.injector.get(Router);
        this.formBuilder = this.injector.get(FormBuilder);
        this.msgService = this.injector.get(MensagemService);
        this.spinnerService = this.injector.get(NgxSpinnerService);
    }

    ngOnInit() {
        this.setCurrentAction();
        this.buildResourceForm();
        this.loadResource();
    }

    ngAfterContentChecked() {
        this.setPageTitle();
    }

    submitForm(voltar) {
        this.voltar = voltar
        this.submittingForm = true;
        this.spinnerService.show();

        if (this.currentAction == "new")
            this.createResource();
        else // currentAction == "edit"
            this.updateResource();
    }

    onExcluir() {
        this.spinnerService.show();
        this.resourceService.delete(this.resource.id).subscribe(ret => {
            this.spinnerService.hide();
            this.msgService.showMensagemSucessoTempoRetorno('', 'Excluído com sucesso.').then((res) => {
                const baseComponentPath: string = this.route.snapshot.parent.url[0].path;
                this.router.navigate([baseComponentPath]);
            });
        }, erro => {
            this.spinnerService.hide()
            this.msgService.showMensagemErro('', erro)
        });
    }


    // PRIVATE METHODS

    protected setCurrentAction() {
        if (this.route.snapshot.url[0].path == "new")
            this.currentAction = "new"
        else
            this.currentAction = "edit"
    }

    protected loadResource() {
        if (this.currentAction == "edit") {
            this.spinnerService.show();
            this.route.paramMap.pipe(
                switchMap(params => this.resourceService.getById(+params.get("id")))
            )
                .subscribe(
                    (resource) => {
                        this.spinnerService.hide();
                        this.resource = resource;
                        this.formulario.patchValue(resource) // binds loaded resource data to formulario
                    },
                    (error) => {
                        this.spinnerService.hide();
                        this.msgService.showMensagemErro('Ocorreu um erro no servidor, tente mais tarde.');
                    }
                )
        }
    }


    protected setPageTitle() {
        if (this.currentAction == 'new')
            this.pageTitle = this.creationPageTitle();
        else {
            this.pageTitle = this.editionPageTitle();
        }
    }

    protected creationPageTitle(): string {
        return "Novo"
    }

    protected editionPageTitle(): string {
        return "Edição"
    }


    protected createResource() {
        const resource: T = this.jsonDataToResourceFn(this.formulario.getRawValue());
        this.resourceService.create(resource)
            .subscribe(
                (resource) => this.actionsForSuccess(resource),
                error => this.actionsForError(error)
            )
    }


    protected updateResource() {
        const resource: T = this.jsonDataToResourceFn(this.formulario.getRawValue());

        this.resourceService.update(resource)
            .subscribe(
                resource => this.actionsForSuccess(resource),
                error => this.actionsForError(error)
            )
    }


    protected actionsForSuccess(resource: T) {
        this.spinnerService.hide();
        //setTimeout(() => {
        this.msgService.showMensagemSucessoTempo('', 'REGISTRO SALVO COM SUCESSO!');

        //}, 1000);


        const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

        // redirect/reload component page
        if (this.voltar) {
            setTimeout(() => {
                this.router.navigate([baseComponentPath])
            }, 1200);
            return
        }
        this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true }).then(
            () => this.router.navigate([baseComponentPath, resource.id, "edit"])
        )
    }


    protected actionsForError(error) {
        this.spinnerService.hide();

        this.submittingForm = false;

        if (error.status === 422){
            this.serverErrorMessages = JSON.parse(error._body).errors;
        }
        else{
            this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente mais tarde."]
            this.msgService.showMensagemErro('',this.serverErrorMessages[0])
        }
    }


    protected abstract buildResourceForm(): void;
}
