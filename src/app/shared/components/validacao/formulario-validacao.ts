export class FormularioValidacao {

    static getMensagemErro(nomeCampo: string, nomeValidacao: string) {
        const config = {
            'required': `${nomeCampo} é obrigatório.`,           
        };
  
        return config[nomeValidacao];
    }
}