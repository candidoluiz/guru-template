import { InMemoryDbService } from "angular-in-memory-web-api";
import { Exemplo } from "./pages/simple-page/model/exemplo";


export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const exemplo: Exemplo[] = [];

    return { exemplo }
  }
}