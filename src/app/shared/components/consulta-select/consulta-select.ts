import {Subject} from 'rxjs';

/**
 * Abstração para implementar busca. Quem implementar esta classe deverá montar o Subject
 * que será responsável de efetuar a busca no BackEndService.
 *
 * A busca e consumo dos resultados serão feitos pelos métodos 'consultar' e 'resultado' que ficarão públicos
 */
export abstract class ConsultaSelect {
    
    protected subject: Subject<string> = new Subject<string>();
    protected _resultado: any = [];
    private _loading: boolean = false;

    protected abstract montarSubject();

    protected constructor() {
        this.montarSubject();
    }

    public consultar(term: any) {
        this.subject.next(term.term);
    }

    public resultado() {
        return this._resultado;
    }

    protected iniciarLoading() {
        this._loading = true;
    }

    protected pararLoading() {
        this._loading = false;
    }

    public isLoading(): boolean {
        return this._loading;
    }

    public searchFn() {
        return null;
    }

    public adicionarValor(valor){
        this._resultado.push(valor);
    }
}