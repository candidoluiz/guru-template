import { InMemoryDbService } from "angular-in-memory-web-api";
import { Exemplo } from "./pages/simple-page/model/exemplo";


export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const exemplo: Exemplo[] = [
      { id: 1, nome: 'Moradia', observacao: 'loren ipsin'},
      { id: 2, nome: 'Saúde', observacao: 'loren ipsin'},
      { id: 3, nome: 'Lazer', observacao: 'loren ipsin'},
      { id: 4, nome: 'Salário', observacao: 'loren ipsin'},
      { id: 5, nome: 'Freelas', observacao: 'loren ipsin'}
    ];

    return { exemplo }
  }
}