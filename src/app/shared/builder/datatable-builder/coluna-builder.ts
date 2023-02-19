import { Coluna } from './../model/coluna';
export class ColunaBuilder{
    coluna;

    constructor(){
        this.coluna = this.criarInstanciaObjeto();
    }

    static builder(): ColunaBuilder{
        return new ColunaBuilder();
    }

    criarInstanciaObjeto(): Coluna{
        return new Coluna();
    }

    titulo(titulo: string): ColunaBuilder{
        this.coluna.titulo = titulo;
        return this;
    }

    propriedade(propriedade: string): ColunaBuilder{
        this.coluna.propriedade = propriedade;
        return this;
    }

    tamanho(tamanho: number): ColunaBuilder{
        this.coluna.tamanho = tamanho;
        return this;
    }

    alinharEsquerda(): ColunaBuilder{
        this.coluna.alinhamento = 'left';
        return this;        
    }

    alinharCentro(): ColunaBuilder{
        this.coluna.alinhamento = 'center';
        return this;        
    }

    alinharDireita(): ColunaBuilder{
        this.coluna.alinhamento = 'right';
        return this;        
    }

    oculta(oculta: boolean): ColunaBuilder{
        this.coluna.oculta = oculta;
        return this;
    }

    construir(): Coluna{
        return this.coluna;
    }
}