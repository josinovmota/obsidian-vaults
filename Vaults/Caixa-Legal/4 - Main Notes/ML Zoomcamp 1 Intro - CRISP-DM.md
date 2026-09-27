27-09-2026 18:25

Tags: [[Estatística]], [[Programming]]

# ML Zoomcamp 1 Intro - CRISP-DM

É de se esperar que exista uma certa ordem do que fazer para extrair ao máximo do seu programa. Para isso, foi criado, nos anos 90, o crisp-dm que é um conjunto de passos que nos ajudam a organizar a criação do programa.

O primeiro passo é o de obter as regras de negócio. Isso em diversas áreas é o passo mais importante. É ali que são definidos os `boundaries`, recursos que serão utilizados, o que devemos fazer, o quanto devemos fazer. Na execução podemos pedir outros dados ou extrair outros dados, mas as regras de negócio está ali para sabermos exatamente o que temos que fazer e o limite.

O segundo passo é entender os dados. Dar uma olhada rápida identificando o que é cada coisa, em que formato estão, se estão no formato certo, se tem muitos `nan-values`, se vai ser preciso mockar dados, etc

O terceiro passo já é o de, analisado os dados, transformar eles em tabular ou o formato em que o nosso modelo deve usar. É aí que vemos o que fazer com os nan-values, resolvemos incongruências e deixamos eles perfeitamente prontos para serem utilizados

O quarto passo é ver se o nosso modelo ta funcionando. Quantificar o erro dele, entender a variance, bias, testar com novos dados, etc

E o último passo é o deployment, ou seja, colocar ele pra jogo com o usuário
