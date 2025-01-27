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

# Chave Primária

Como dito anteriormente, cada campo tem sua propriedade e os campos com a propriedade **Chave Primária** tem uma grande particularidade. Eles funcionam como um identificador da **Entidade**, ou seja, podem ser um `Id`, `Codigo` e tem como principal objetivo diferenciar as **Entidades** umas das outras evitando duplicidade.
