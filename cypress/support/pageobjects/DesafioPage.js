import DesafioElements from '../elements/DesafioElements'
const desafioElements = new DesafioElements

const Leite = require('leite');
const leite = new Leite

let primeiroNome = leite.pessoa.primeiroNome().replace(/[^a-zA-Zs]/g, "")
let nomeValido =  primeiroNome + ' Teste'
let emailValido = nomeValido + 'email@gmail.com'
let emailInvalido = nomeValido + 'email@gmail'
let senhaValida = 'Teste123*'
let senhaInvalida = 'teste'

export default class DesafioPage {
    acessarLink() {
        cy
            .visit('http://prova.stefanini-jgr.com.br/teste/qa/')
            .clearCookies()
            .clearLocalStorage();
    }

    buscarInputNome() { //VERIFICA SE O CAMPO NOME ESTÁ VISIVEL
        cy
        .get(desafioElements.nome())
        .should('be.visible')
    }

    buscarInputEmail() { //VERIFICA SE O CAMPO EMAIL ESTÁ VISIVEL
        cy
        .get(desafioElements.email())
        .should('be.visible')
    }
    
    buscarInputSenha() { //VERIFICA SE O CAMPO SENHA ESTÁ VISIVEL
        cy
        .get(desafioElements.senha())
        .should('be.visible')
    }

    buscarButtonCadastrar() { //VERIFICA SE O BOTÃO CADASTRAR ESTÁ VISIVEL
        cy
            .get(desafioElements.btnCadastrar())
            .should('be.visible')
    }

    preencherNome() { 
        cy
            .get(desafioElements.nome())
            .type(nomeValido)
    }

    preencherSomentePrimeiroNome() {
        cy  
            .get(desafioElements.nome())
            .type(primeiroNome)
    }

    preencherEmail() {
        cy
            .get(desafioElements.email())
            .type(emailValido)
    }
    preencherEmailInvalido() {
        cy
            .get(desafioElements.email())
            .type(emailInvalido)
    }

    preencherSenha() {
        cy
            .get(desafioElements.senha())
            .type(senhaValida)
    }

    preencherSenhaInvalida() {
        cy
            .get(desafioElements.senha())
            .type(senhaInvalida)
    }

    segundoUsuario() {
        cy
            .get(desafioElements.nome())
            .type('Carlos Teste')
            .get(desafioElements.email())
            .type('carlosteste@gmail.com')
            .get(desafioElements.senha())
            .type('Teste123*')
    }

    validarSeTabelaEstaVisivel() {
        cy
            .get(desafioElements.tabela())
            .should('be.visible')
    }

    validarSeTabelaNaoEstaVisivel() {
        cy
            .get(desafioElements.tabela())
            .should('not.exist')
    }

    excluirPrimeiroUsuario() {
        cy
            .get(desafioElements.removUsuario1())
            .click()
    }
    excluirSegundoUsuario() {
        cy
            .get(desafioElements.removUsuario2())
            .click()
    }

    validarDadosDoUsuario2() {
        cy
            .get(desafioElements.idUsuario2())
            .contains(2)
            .get(desafioElements.nomeUsuario2())
            .contains('Carlos Teste')
            .get(desafioElements.emailUsuario2())
            .contains('carlosteste@gmail.com')
            .get(desafioElements.removUsuario2())
            .should('be.visible')
    }

    buttonCadastrar() {
        cy
            .get(desafioElements.btnCadastrar())
            .click();
    }

    validarSeOUsuarioFoiCadastrado() {
        cy 
            .get(desafioElements.titleConfirmacaoCadastro())
            .should('be.exist')
    }

    //VALIDAÇÃO DE ERROS NA FALTA DE DADOS DO USUARIO
    validarCadastroSemNome() {
        cy
            .get(desafioElements.msgCampoNomeVazio())
            .should('be.visible')
            .contains('O campo Nome é obrigatório')
    }

    validarCadastroSemEmail() {
        cy
            .get(desafioElements.msgCampoEmailVazio())
            .should('be.visible')
            .contains('O campo E-mail é obrigatório.')
    }

    validarCadastroSemSenha() {
        cy
            .get(desafioElements.msgCampoSenhaVazio())
            .should('be.visible')
            .contains('O campo Senha é obrigatório.')
    }

    validarCadastroSomenteComPrimeiroNome() {
        cy
            .get(desafioElements.msgCampoNomeVazio())
            .should('be.visible')
            .contains('Por favor, insira um nome completo.')
    }

    validarCadastroComEmailInvalido() {
        cy
            .get(desafioElements.msgCampoEmailVazio())
            .should('be.visible')
            .contains('Por favor, insira um e-mail válido.')
    }

    validarCadastroSenhaInvalida() {
        cy
            .get(desafioElements.msgCampoSenhaVazio())
            .should('be.visible')
            .contains('A senha deve conter ao menos 8 caracteres')
    }
}



