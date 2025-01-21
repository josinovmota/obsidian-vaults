2024-09-26 09:52

Tags:[[ISLP]], [[Statistics]]

# Trimmed Mean

A média([[Mean]]) aparada é uma medida de tendência central que busca reduzir o impacto de valores extremos(Outliers) ao remover uma porcentagem específica dos valores mais altos e mais baixos de um conjunto. Isso resulta em uma estimativa mais representativa do "centro" dos dados

A fórmula da média aparada é:

$\bar{X} = \frac{\sum_{i=p + 1}^{n - p} X_i}{n - 2p}$

Onde:
+ $n$ é o número total de observações;
+ $p$ é o número de observações removidas de cada extremidade após ordenar os dados;
+ $X_i$ são as observações restantes após o corte.

#### Exemplo Prático

Imagine que queremos calcular a média salarial dos moradores de um bairro, mas nesse bairro mora o **Bill Gates**. Se incluirmos o salário do **Bill Gates** na média, o resultado ficará distorcido da tendência central do bairro. Quando utilizamos a média aparada, removemos esses valores extremos, obtendo assim uma média que representa melhor a população desse bairro

#### Comparação com a Mediana

Outra forma de desconsiderar os valores extremos é ao usar a [[Median]]. Em comparação com a trimmed mean, ela usará bem menos poder computacional

# References

Practical Statistics for Data Scientists