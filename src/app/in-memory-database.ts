import { InMemoryDbService } from "angular-in-memory-web-api";
import { Exemplo } from "./pages/simple-page/model/exemplo";


export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const exemplo: Exemplo[] = [
      { id: 1, nome: 'Moradia'},
      { id: 2, nome: 'Saúde'},
      { id: 3, nome: 'Lazer'},
      { id: 4, nome: 'Salário'},
      { id: 5, nome: 'Freelas'}
    ];

    return { exemplo }
  }
}