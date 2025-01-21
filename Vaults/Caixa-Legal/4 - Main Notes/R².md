2024-11-01 10:39

Tags:[[ISLP]], [[Statistics]], [[Linear Regression]]

# R²

O R²(R-Squared) é uma medida que representa o quanto tal ou tais predictors tem relação com a prediction. Sua fórmula é:

$R² = \frac{SS(mean) - SS(fit)}{SS(mean)}$

Aonde:

$SS(Mean)$ É a soma dos quadrados da média das amostras no eixo Y

$SS(fit)$ É a média do RSS do nosso modelo

O valor do R² é sempre entre 0 e 1, o que facilita a nossa **compreensão** e também podemos tomar ele como uma Porcentagem, ou seja, 0.6 = 60% de confiança de que o predictor tem a ver com o nosso Target-Value

O [[R²]] tem um probleminha. Ele tende a aumentar há cada vez que adicionamos um novo predictor no nosso modelo, mesmo que o predictor não tenha uma significativa relação com a resposta. Isso acontece principalmente nos **dados de treino**, dado que ao adicionarmos novos predictors, muito provavelmente estamos adicionando predictors que achamos que tem uma relação com a resposta e pode ser que esses predictors realmente tenham relação, mas só com os dados de treino. Por isso, para dados de treino, o [[R²]] será alto, mas com dados de teste/dados reais, ele pode indicar que tal predictor não está performando bem 

# Example

Assim como o [[P-Value]] nos ajuda a saber se um predictor tem relação com os nossos dados, também temos o [[R²]] que é uma métrica um pouco mais tranquila de entender e também diz o mesmo. O [[R²]] vai de 0 à 1 e funciona como porcentagem. Se tirarmos um [[R²]] de 0.6 significa que tal predicto tem 60% de confiança de que ele tem a ver com a nossa Prediction

# References

Introduction To Statistical Learning with Python

Statquest - https://youtu.be/7ArmBVF2dCs