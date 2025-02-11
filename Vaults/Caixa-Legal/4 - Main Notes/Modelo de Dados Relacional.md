31-01-2025 04:10

Tags:[[Banco de Dados]], [[Uninter]]

# Modelo de Dados Relacional

O modelo de dados relacional tem grandes semelhanças às praticas usadas dentro do [[Modelo Entidade-Relacionamento - MER]], aonde temos coisas como **Entidades, Campos, Relações** entre as Entidades. Aqui no Modelo de Dados Relacional temos também essas ideias mas elas usam nomes diferentes. Nesse caso temos as **Relações** que nada mais é do que um nome diferente para as **Entidades**. Temos os **Atributos** que são um nome diferente para **Campos**. Temos as **Tuplas** que são os índices dos **Atributos** e também temos o **Domínio** que representa os tipos de dados contidos em cada um dos **Atributos**. Aqui eu mostro de um jeito mais explicativo:

![[Pasted image 20250131042826.png]]

# Normalização

A normalização compõe um conjunto de regras capazes de melhorar o desempenho do nosso modelo, como também a confiabilidade dos dados, retirar inconsistências, evitar futuros erros e problemas futuros. Dentro da normalização existem 5 regras, porém, só são mais utilizadas 3. É importante notar que cada regra depende que a anterior tenha sido feita, então vira um passo-a-passo

## 1a Forma Normal

A 1fn fala sobre a ocorrência de muitos **Atributos** com **Tuplas** repetitivas como é mostrado no exemplo a seguir: 

![[Pasted image 20250131080315.png]]

De certa forma não é um erro ter várias ocorrências **iguais** no mesmo atributo, porém, isso pode acabar ocasionando um problema caso, em algum momento, tivermos que mudar algum desses nomes. Um exemplo disso seria se em algum momento tivéssemos que mudar o alguma dessas **Tuplas** do atributo **cargo**. Se `Desenvolvedor Python` tivesse que virar `Programador Python` teríamos que mudar cada **Tupla** com esse valor e isso poderia ser alvo de algum esquecimento. Portanto, a 1fn diz que quando ocorrem essas ocorrências devemos criar uma nova **Relação(Entidade)** e trazer a **chave** dessa **Relação** para a principal. Assim continuaremos com a repetição, porém, de números que fazem referência aos cargos como é mostrado no exemplo:

![[Pasted image 20250131083531.png]] ![[Pasted image 20250131083522.png]] 

Ela também fala sobre a má prática que é ter **mais de um valor** nos **índices** de um **Atributo** como é mostrado no exemplo à seguir:

![[Pasted image 20250131083729.png]]

E que mais uma vez devemos decompor esse **Atributo** em uma nova **Relação(Entidade)** afim de trazer para a relação principal apenas uma **FK** que faz referência a esses valores. Então criamos uma nova **relação**:

![[Pasted image 20250131083920.png]]

E na **Relação** principal fazemos referência por meio de uma **Foreign Key** que aponta para o `id` da nova relação

## 2a Forma Normal

É importante que a **1FN** tenha sido feita para prosseguirmos para a **2FN**. A **segunda forma normal** fala que todos os **atributos não-chaves** devem depender de toda a **Chave Principal** da **Relação**, ou seja, quando ocorrem **Chaves Compostas** não podemos ter **atributos** que dependem exclusivamente apenas de uma das **Chaves Compostas**. aqui tem um exemplo disso:

![[Pasted image 20250131090112.png]]

Podemos observar que os **Atributos** `descricao` e `valourUnitario` dependem exclusivamente da chave **produtoId** e isso não pode ocorrer, já que temos uma **Chave Primária Composta**. Para resolver isso, criamos uma nova **Relação** com esses **Atributos** e fazemos referência a ela na **Relação** principal, como é mostrado no exemplo à seguir:

![[Pasted image 20250203001306.png]]

Só não foi movido o **valorUnitario**, mas ele está errado segundo a **2FN**

## 3a Forma Normal

A **Terceira Forma Normal** fala sobre **Atributos** que derivam de outros **Atributos** que não são a **Chave Principal**. Esses atributos devem ser removidos e também é necessário saber que para aplicar a **3FN** é necessário ter feito antes a **1FN** e a **2FN**. Aqui temos um exemplo:

![[Pasted image 20250203002038.png]]

Podemos observar que o **Atributo** `total` deriva dos atributos `valorUnitario`e `quantidade`. Segundo a **3FN** isso não pode ocorrer, já que nenhum desses dois **Atributos** são as **Chaves Principais** da nossa **Relação**. Portanto devemos **removê-lo** e apenas fazer esse **cálculo** dinamicamente, ou seja, apenas quando ele for necessário. Aqui está um exemplo de como a tabela fica:

![[Pasted image 20250203002303.png]]
