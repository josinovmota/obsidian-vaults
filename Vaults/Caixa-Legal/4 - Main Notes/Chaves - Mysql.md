17-02-2025 19:35

Tags:[[Banco de Dados]], [[Uninter]], [[SQL]]

# Chaves - Mysql

Assim como visto no [[Modelo Entidade-Relacionamento - MER | Modelo Entidade-Relacionamento]], na criação dos **Databases** temos que instanciar as chaves, sendo elas **primary key, foreign key, composite key e surrogate key.** Criar essas chaves no modelo lógico não é muito difícil pois usamos uma ferramenta que simplificam bem o processo. E que ao fim do modelo, ela gera um script em **SQL** da criação da tabela. Porém, é importante saber como criar e alterar as tables diretamente do script SQL. E é aí que entra essa explicação

## Primary Key(pk)

Dispenso comentário sobre a chave primária pois já tem explicado no [[Modelo Entidade-Relacionamento - MER | MER]]. Para instanciar uma chave como **PK** temos 2 passos a serem seguidos. O primeiro é que a coluna que vai ser a **PK** tem que ser `not null`, ou seja, não **poderá haver** **tuplas vazias**. Para fazer isso basta utilizar esse comando na criação:

```mysql
create table TesteUau (
	id integer not null,
)
```

Após instanciada como `not null` temos que colocar, ao fim do create table o comprando `primary key(nomeDaKey)`, segue o exemplo:

```mysql
create table TesteUau (
	id integer not null,
	primary key(id)
)
```

## Foreign Key

Já a **FK** que referencia outra chave também tem seu processo. Ela também tem que ser `not null` mas no fim da criação da table especificamos `foreign key(nomeDaFK) references nomeDaOutraTable(Campo)` aqui eu coloco um exemplo pra facilitar

```mysql
create table TesteUau (
	id integer not null,
	id_pedido integer not null,
	foreign key(id_pedido) references Pedido(id) on delete no action on update no action
)
```

e ao fim devemos, também, aplicar as **Restrições de integridade** (terminar quando ler sobre)

# Restrições dos campos

Ao criar um campo podemos colocar certas restrições nele. Aqui cito algumas delas:

## not null

A restrição `not null` não permite que aquele **campo** tenha um **valor nulo**, ou seja, que na hora de popular aquele **campo** não coloquemos um valor nessa tupla. Aqui está um exemplo

```mysql
create table TesteUau (
	id integer not null,
)
```

## check

A restrição `check` pode ser muito importante em casos que temos **condições** para cada **tupla** do **campo**, ou seja, digamos que tempo um **Campo** `idade` e queremos colocar a condição de que nesse campo só possam entrar valores maiores do que 0, é aí que entra a restrição `check`. Segue o exemplo:

```mysql
create table TesteUau (
	id integer not null,
	idade integer check (idade > 0)
)
```

Ela não é muito utlizada no MySQL mas vi que no postgresql é usada :D

## default

Default é mais uma restrição que ajuda na hora de popular o campo. Ela diz que quando não instanciarmos um valor para aquele campo, o campo deve ser preenchido pelo valor que passamos. Aqui está um exemplo

```mysql
create table TesteUau (
	id integer not null,
	kda varchar default 'B'
)
```

Então se em algum momento utilizarmos o comando de insert e não especificarmos um valor para o campo `KDA`

```mysql
insert into kda values(1)
```

Esse campo será populado com o valor passado na default, que é 'B'