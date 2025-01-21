2024-10-08 13:37

Tags:[[ISLP]], [[Statistics]], [[Statistical Learning]]

# Mean Squared Error - MSE

Como o nome já diz, o Mean(Média) Squared Error(Erro ao quadrado) é a medida do erro do nosso modelo ao quadrado. Cabe analisar o motivo de ser ao quadrado e é aí que entra uma parte importante

![[Pasted image 20241008134043.png]]

Como podemos ver nesse gráfico, os erros podem ser tanto **Positivos**, como **Negativos** e é aí que a parte do **Squared** entra, pois ela vai tornar os erros negativos em positivos tornando assim uma melhor interpretação dessa métrica

Sua fórmula é:

$MSE = \frac{1}{n}\sum_{i=1}^{n}(Y_i - \hat{f}(X_i))^2$

Aonde:

+ $N$ é o número de observações
+ $Y_i$ é o nosso target-value na posição i
+ $X_i$ são os nossos predictors na posição i

# Example

Preencher quando chegar em Linear Regression

# References

Introduction To Statistical Learning with Python