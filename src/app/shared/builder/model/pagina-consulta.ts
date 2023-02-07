export class PaginaConsulta<T>{
    private content: T[];
    private totalElements: number;
    private number: number;
    private size: number;

    constructor(pagina){
        this.content = pagina.content;
        this.totalElements = pagina.totalElements;
        this.number = pagina.number;
        this.size = pagina.size;
    }

    numeroPagina (){ return this.number;}
    tamanhoPagina (){ return this.size;}
    totalResultados (){ return this.totalElements;}
    dados (){ return this.content;}

}