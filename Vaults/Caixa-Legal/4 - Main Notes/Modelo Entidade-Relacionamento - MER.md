27-01-2025 15:57

Tags:[[Banco de Dados]], [[Uninter]]

# Modelo Entidade-Relacionamento - MER

O [[Modelo Entidade-Relacionamento - MER]] tem como principal propósito estruturar as **Regras de Negócio** afim de torná-las mais viáveis para os parâmetros dos [[Sistemas de Gerenciamento de Banco de Dados - Sgbd]]. Esse modelo consiste tanto na criação das relações entre os dados como na caracterização deles afim de transformá-los em informação. É importante notar que esse modelo é muito semelhante à Programação Orientada a Objetos. Para começar é preciso entender sobre o conceito de **Entidades**

# Entidades

A **Entidade** é uma representação abstrata das das coisas do mundo real, como `Funcionário`, `Cliente`, `Pedido`. No **POO** ela seria a **Classe**. Existem alguns tipos de **Entidades** que são importantes e aqui às cito:

+ Entidade Fundamental - Uma entidade fundamental é caracterizada por não depender de nenhuma outra entidade para existir e são as mais frequentes. Um exemplo de Entidade Fundamental é `Funcionario`. Essa entidade não depende de nenhuma outra para existir. A Entidade Fundamental é caracterizada por um retângulo.
+ Entidade Fraca - De forma distinta da **Entidade Fundamental**, a **Entidade Fraca** só existe caso tenha uma **Entidade Fundamental** associada a ela. Um exemplo bem simples é a entidade `Dependente` que caracteriza uma pessoa que depende de um `Funcionario`. Caso não exista o funcionário em questão, ela deixa de existir. A Entidade Fraca é caracterizada por um retângulo dentro do outro.
+ Entidade Associativa - Explico melhor mais pra frente.

É de extrema importância que na nomeação de uma **Entedidade** não haja Acentos, Espaços em branco e preferencialmente nomes curtos.

# Campos

Os campos são propriedades que caracterizam uma **Entidade**. De maneira análoga ao **POO**, eles são os objetos da classe. Aqui está um exemplo de uma Entidade e de seus Campos:

![[Pasted image 20250127161734.png]]

Como é possível ver na image, cada campo é composto por uma linha e uma bolinha na ponta. Essa bolinha caracteriza a propriedade desse Campo. As **bolinhas fechadas** podem ser tanto Chaves Primárias(PK), como Chaves Estrangeiras(FK) e as **bolinhas abertas** são Chaves Secundárias

# Chave Primária(PK)

Como dito anteriormente, cada campo tem sua propriedade e os campos com a propriedade **Chave Primária** tem uma grande particularidade. Eles funcionam como um identificador da **Entidade**, ou seja, podem ser um `Id`, `Codigo` e tem como principal objetivo diferenciar as **Entidades** umas das outras evitando duplicidade.

# Chave Secundária

O jeito mais fácil de explicar uma chave secundária é dizer que ela não é nem uma **PK(Chave primária)** nem uma **FK(Chave estrangeira)**. Ela, no meu entendimento, é mais uma **Coluna** de um **DataFrame** como `Nome`, `Nascimento`, `Idade`, entre outras colunas que, por sua vez, não representarão a **identificação** da **entidade** nem terá a representação de chave estrangeira

# Chave Estrangeira(FK)

A chave estrangeira, por sua vez, é um pouco mais complexa de se entender, porém, eu vou tentar deixar tudo bem "mastigado". Assim como na programação, uma chave estrangeira funciona como um **ponteiro**. Esse ponteiro faz **referência** a um campo de outra **entidade** afim de estabelecer ligações entre entidades.

Um dos exemplos mais usados para explicar as **FK** é o das entidades `cliente` e `pedido`. Dentro de um app como o ifood um **Cliente** pode fazer um pedido e esse **Pedido** todo estruturado com seus items e afins tem que ter um **Cliente** associado a ele. Aqui está um exemplo:

![[Pasted image 20250128213144.png]]

Podemos ver que dentro da entidade **Pedidos** temos um campo chamado `cliente_id`, campo esse que faz referência à chave primária(PK) da entidade **Clientes**. Isso se faz necessário pois é importante que cada **Pedido** tenha um **Cliente** associado a ele e, para evitar duplicidade e ter uma maior organização, utilizamos uma **FK** que faz referência à **PK** de **Clientes**

