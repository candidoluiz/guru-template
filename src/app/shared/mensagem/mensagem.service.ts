import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class MensagemService {

    config: SweetAlertOptions = {
        allowOutsideClick: false,
        allowEscapeKey: false
    }

    private showMensagem(): Promise<SweetAlertResult> {
        return Swal.fire(this.config);
    }

    private configPadrao(tipo: SweetAlertIcon, titulo: string, mensagem: string,
        usaConfirma: boolean, botaoConfirma: string, tempo?: number,
        usaCancel: boolean = false, botaoCancel: string = '') {
        this.config.icon = tipo;
        this.config.title = titulo;
        this.config.text = mensagem;
        this.config.showCancelButton = false;

        if (usaConfirma) {
            this.config.showConfirmButton = true;
            this.config.timer = 0;
            this.config.confirmButtonText = botaoConfirma;
            this.config.focusConfirm = true;

            if (usaCancel) {
                this.config.showCancelButton = true;
                this.config.cancelButtonText = botaoCancel;
                this.config.focusCancel = true;
                this.config.focusConfirm = false;
            }

        } else {
            this.config.showConfirmButton = false;
            this.config.timer = tempo;
        }

        return this.showMensagem();
    }

    //#region Mensagens de Sucesso
    private padraoSucesso(usaBotao: boolean, tempo?: number, titulo?: string, mensagem?: string, botaoConfirma?: string): Promise<SweetAlertResult> {

        titulo = titulo ? titulo : 'Sucesso';
        mensagem = mensagem ? mensagem : 'Operação realizada com sucesso!';
        botaoConfirma = botaoConfirma ? botaoConfirma : 'Ok';
        tempo = !tempo || tempo <= 0 ? 1300 : tempo;

        return this.configPadrao("success", titulo, mensagem, usaBotao, botaoConfirma, tempo);
    }

    /**
    * Apresenta a mensagem de 'sucesso' para o usuário.
    * 
    * @param titulo Titulo do modal da mensagem. Padrão: 'Sucesso'.
    * @param conteudo Texto que será exibido no modal. Padrão: 'Operação realizada com sucesso'.
    * @param textoBotaoConfirma Texto do botão de confirma. Padrão: 'Ok'.
    */
    showMensagemSucesso(titulo?: string, conteudo?: string, textoBotaoConfirma?: string) {
        this.padraoSucesso(true, 0, titulo, conteudo, textoBotaoConfirma);
    }

    /**
    * Apresenta a mensagem de 'sucesso' para o usuário, sumindo após o tempo configurado. 
    * 
    * @param titulo Titulo do modal da mensagem. Padrão: 'Sucesso'.
    * @param conteudo Texto que será exibido no modal. Padrão: 'Operação realizada com sucesso'.
    * @param tempo Tempo para fechar o modal. Padrão: 1000 ms.
    */
    showMensagemSucessoTempo(titulo?: string, conteudo?: string, tempo?: number) {
        this.padraoSucesso(false, tempo, titulo, conteudo);
    }

    /**
    * Apresenta a mensagem de 'sucesso' para o usuário, sumindo após o tempo configurado. 
    * 
    * @param titulo Titulo do modal da mensagem. Padrão: 'Sucesso'.
    * @param conteudo Texto que será exibido no modal. Padrão: 'Operação realizada com sucesso'.
    * @param tempo Tempo para fechar o modal. Padrão: 1000 ms.
    */
    showMensagemSucessoTempoRetorno(titulo?: string, conteudo?: string, tempo?: number): Promise<SweetAlertResult> {
        return this.padraoSucesso(false, tempo, titulo, conteudo);
    }

    /**
    * Apresenta a mensagem de 'sucesso' para o usuário e retorna uma promise.
    *
    * @param titulo Titulo do modal da mensagem. Padrão: 'Sucesso'.
    * @param conteudo Texto que será exibido no modal. Padrão: 'Operação realizada com sucesso'.
    * @param textoBotaoConfirma Texto do botão de confirma. Padrão: 'Ok'.
    */
    showMensagemSucessoRetorno(titulo?: string, conteudo?: string, textoBotaoConfirma?: string): Promise<SweetAlertResult> {
        return this.padraoSucesso(true, 0, titulo, conteudo, textoBotaoConfirma);
    }
    //#endregion

    //#region Mensagens de Erro
    private padraoErro(titulo?: string, mensagem?: string, botaoConfirma?: string): Promise<SweetAlertResult> {

        titulo = titulo ? titulo : 'Erro!';
        mensagem = mensagem ? mensagem : 'Tivemos um problema ao executar esta ação. Tente novamente mais tarde!';
        botaoConfirma = botaoConfirma ? botaoConfirma : 'Ok';

        return this.configPadrao('error', titulo, mensagem, true, botaoConfirma);
    }

    /**
    * Apresenta a mensagem de 'erro' para o usuário.
    *
    * @param titulo Titulo do modal da mensagem. Padrão: 'Ops!'.
    * @param conteudo Texto que será exibido no modal. Padrão: 'Tivemos um problema ao executar esta ação. Tente novamente mais tarde!'.
    * @param textoBotaoConfirma Texto do botão de confirma. Padrão: 'Ok'.
    */
    showMensagemErro(titulo?: string, conteudo?: string, textoBotaoConfirma?: string) {
        this.padraoErro(titulo, conteudo, textoBotaoConfirma);
    }

    /**
    * Apresenta a mensagem de 'erro' para o usuário.
    *
    * @param titulo Titulo do modal da mensagem. Padrão: 'Ops!'.
    * @param conteudo Texto que será exibido no modal. Padrão: 'Tivemos um problema ao executar esta ação. Tente novamente mais tarde!'.
    * @param textoBotaoConfirma Texto do botão de confirma. Padrão: 'Ok'.
    */
    showMensagemErroRetorno(titulo?: string, conteudo?: string, textoBotaoConfirma?: string): Promise<SweetAlertResult> {
        return this.padraoErro(titulo, conteudo, textoBotaoConfirma);
    }
    //#endregion

    //#region Mensagens de Warning
    private padraoAlerta(mensagem: string, usaBotao: boolean, titulo?: string, botaoConfirma?: string, tempo?: number) {

        titulo = titulo ? titulo : 'Atenção';
        botaoConfirma = botaoConfirma ? botaoConfirma : 'Ok';
        tempo = !tempo || tempo <= 0 ? 1300 : tempo;

        this.configPadrao("warning", titulo, mensagem, usaBotao, botaoConfirma, tempo);
    }

    /**
    * Apresenta a mensagem de 'warning' para o usuário.
    * 
    * @param conteudo Texto que será exibido no modal.
    * @param titulo Titulo do modal da mensagem. Padrão: 'Atenção'.
    * @param textoBotaoConfirma Texto do botão de confirma. Padrão: 'Ok'.
    */
    showMensagemAlerta(conteudo: string, titulo?: string, textoBotaoConfirma?: string) {
        this.padraoAlerta(conteudo, true, titulo, textoBotaoConfirma);
    }

    /**
    * Apresenta a mensagem de 'warning' para o usuário.
    * 
    * @param conteudo Texto que será exibido no modal.
    * @param titulo Titulo do modal da mensagem. Padrão: 'Atenção'.
    * @param tempo Tempo para fechar o modal. Padrão: 1000 ms.
    */
    showMensagemAlertaTempo(conteudo: string, titulo?: string, tempo?: number) {
        this.padraoAlerta(conteudo, false, titulo, '', tempo);
    }
    //#endregion

    //#region Mensagens de Info
    private padraoInfo(mensagem: string, usaBotao: boolean, titulo?: string, botaoConfirma?: string, tempo?: number): Promise<SweetAlertResult> {

        titulo = titulo ? titulo : 'Informação';
        botaoConfirma = botaoConfirma ? botaoConfirma : 'Ok';
        tempo = !tempo || tempo <= 0 ? 1300 : tempo;

        return this.configPadrao("info", titulo, mensagem, usaBotao, botaoConfirma, tempo);
    }

    /**
    * Apresenta a mensagem de 'informação' para o usuário.
    * 
    * @param conteudo Texto que será exibido no modal.
    * @param titulo Titulo do modal da mensagem. Padrão: 'Informação'.
    * @param textoBotaoConfirma Texto do botão de confirma. Padrão: 'Ok'.
    */
    showMensagemInfo(conteudo: string, titulo?: string, textoBotaoConfirma?: string) {
        this.padraoInfo(conteudo, true, titulo, textoBotaoConfirma);
    }

    /**
    * Apresenta a mensagem de 'informação' para o usuário.
    * 
    * @param conteudo Texto que será exibido no modal.
    * @param titulo Titulo do modal da mensagem. Padrão: 'Informação'.
    * @param tempo Tempo para fechar o modal. Padrão: 1000 ms.
    */
    showMensagemInfoTempo(conteudo: string, titulo?: string, tempo?: number) {
        this.padraoInfo(conteudo, false, titulo, '', tempo);
    }

    /**
    * Apresenta a mensagem de 'informação' para o usuário.
    * 
    * @param conteudo Texto que será exibido no modal.
    * @param titulo Titulo do modal da mensagem. Padrão: 'Informação'.
    * @param tempo Tempo para fechar o modal. Padrão: 1000 ms.
    */
    showMensagemInfoTempoRetorno(conteudo: string, titulo?: string, tempo?: number): Promise<SweetAlertResult> {
        return this.padraoInfo(conteudo, false, titulo, '', tempo);
    }
    //#endregion

    //#region Mensagens de Questão
    private padraoQuestao(mensagem: string, titulo?: string, botaoConfirma?: string, botaoCancel?: string): Promise<SweetAlertResult> {

        titulo = titulo ? titulo : 'Atenção';
        mensagem = mensagem ? mensagem : "Deseja realmente executar esta ação?"
        botaoConfirma = botaoConfirma ? botaoConfirma : 'Sim';
        botaoCancel = botaoCancel ? botaoCancel : 'Não';

        return this.configPadrao("question", titulo, mensagem, true, botaoConfirma, 0, true, botaoCancel);
    }

    /**
    * Apresenta a mensagem de 'questão' para o usuário.
    * Este método retornará uma Promisse<SweetAlertResult>, onde caso o usuário clique no botão
    * de confirmar, retornará '{ value: true }'; caso cline no botão de cancelar, retornará '{ dismiss: 'cancel' }'.
    * 
    * @param conteudo Texto que será exibido no modal. Padrão: 'Deseja realmente executar esta ação?'.
    * @param titulo Titulo do modal da mensagem. Padrão: 'Atenção'.
    * @param textoBotaoConfirma Texto do botão de confirma. Padrão: 'Sim'.
    * @param textoBotaoCancela Texto do botão de cancelamento Padrão: 'Não'.
    */
    showMensagemQuestao(conteudo?: string, titulo?: string, textoBotaoConfirma?: string, textoBotaoCancela?: string): Promise<SweetAlertResult> {
        return this.padraoQuestao(conteudo, titulo, textoBotaoConfirma, textoBotaoCancela).then(ret => ret);
    }

    /**
    * Apresenta a mensagem de 'questão' para o usuário.
    * Este método retornará uma Promisse<SweetAlertResult>, onde caso o usuário clique no botão
    * de confirmar, retornará '{ value: true }'; caso cline no botão de cancelar, retornará '{ dismiss: 'cancel' }'.
    * 
    * @param conteudo Texto que será exibido no modal. Padrão: 'Deseja excluir o registro?'.
    * @param titulo Titulo do modal da mensagem. Padrão: 'Atenção'.
    * @param textoBotaoConfirma Texto do botão de confirma. Padrão: 'Sim'.
    * @param textoBotaoCancela Texto do botão de cancelamento Padrão: 'Não'.
    */
    showMensagemExclusao(conteudo: string = "Deseja excluir o registro?", titulo?: string, textoBotaoConfirma?: string, textoBotaoCancela?: string): Promise<SweetAlertResult> {
        return this.padraoQuestao(conteudo, titulo, textoBotaoConfirma, textoBotaoCancela).then(ret => ret);
    }
    //#endregion


}