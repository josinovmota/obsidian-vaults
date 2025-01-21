07-12-2024 09:07

Tags:[[ISLP]], [[Statistics]], [[Linear Regression]]

# Ommited Variable Bias

Existe um grande problema quando queremos fazer uma prediction com vários predictors e fazer uma regressão linear pra cada predictor. O nome disso é ommited variable bias e fala sobre a correlação entre os predictors. Para entender melhor, acho que é válido usar um exemplo:

Digamos que estamos querendo prever a **chance de ocorrer um ataque de tubarão** e dentre os predictors que usamos tem um chamado **Venda de Sorvetes**. À primeira vista é sabido que a venda de sorvetes não influencia no **número de tubarões** ou na **ocorrência de ataques**, mas quando fazemos uma regressão linear descobrimos que existe uma forte relação entre **Venda de Sorvetes** e **Ataques de Tubarões**. Essa descoberta veio por meio do [[F-statistics]] que deu o valor **800**. E agora, o que fazer?

É aí que vem a ideia principal desse problema. O número de ataques não é aumentado pela **venda de sorvete** e sim pela **temperatura alta**, que por sua vez, faz com que aumente também a venda de sorvetes.

Como fugir do **Ommit Variable Bias**? Quando fazemos uma regressão linear conseguimos extrair várias métricas, dentre elas temos o [[R²]], [[P-Value]], [[T-statistics]], dentre outras que nos ajudam a afirmar a significância da relação entre o predictor e a resposta. Em especial o [[R²]] e o [[P-Value]] nos ajudam a descobrir essa questão. No caso dos ataques de tubarões, observamos que o valor do [[P-Value]] é **0.384** e o do [[R²]] é 0,1. Ou seja, por mais que o [[F-statistics]] dê uma boa métrica, ele não trabalha sozinho. É sempre bom usar as outras métricas

# References

Introduction To Statistical Learning with Python
Amigão chat gpt