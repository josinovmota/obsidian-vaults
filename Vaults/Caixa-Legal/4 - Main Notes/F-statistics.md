07-12-2024 09:15

Tags:[[ISLP]], [[Statistics]], [[Linear Regression]]

# F-statistics

O [[F-statistics]] é mais uma métrica que contribui no entendimento da relação entre a [[Prediction]] e a resposta. porém ela tem alguns pontos em especial que devem ser ditos.

Resumo do meu jeito:

+ F-statistics alta = Aeeeeeeeeee, o predictor parece **ter** relação com a resposta
+ F-statistics baixa = Vixi, o predictor parece **não ter** relação com a resposta

E aqui eu falo sobre esses pontos especiais. O cálculo da [[F-statistics]] leva em consideração o **Número de Predictors** e aí você me pergunta: Pq devemos usar ela se temos o [[P-Value]]? E é aí que surge um probleminha. é sabido que se usarmos 100 predictors que não tem nenhuma relação com a resposta e obtivermos o [[P-Value]], cerca de 5% desses predictors terão um [[P-Value]] < 0.00001, ou seja, predictors que não tem nenhuma relação com a resposta são sugeridos como "Tem relação com a resposta". Isso é um super problema, mas o [[F-statistics]] vem aí pra resolver pois ele leva em consideração a quantidade de Predictors e ajusta o cálculo para tal

# References

Introduction To Statistical Learning with Python
Chat gpt amigãoooo