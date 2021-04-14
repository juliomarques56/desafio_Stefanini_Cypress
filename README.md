# desafio-Stefanini

Desafio proposto com o objetivo de automatizar alguns cenários utilizando Cypress.

    Cenario: Realizar o cadastro com sucesso
    Cenario: Informar somente email e senha ao tentar realizar cadastro
    Cenario: Informar somente nome e senha ao tentar realizar cadastro
    Cenario: Informar somente nome e email ao tentar realizar cadastro
    Cenario: Verificar mensagem de validação do campo ao informar somente o primeiro nome
    Cenario: Verificar mensagem de validação do campo ao inserir email invalido
    Cenario: Realizar o cadastro informando senha invalida
    Cenario: Excluir um usuario sem afetar dados de outro usuario
    Cenario: Verificar mensagem de validação dos campos quando usuario não preenche nenhum dos dados
    Cenario: Realizar o cadastro de 2 usuarios com os mesmos dados
    Cenario: Excluir todos os usuarios cadastrados e validar que a tabela não esta presente na tela

Produto: Cadastro de Usuários - Prova Stefanini

# Configurações
## Pré-requesitos
- Node-js
- Vs Code

## Clonar repositório e preparar ambiente:
1. Abra o terminal na pasta onde deseja clonar o projeto e execute:

> git clone https://gitlab.com/carloscaldassss/desafio_stefanini

2. Abra o VS Code e em seguida, abra um novo terminal do proprio VS Code e execute:

> npm install


## Executar teste
- Comando para executar teste
> npm run cy:open

- Comando para executar em background
> npm run cy:run:cucumber

- Comando para gerar o relatorio html #Executar após os testes
> npm run reporter-cucumber
