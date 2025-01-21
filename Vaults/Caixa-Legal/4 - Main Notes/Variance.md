2024-10-09 09:03

Tags:[[ISLP]], [[Statistics]], [[Statistical Learning]]

# Variance

Ao criar um modelo de **Machine Learning** sempre tentamos fazer predictions que cheguem próximas do nosso **Target-Value**, mas existe um problema quando chegamos muito perto desse Target-Value com os dados de treino e esse problema introduz o conceito **Variance**. Variance pode ter vários significados, mas de forma simples, podemos dizer que temos uma **Variance** alta caso o nosso modelo se adeque bem aos **Dados de Treino** mas performe mal para os **Dados de Teste** e dados reais que serão introduzidos posteriormente. Podemos dizer também que é a inabilidade do nosso modelo em prever dados novos, dado que ele está tão focado nos dados de **treino**.

Sempre que vamos criar um modelo, a **Variance** é um ponto muito importante a ser visto, dado que 99% das vezes o nosso modelo tem que performar bem com os dados reais e posteriores e não só com os dados de treino.

Outro problema de ter uma **Variance** alta é que o nosso modelo pode acabar capturando [[Outliers]] e **Noises** e isso não é bem o que planejamos, dado que ao capturá-los podemos enviesar o nosso modelo.

Quando aumentamos a complexidade do nosso modelo, a tendência é Aumentar a Variance, dado que ele vai começar a capturar mais as tendências dos dados de treino

Quando diminuimos a complexidade do nosso modelo, a tendência é que ele talvez não performe tão bem para os dados de treino, porém, ele acabe funcionando bem de um modo geral para todos os dados posteriores

É importante saber que afim de tornar o nosso modelo o melhor possível temos que **Diminuir** a **Variance**

# Example

Um dos exemplos mais básicos é o da Linha formada por uma **Regressão Linear** essa linha tende a ter um **Variance** baixo dado que ela, dependendo da disposição dos dados, não vai capturar tão bem a relação dos dados, porém, ela pode ser constante em relação aos dados novos

Já um modelo que gere uma **Squiggly Line** tenderá a performar muito bem com os dados de treino mas é muito provável que não atenderá bem a demanda dos dados posteriores



# References

Introduction To Statistical Learning with Python