import { PaginaConsulta } from './../builder/model/pagina-consulta';
import { EntidadeBase } from "../models/base-resource.model";

import { Injector } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { DataTable } from '../builder/model/datatable';


export abstract class BaseResourceService<T extends EntidadeBase> {

    protected http: HttpClient;
    url = environment.BASE_URL;

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResourceFn: (jsonData: any) => T
    ) {
        this.http = injector.get(HttpClient);
        this.apiPath = this.url+this.apiPath;
    }

    removeParametrosNull(data: any): any {
        const parametros = {};
        Object.keys(data).forEach(
            key => data[key] !== null ? parametros[key] = data[key] : key);
        return parametros;
    }

    getAll(): Observable<T[]> {
        return this.http.get(this.apiPath).pipe(
            map(this.jsonDataToResources.bind(this)),
            catchError(this.handleError)
        )
    }

    consultaSumario(parametros: any): Observable<PaginaConsulta<T>> {       

        if (!(parametros instanceof HttpParams)) {
            parametros = this.removeParametrosNull(parametros);
        }

        return this.http.get(`${this.apiPath}/`, { params: parametros }).pipe(
            map(res=>{                
                return res
            }),
            catchError(this.handleError)
        )
    }

    consultaPadrao(parametros: any, caminho: string = 'pesquisar') {

        if ( !(parametros instanceof HttpParams) ) {
            parametros = this.removeParametrosNull(parametros);
        }

        return this.http.get<any[]>(`${ this.apiPath }/${ caminho }`, { params: parametros })
            .pipe(
                map(res => {
                    const data = JSON.parse(JSON.stringify(res));
                    const datatable = {
                        dados: [],
                        totalResultados: 0,
                        numeroPagina: 0,
                        tamanhoPagina: 0
                      };
                    datatable.dados = data.content;
                    datatable.totalResultados = data.totalElements;
                    datatable.numeroPagina = data.number;
                    datatable.tamanhoPagina = data.size;
                    return datatable;
                }),
                catchError(this.handleError)
            );
    }

    getById(id: number): Observable<T> {
        const url = `${this.apiPath}/${id}`;

        return this.http.get(url).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        )
    }

    create(resource: T): Observable<T> {
        return this.http.post(this.apiPath, resource).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        )
    }

    update(resource: T): Observable<T> {
        const url = `${this.apiPath}/${resource.id}`;

        return this.http.put(url, resource).pipe(
            map(() => resource),
            catchError(this.handleError)
        )
    }

    delete(id: number): Observable<any> {
        const url = `${this.apiPath}/${id}`;

        return this.http.delete(url).pipe(
            map(() => null),
            catchError(this.handleError)
        )
    }



    // PROTECTED METHODS

    protected jsonDataToResources(jsonData: any[]): T[] {
        const resources: T[] = [];
        jsonData.forEach(
            element => resources.push(this.jsonDataToResourceFn(element))
        );
        return resources;
    }

    protected jsonDataToResource(jsonData: any): T {
        return this.jsonDataToResourceFn(jsonData);
    }

    protected handleError(error: any): Observable<any> {
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return throwError(error);
    }

}