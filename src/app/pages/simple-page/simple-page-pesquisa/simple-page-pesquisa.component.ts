import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-simple-page-pesquisa',
    templateUrl: './simple-page-pesquisa.component.html'
})
export class SimplePagePesquisaComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    products = [      
        {'id':1,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':2,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':3,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':4,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':5,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':6,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':7,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':8,'nome':' uihrt erutih', observacao: 'fdfdfsds'},
        {'id':9,'nome':' uihrt erutihffd ihiuh iujhtuierhtet re uihrt erutih', observacao: 'fdfdfsds'},
    ]
    ngOnInit(): void {
    }

    onRowSelect(row){
        console.log(row);               
    }

    editar(event){
        //this.router.navigate(event.id, { relativeTo: this.route });
        this.router.navigate([event.data.id, "edit"], { relativeTo: this.route })
    }

}