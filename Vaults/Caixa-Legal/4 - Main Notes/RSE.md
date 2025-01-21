 05-12-2024 09:19

Tags:[[ISLP]], [[Statistics]], [[Linear Regression]]

# RSE

Toda vez que buscamos usar um modelo de machine learning para prever algo, temos que estar preparados para lidar com os **Erros** da nossa [[Prediction]]. Uma maneira de ver visualizar os erros é usando o [[RSS]], porém, ele apenas vai pegar todos os erros, ou seja, a diferença do valor real para a nossa prediction e elevar a 2. Isso vai dar um número muito difícil de interpretar. É aí que vem o [[RSE]], ele usa o [[RSS]] em sua fórmula e cria uma métrica que leva em consideração o número de dados(n) e os predictors(p) para dizer que, em média, nosso modelo se distancia em X unidades dos target-values

Em resumo, enquanto o [[RSS]] da um valor que tem pouca **interpretabilidade**, o [[RSE]] nos traz uma média em quantas unidades, em média, o nosso modelo está da resposta

# References

Introduction To Statistical Learning with Python