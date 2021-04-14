
export default class DesafioElements {
    nome = () => {return 'input#name'}
    email = () => {return 'input#email'}
    senha = () => {return 'input#password'}
    btnCadastrar = () => {return 'button#register'}
    titleConfirmacaoCadastro = () => {return ' div.register-form.expanded > h2.table-title'}

    //ERROS
    msgCampoNomeVazio = () => {return '#root > div > div > div.register-form > form > div:nth-child(1) > p'}
    msgCampoEmailVazio = () => {return '#root > div > div > div.register-form > form > div:nth-child(2) > p'}
    msgCampoSenhaVazio = () => {return '#root > div > div > div.register-form > form > div:nth-child(3) > p'}

    idUsuario2 = () => {return '#tdUserId2'}
    nomeUsuario2 = () => {return '#tdUserName2'}
    emailUsuario2 = () => {return '#tdUserEmail2'}
    removUsuario1 = () => {return '#removeUser1'}
    removUsuario2 = () => {return '#removeUser2'}

    tabela = () => {return '#root > div > div > div.register-form.expanded > table'}
}