Existem certas regras de **Cardinalidade** para as Foreign Keys que devem ser respeitadas para cada **Relação** entre **Entidades**. Aqui estão alguns exemplos:

+ Relacionamento (1,1) - Em um relacionamento de Um para Um podemos colocar a **FK** em qualquer um dos lados
+ Relacionamento (n,1) - Em um relacionamento de Um para Todos ou Todos para Um é necessário colocar a **FK** no lado **N** 

O Relacionamento (n,n) merece um super tópico já que é o mais complexo. Quando temos um relacionamento de Muitos para Muitos caímos no problema de que para escrever isso em um banco de dados, um índice teria que ter 2 valores e isso não é permitido em Bancos de Dados. Aqui está um exemplo:

![[Pasted image 20250130002939.png]]

O primeiro índice do Campo `Conta` teria que ter 2 valores e isso é impossível dentro do banco de dados. e é aí que surge a necessidade de criar uma **Entidade Associativa**, ou seja, uma entidade que faz uma ponte entre as duas **Entidades** afim de solucionar o problema. Aqui está um exemplo da inclusão dessas **Entidade** intermediária:

![[Pasted image 20250130003139.png]]

Mas aí surge um problema, aonde ficará a chave principal dessa nova Entidade? Para solucionar esse problema tem 2 alternativas mas aqui só vou citar a mais utilizada que é criar uma **Surrogate Key**. Nesse caso a Surrogate Key fica como **Chave Primária** dentro da **Entidade** como pode ser visto nesse exemplo: 

![[Pasted image 20250130003502.png]]


# Chave Substituta(Surrogate Key)

A **Surrogate Key** é muito parecida com a **Foreign Key** pois ela também faz referência a um **Campo**, porém, ela trabalha dentro da própria entidade, enquanto a **FK** trabalha entre 2 entidades e tem como objetivo relacionar tabelas, a **SK** serve para tornar mais simples um Campo que tenha um valor muito grande ou complexo. Ela também serve para facilitar a identificação de campos que tendem a mudar bastante, como por exemplo o campo `Email`, pode ser que o usuário venha a mudar seu email dentro da plataforma e se usamos o email dele para identificá-lo, teria que haver uma grande mudança na identificação dessa pessoa. Nesse caso, podemos usar uma **SK** fazendo referência ao Email, assim, mesmo que o email seja mudado, teremos uma identificação desse usuário.

Vale lembrar que a **SK** é imutável, ou seja, ela sempre vai permanecer com os mesmos valores, diferente das chaves comuns que podem ficar mudando

A Surrogate Key toma o lugar da Chave Primária, sendo assim não mais obrigatória que exista uma Chave Primária na Entidade
# Cardinalidade

A cardinalidade entre duas **Entidades** nada mais é do que o tipo de relacionamento que essas Entidades tem. No Modelo Conceitual entre as **Entidades** temos um **Losango** que representa a relação entre as 2 **Entidades**. Aqui está um exemplo desse **Losango**:

![[Pasted image 20250128214018.png]]

E à partir da definição desse Losango podemos começar com o conceito de **Cardinalidade** que diz sobre a relação de "Quantos para Quantos" entre as 2 Entidades. Fica mais fácil de explicar usando um exemplo:

![[Pasted image 20250128214158.png]]

Aqui podemos ver que a cardinalidade(relação) entre a Entidade **Conta** e a Entidade **Cliente** é **(n:n)** e isso significa duas coisas:

+ Uma **Conta** pode ter vários **Clientes** e um **Cliente** pode ter várias **Contas**. Quando existe essa relação utilizamos o **n** que significa 1 ou mais
+ Um **Cliente** pode ter várias **Contas**. Mais uma vez, por existir essa relação, utilizamos o **n**

É importante notar que essa relação de **Cardinalidade** está no Losango, porém, no Modelo Conceitual cada **Entidade** tem sua própria Cardinalidade em relação à Entidade que está conectada. Podemos ver isso no exemplo à seguir:

![[Pasted image 20250128214557.png]]

É importante notar que a **Cardinalidade** nesse exemplo lê-se ao contrário, ou seja, **Cliente** para **Cidade** é (1,1) e não (0,n)