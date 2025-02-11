27-01-2025 15:39

Tags:[[Banco de Dados]], [[Uninter]]

# Projeto de Bancos de Dados

É de suma importância, na criação de qualquer coisa, que hajam normas e passos para uma maior organização. Nos Bancos de Dados não é diferente, temos tudo isso.

Para mostrar num meio mais visual, aqui está um exemplo do passo a passo:

![[Pasted image 20250128205801.png]]

Aqui podemos observar diversas fases que serão citadas posteriormente. Dentre elas temos as **Regras de Negócio** e o **Modelo Conceitual** que caminham juntos, já que eles meio que são feitos juntos, após isso temos o **Modelo Lógico** que é uma fase aonde estamos organizando ainda mais os dados para posteriormente escolher um [[Sistemas de Gerenciamento de Banco de Dados - Sgbd]]. Por fim, temos o **Modelo Físico** que é a fase aonde escolhemos o Sistema e fazemos os retoques finais. Aqui estão as etapas e suas características:

# Modelo Conceitual

O modelo conceitual é uma das primeiras fases, ela vem após a obtenção das **Regras de Negócio** por parte da equipe que vai desenvolver o BD. Regras essas que tem como objetivo estabelecer todo o funcionamento do **Banco de Dados**. Um exemplo dessas regras é:

+ Uma pessoa só pode ter o campo `Aprovado` com o valor `True` caso ela tenha uma `Nota` maior que 70

Esse modelo tem como principal característica trazer todas as regras para a **"Linguagem"** dos **Bancos de dados**, ou seja, é aqui que **Traduzimos** as regras de negócio para o formato utilizado na criação do **Banco de Dados**.

# Modelo Lógico

Partindo do **Modelo Conceitual** vê-se a necessidade de organizar ainda mais as regras de negócio e é aí que usamos o [[Modelo Entidade-Relacionamento - MER]] pois ele cria uma interface gráfica que vai ajudar a organizar todas as medidas que tomamos no Modelo Conceitual. Aqui também começamos a refinar ainda mais as **Entidades, Campos, Relações entre as Entidades, Chaves Primárias, Chaves Estrangeiras, Chaves Substitutas,** também começamos a estabelecer as **Cardinalidades** entre as **Entidades**, criamos também as **Entidades Associativas**.

# Modelo Físico

O Modelo Físico é o último modelo antes da criação do **Banco de Dados**. É aqui que procuramos um [[Sistemas de Gerenciamento de Banco de Dados - Sgbd]] que se adeque mais ao nosso modelo de **Banco de Dados** e também começamos a migrar tudo aquilo que foi criado nos Modelo anteriores para o Sistema escolhido. Aqui definimos os tipos de dados, tomando sempre cuidado para usar os tipos de dados específicos da demanda de um Campo afim de trazer mais performance ao nosso **BD**.





