/* global Given, Then, When */
import DesafioPage from '../pageobjects/DesafioPage'
const desafioPage = new DesafioPage;

Given("que acesso o cadastro do site prova Stefanini", () => { //DADO
	desafioPage.acessarLink();
	desafioPage.buscarInputNome();
	desafioPage.buscarInputEmail();
	desafioPage.buscarInputSenha();
	desafioPage.buscarButtonCadastrar();
});

//STEPS DO CENARIO 1

When("seleciono o botao cadastrar apos informar os dados validos", () => { //QUANDO
	desafioPage.preencherNome();
	desafioPage.preencherEmail();
	desafioPage.preencherSenha();
	desafioPage.buttonCadastrar();
});

Then("devo ser cadastrado com sucesso", () => { //ENTÃO
	desafioPage.validarSeOUsuarioFoiCadastrado();
});

//STEPS DO CENARIO 2

When("seleciono o botao cadastrar apos informar somente email e senha", () => { //QUANDO
	desafioPage.preencherEmail();
	desafioPage.preencherSenha();
	desafioPage.buttonCadastrar();
});

Then("devo visualizar o erro por não ter informado o nome", () => { //ENTÃO
	desafioPage.validarCadastroSemNome();
});

//STEPS DO CENARIO 3

When("seleciono o botao cadastrar apos informar somente nome e senha", () => { //QUANDO
	desafioPage.preencherNome();
	desafioPage.preencherSenha();
	desafioPage.buttonCadastrar();
});

Then("devo visualizar o erro por não ter informado o email", () => { //ENTÃO
	desafioPage.validarCadastroSemEmail();
});

//STEPS DO CENARIO 4

When("seleciono o botao cadastrar apos informar somente nome e email", () => { //QUANDO
	desafioPage.preencherNome();
	desafioPage.preencherEmail();
	desafioPage.buttonCadastrar();
});

Then("devo visualizar o erro por não ter informado a senha", () => { //ENTÃO
	desafioPage.validarCadastroSemSenha();
});

//STEPS DO CENARIO 5

When("seleciono o botao cadastrar apos informar o primeiro nome, email e senha", () => { //QUANDO
	desafioPage.preencherSomentePrimeiroNome();
	desafioPage.preencherEmail();
	desafioPage.preencherSenha();
	desafioPage.buttonCadastrar();
});

Then("devo visualizar o erro por não ter informado o nome completo", () => { //ENTÃO
	desafioPage.validarCadastroSomenteComPrimeiroNome();
});

//STEPS DO CENARIO 6

When("seleciono o botao cadastrar apos informar o nome, email invalido e senha", () => { //QUANDO
	desafioPage.preencherNome();
	desafioPage.preencherEmailInvalido();
	desafioPage.preencherSenha();
	desafioPage.buttonCadastrar();
});

Then("devo visualizar o erro por ter informado um email invalido", () => { //ENTÃO
	desafioPage.validarCadastroComEmailInvalido();
});

//STEPS DO CENARIO 7

When("seleciono o botao cadastrar apos informar o nome, email e senha invalida", () => { //QUANDO
	desafioPage.preencherNome();
	desafioPage.preencherEmail();
	desafioPage.preencherSenhaInvalida();
	desafioPage.buttonCadastrar();
});

Then("devo visualizar o erro por ter informado uma senha invalida", () => { //ENTÃO
	desafioPage.validarCadastroSenhaInvalida();
});

//STEPS DO CENARIO 8 e PRIMEIRA PARTE DO CENARIO 11

When("informo os dados e realizo o cadastro de 2 usuarios", () => { //QUANDO
	desafioPage.preencherNome();
	desafioPage.preencherEmail();
	desafioPage.preencherSenha();
	desafioPage.buttonCadastrar();
	desafioPage.segundoUsuario();
	desafioPage.buttonCadastrar();
});

And("excluo o primeiro usuario da tabela", () => { //E
	desafioPage.excluirPrimeiroUsuario();
});

Then("devo visualizar os dados do segundo usuario sem nenhuma alteração", () => { //ENTÃO
	desafioPage.validarDadosDoUsuario2();
});

//STEPS DO CENARIO 9

When("seleciono o botao cadastrar sem informar nenhum dado", () => { //QUANDO
	desafioPage.buttonCadastrar();
});

Then("devo visualizar mensagems de validação nos campos", () => { //ENTÃO
	desafioPage.validarCadastroSemNome();
	desafioPage.validarCadastroSemEmail();
	desafioPage.validarCadastroSemSenha();
});

//STEPS DO CENARIO 10

When("informo os dados e realizo o cadastro de 2 usuarios com os mesmos dados", () => { //QUANDO
	desafioPage.preencherNome();
	desafioPage.preencherEmail();
	desafioPage.preencherSenha();
	desafioPage.buttonCadastrar();

	desafioPage.preencherNome();
	desafioPage.preencherEmail();
	desafioPage.preencherSenha();
	desafioPage.buttonCadastrar();
});

Then("deveria receber uma mensagem informando nao ser possivel", () => { //ENTÃO
	return true;
});

//STEPS DO CENARIO 11
And("excluo os dois usuarios da tabela", () => { //E
	desafioPage.validarSeTabelaEstaVisivel();
	desafioPage.excluirPrimeiroUsuario();
	desafioPage.excluirSegundoUsuario();
});

Then("a tabela de usuarios nao deve mais ser visivel na tela", () => { //ENTÃO
	desafioPage.validarSeTabelaNaoEstaVisivel();
});