import { InMemoryDbService } from "angular-in-memory-web-api";
import { Exemplo } from "./pages/simple-page/model/exemplo";


export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const exemplo: Exemplo[] = [
            { id: 1, nome: 'Moradia', observacao: 'Pagamentos de Contas da Casa' },
            { id: 2, nome: 'Saúde', observacao: 'Plano de Saúde e Remédios' },
            { id: 3, nome: 'Lazer', observacao: 'Cinema, parques, praia, etc' },
            { id: 4, nome: 'Salário', observacao: 'Recebimento de Salário' },
            { id: 5, nome: 'Freelas', observacao: 'Trabalhos como freelancer' }
        ];

        return { exemplo }
    }
}