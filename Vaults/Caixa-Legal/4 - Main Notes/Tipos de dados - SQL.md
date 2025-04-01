13-02-2025 13:39

Tags:[[Banco de Dados]], [[Uninter]], [[SQL]]

# Tipos de dados - SQL

Sempre que vamos criar um **Campo(Coluna)** dentro de uma **Table** no nosso **Banco de Dados** temos que instanciar o tipo dos **Dados** que ali estarão presentes. Isso não é muito diferente de linguagens de programação como o **C++**, por exemplo, aonde sempre que criamos uma varíavel tempos que dizer o **Tipo** dela. De maneira análoga, também temos que nos preocupar com **performance** quando nos é requerido, então assim como nas linguagens de programação, nesses casos, devemos utilizar os **Tipos** mais adequados. Um grande exemplo disso é na utilização de um `int64` em um **Campo** que só receberá números **0 < n < 255**. Utilizar um `int64` nesse caso pode acabar tirando performance do nosso banco de dados.

Existem vários tipos de dados que podem ser utilizados ao instanciar um campo, mas aqui cito os mais usados:

+ varchar - O tipo de dado **varchar** é amplamente utilizado por ter uma estrutura que permite que sejam adicionados **dados** dos mais diversos tamanhos, tendo anteriormente que definir apenas o **Limite** de caracteres. Um ponto muito importante é que o **varchar** sempre utiliza os caracteres do **Dado** e mais um caractere de controle. Esse último caractere tem o objetivo de determinar o final daquele **Dado**
+ char - O tipo de dado **char** já é um pouco mais restritivo em comparação com o **varchar** pois ele tem um tamanho fixo. É normalmente utilizado quando temos um tamanho fixo, como por exemplo siglas com apenas **2 caracteres**. Nesses casos utilizar um varchar vai requerer 3 espaços no lugar de 2 e isso pode ocasionar um problema na performance do nosso **BD**
+ int - O tipo de dado **int** tem como maior objetivo armazenar **Inteiros** ou seja, os famosos **Números**
+ date - Esse tipo de dado tem como principal objetivo armazenar datas

Existem outros tipos de dados mas acho que não cabe citá-los todos aqui.