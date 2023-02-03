import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-simple-page-pesquisa',
    templateUrl: './simple-page-pesquisa.component.html'
})
export class SimplePagePesquisaComponent implements OnInit {

    constructor() { }

    products = [
        {'id':0,'nome':'o contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indu'},
        {'id':1,'nome':'teste'},
        {'id':2,'nome':'teste'},
        {'id':3,'nome':'teste'},
        {'id':4,'nome':'teste'},
        {'id':5,'nome':'teste'},
        {'id':6,'nome':'teste'},
        {'id':7,'nome':'teste'},
        {'id':8,'nome':'teste'},
        {'id':9,'nome':'teste'}
    ];

    ngOnInit(): void {
    }

    onRowSelect(row){
        console.log(row);               
    }

}