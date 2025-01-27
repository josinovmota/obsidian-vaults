27-01-2025 14:53

Tags:[[Banco de Dados]], [[Uninter]]

# Sistema de Gerenciamento de Banco de Dados - Sgbd

Assim como na linguagem de programação python, aonde temos as **libs**, que são utilizadas como ferramentas para diversos propósitos, ao criar um **Banco de Dados** também precisamos de ferramentas para facilitar a criação do mesmo. Desse modo, surgiu a necessidade da criação dos [[Sistemas de Gerenciamento de Banco de Dados - Sgbd]]. Eles tem como principal objetivo utilizar das regras padrões de criação de **Bancos de dados** para criá-los. Eles tem algumas características como:

+ Controle de redundância - Digamos que no nosso **Sgbd** temos o **cpf** de uma pessoa chamada **João Silva** armazenado em 2 locais diferentes. Certo dia o João descobriu que houve um problema com seu cpf e que precisava mudá-lo, e para isso, era preciso atualizar no banco de dados. O sgbd, com o **Controle de Redundância** armazena informações como cpf em um local estruturado afim de que se trocarmos o cpf do João em uma **Entidade**, ele seja atualizado em todas.
+ Compartilhamento dos dados e concorrência - É possível que haja várias ações simultâneas em um BD, como 4 pessoas requisitando a mesma informação. Um **Sgbd** precisa garantir que todas essas ações funcionem mesmo que simultaneamente.
+ Controle de acesso - É de suma importância que cada **usuário** tenha suas devidas **permissões** dentro de um **Sgbd**, pois isso assegura que uma pessoa da qual não deve ter acesso a alterar **Informações Sensíveis** acabe alterando e que pessoas que devem ter esse acesso consigam alterar.
+ Controle de transações - Esse controle nada mais é do que o **Sgbd** se certificar que certas operações tenham êxito. Um exemplo disso é uma transação de 100 reais. Existe todo um passo a passo para que ela ocorra e esse passo a passo precisa acontecer inteiro, de maneira ordenada, caso contrário teríamos um grande problema
+ Entre outros.

É importante não confundir os **Sgbds** com as **Management Tools**. As Managements Tools com o **Dbeaver** oferecem uma interface mais agradável ao usuário, tornando assim mais fácil que ele opere todas as funções do **Sgbd**.

Exemplos de **Sgbd's** : PostgreSQL, MySQL, Oracle DB.