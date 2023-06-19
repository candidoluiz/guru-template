import { Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseResourceService } from '../../service/base-resource.service';
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { HttpParams } from '@angular/common/http';
import { ConsultaSelect } from './consulta-select';

/**
 * Abstração para implementar busca. Quem implementar esta classe deverá montar o Subject
 * que será responsável de efetuar a busca no BackEndService.
 *
 * A busca e consumo dos resultados serão feitos pelos métodos 'consultar' e 'resultado' que ficarão públicos
 */
export class ConsultaSelectPersonalizado extends ConsultaSelect {

    private filtrosPersonalizados = [];

    constructor(
        private service: BaseResourceService<any>,
        @Inject(Number) private caminho: string = 'pesquisar',
        @Inject(Number) private tamanho: number = 10,
        @Inject(Boolean) private situacao?: boolean
    ) {
        super();
    }

    static gerarSelect(filtros: { nome: string, valor: any }[], service: BaseResourceService<any>, caminho: string = 'pesquisar', tamanho: number = 10) {
        let consultaSelect = new ConsultaSelectPersonalizado(service, caminho, tamanho);
        consultaSelect.definirFiltros(filtros);
        return consultaSelect;
    }

    protected montarSubject() {
        this.subject.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(ret => {
                this.iniciarLoading();
                return this.realizarBusca(this.service, this.montarParametros(ret), ret, this.caminho);
            }),
        ).subscribe(dados => {
            this._resultado = dados.dados;
            this.definirDados(this._resultado);
            this.pararLoading();
        });
    }

    public realizarBusca(service, parametros: HttpParams, filtro: string, caminho: string) {
        return this.service.consultaPadrao(parametros, caminho);
    }

    private montarParametros(ret): HttpParams {
        let params = new HttpParams();
        params = params.append('term', ret);
        params = params.append('size', this.tamanho.toString());
        params = params.append('page', '0');

        params = this.montarParametrosPersonalizados(params);

        if (this.situacao != null) {
            params = params.append('situacao', this.situacao.toString());
        }

        return params;
    }

    montarParametrosPersonalizados(params) {

        if (this.filtrosPersonalizados) {
            this.filtrosPersonalizados.forEach(filtro => params = params.append(filtro.nome, filtro.valor));
        }

        return params;
    }

    public definirFiltros(filtros: { nome: string, valor: any }[]) {
        this.filtrosPersonalizados = filtros;
    }

    public definirDados(dados) { }

}