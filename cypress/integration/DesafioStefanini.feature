# language : pt
Funcionalidade: Realizar o cadastro de novos usuarios

    Contexto: Como usuario eu desejo reaizar cadastro, incluir e excluir novos usuarios
        Dado que acesso o cadastro do site prova Stefanini
        
    Cenario: Realizar o cadastro com sucesso
        Quando seleciono o botao cadastrar apos informar os dados validos
        Então devo ser cadastrado com sucesso

    Cenario: Informar somente email e senha ao tentar realizar cadastro
        Quando seleciono o botao cadastrar apos informar somente email e senha 
        Então devo visualizar o erro por não ter informado o nome

    Cenario: Informar somente nome e senha ao tentar realizar cadastro
        Quando seleciono o botao cadastrar apos informar somente nome e senha
        Então devo visualizar o erro por não ter informado o email

    Cenario: Informar somente nome e email ao tentar realizar cadastro
        Quando seleciono o botao cadastrar apos informar somente nome e email
        Então devo visualizar o erro por não ter informado a senha

    Cenario: Verificar mensagem de validação do campo ao informar somente o primeiro nome
        Quando seleciono o botao cadastrar apos informar o primeiro nome, email e senha
        Então devo visualizar o erro por não ter informado o nome completo

    Cenario: Verificar mensagem de validação do campo ao inserir email invalido
        Quando seleciono o botao cadastrar apos informar o nome, email invalido e senha
        Então devo visualizar o erro por ter informado um email invalido

    Cenario: Realizar o cadastro informando senha invalida
        Quando seleciono o botao cadastrar apos informar o nome, email e senha invalida
        Então devo visualizar o erro por ter informado uma senha invalida

    Cenario: Excluir um usuario sem afetar dados de outro usuario
        Quando informo os dados e realizo o cadastro de 2 usuarios
        E excluo o primeiro usuario da tabela
        Então devo visualizar os dados do segundo usuario sem nenhuma alteração

        #Cenarios Encontrados após uma análise do sistema

    Cenario: Verificar mensagem de validação dos campos quando usuario não preenche nenhum dos dados
        Quando seleciono o botao cadastrar sem informar nenhum dado
        Então devo visualizar mensagems de validação nos campos 

    Cenario: Realizar o cadastro de 2 usuarios com os mesmos dados
	    Quando informo os dados e realizo o cadastro de 2 usuarios com os mesmos dados
        Então deveria receber uma mensagem informando nao ser possivel

    Cenario: Excluir todos os usuarios cadastrados e validar que a tabela não esta presente na tela
        Quando informo os dados e realizo o cadastro de 2 usuarios
        E excluo os dois usuarios da tabela
        Então a tabela de usuarios nao deve mais ser visivel na tela