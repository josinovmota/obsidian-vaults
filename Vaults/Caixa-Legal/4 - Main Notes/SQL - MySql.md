13-02-2025 13:55

Tags:[[Banco de Dados]], [[Uninter]], [[SQL]]

# Mysql - SQL

Aqui cito os comandos que estou aprendendo dentro do curso, sendo eles específicos da **Structured Query Language** **MySQL.** 

## Criar o Database

O comando utilizado para criar um database é:

```mysql
create database nomeDoDatabase;
```

mas apenas criar o DataBase não é suficiente para começarmos a usá-lo, ou seja, para que à partir daquela execução na nossa interface **SQL**, os comandos serem direcionados a um banco de dados específico, utilizamos o comando `use nomeDoDatabase`

## Acessar o Database

Como dito anteriormente, para acessarmos o Database utilizamos o seguinte comando:

```mysql
use nomeDoDatabase;
```

À partir da execução dessa linha começaremos a direcionar todos os comandos ao Database escolhido. Mas aí vem a questão de será que estamos realmente conectados ao **Database** certo? pode ser que previamente já estivéssemos conectados a um **Database**. É aí que entra o comando `select nomeDoDatabase`

## Ver qual Database está conectado

Com o comando select e o nome do Database podemos descobrir em qual Database estamos conectados. Aqui está o modelo

```mysql
select nomeDoDatabase;
```

Agora que temos certeza que estamos conectados ao Database certo, podemos fazer algumas checagens, como por exemplo, exibir quais **Tables** temos dentro daquele Database

## Ver tables existentes

Com o uso do comando à seguir recebemos uma lista das **Tables** existentes no Database acessado.

```mysql
show tables;
```

Esse comando é muito semelhante ao comando `df.columns` do **pandas**. Ver apenas o nome das tables é algo muito simples e é aí que vem o comando describe, comando esse que nos permite acessar o tipo de dado de uma table, seu nome, entre outras especificações

## Ver informações da table

O comando que faz isso tudo é o:

```mysql
describe nomeDaTable;
```

Aqui poderemos ver várias informações da table selecionada. Agora partiremos para a criação da **Tables**

## Criar uma Table

Agora que criamos o Database e o acessamos, podemos começar a criação das **Tables** à partir do comando `create table nomeDaTable`, porém, a estrutura desse comando pode ser um pouco grande, então vou deixar em Sql Script pra facilitar

```mysql
create table tabelaLegal(
	id integer,
	email varchar(100),
	senha varchar(20)
);

```

Agora tendo criado uma table, queremos populá-la, ou seja, colocar dados dentro dela e é aí que entra o comando `insert`

## Adicionar dados à table

Tendo criado a **Table** agora podemos adicionar dados a ela por meio do comando:

```mysql
insert into nomeDaTable (coluna1, ..., colunaN) values (valor1, ..., valorN)
```

Vale a pena saber que se você for inserir todos os dados na ordem certa das colunas presentes na Table não é preciso especificar as colunas. Aqui está um exemplo:

```mysql
insert into nomeDaTable values (valor1, ..., valorN)
```

## Apagar uma Table ou Database

Vale a pena lembrar dos vários e vários memes sobre pessoas perguntando ao dev senior se existe um Ctrl + Z no Banco de dados. O comando drop exclui a Table ou Database, então é importante ter muito cuidado. Exemplo aonde é excluída uma Table:

```mysql
drop table nomeDaTable;
```

E aqui um exemplo aonde é excluído o DataBase

```mysql
drop database nomeDoDatabase
```
