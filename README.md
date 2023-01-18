# Texo IT Project

Este é um projeto **Front-end** desenvolvido com **Ionic, Angular** e **TypeScript**. 
Ele consome informações de uma **API** entregue pela empresa para teste.


# Pré-instalação

Você irá precisar do [Node.JS](https://nodejs.org/en/), após fazer a instalação dele você pode verificar se já está configurado o **npm** rodando o comando `npm --version` no **Terminal Linux** ou **Prompt de Comando do Windows**, se aparecer a versão a instalação foi bem-sucedida.

Agora nós iremos baixar e instalar o [Git](https://git-scm.com/downloads), após a instalação do **Git** nós vamos verificar se a instalação obteve sucesso, iremos digitar o seguinte comando: `git --version`
Na tela do **Terminal Linux** ou **Prompt de Comando do Windows**, se aparecer a versão do **git** está tudo certo, podemos agora **clonar o Repositório do Projeto**.


# Clonando e instalando o projeto

Com o **Terminal do Linux** ou **Prompt de Comando do Windows** iremos digitar o seguinteo comando:
`git clone https://github.com/jocimarlopes/texo_project.git`
Após apertar **Enter** nesse comando, o download do projeto iniciará, assim que o download tiver concluído você pode acessar a pasta do projeto, digite `cd texo_project` e aperte **Enter**.

Caso você já queira instalar os módulos necessários e rodar o projeto direto, você pode digitar o comando: `npm run config:start`
este comando fará toda a instalação e iniciará o servidor de desenvolvimento no caminho:
http://localhost:4200
Após a instalação e mensagem de sucesso no **Terminal** ou **Prompt de Comando** você pode abrir **esse endereço no seu navegador e irá acessar o projeto**


# Iniciando o projeto

Para iniciar o projeto já configurado você pode acessar a pasta do projeto e rodar o comando `npm start` no **Terminal** ou **Prompt de Comando**.
Caso queira instalar os módulos (**node_modules**) e abrir o projeto após a instalação, digite o comando:
`npm run config:start` e aguarde a instalação, após ela acesse o endereço http://localhost:4200


# O Projeto

Com o projeto rodando no endereço indicado acima você pode perceber que irá abrir uma página com menu lateral onde você terá acesso a 2 telas (**Dashboard** e **List**), onde na **Dashboard** você encontrará cards com informações sobre indicados e vencedores da categoria Pior Filme do Golden Raspberry Awards.
Na tela List você encontrará uma lista com vários filmes, possuindo um filtro onde você poderá pesquisar por ano e também filtrar por Vencedores e Não vencedores.


## Observações

	Este é um Produto Mínimo Viável,
	para um desenvolvimento mais robusto e performático
	leva mais tempo, eu gostaria de implementar NGRX, Reactive Forms, etc..
	Mas acabei solicitando um prazo menor do que o esperado.
	- Jocimar Lopes


## Creditos

Sistema desenvolvido por [Jocimar Lopes](https://jocimarlopes.com)