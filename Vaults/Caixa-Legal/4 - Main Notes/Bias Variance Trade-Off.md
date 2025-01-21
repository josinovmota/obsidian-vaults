2024-10-09 09:27

Tags:[[ISLP]], [[Statistics]], [[Statistical Learning]]

# Bias Variance Trade-Off

O [[Bias]] [[Variance]] trade-off é um conceito muito importante pois fala sobre como a variance e o bias tendem a ser inversamente proporcionais, ou seja, quando um é alto o outro tende a ser baixo e vice-versa.

Um indício disso é o de que uma **Variance** alta, normalmente é encontrada em modelos **Flexíveis** e esses modelos flexíveis tende a atender bem os dados de **Treino** mas não são constantes com os dados de **Teste** e nesse caso a tendência é que a nossa prediction performe mal em encontrar a True-Relationship dos dados em geral, o que introduz o **Bias**, portanto, é importante saber que a **Tendência** é sempre de que conforme o **Bias Aumenta**, a **Variance Diminui** e vice-versa.

Um modelo bom busca ter tanto uma **Variance Baixa** como um **Bias Baixo**, lutando contra essa **Tendência**

# Example

Aqui temos uma demonstração visual do Bias Variance Trade-Off aonde o ponto vermelho é o nosso **Target-Value**
![[Pasted image 20241008140807.png]]

# Meaning

Nos surge um problema, nosso modelo de Machine Learning está se saindo muito bem em capturar a disposição dos dados de teste, mas quando utilizamos o nosso modelo para exemplos reais com dados reais ele está performando muito mal. Nesse caso, observamos que o [[Bias]] do nosso modelo é **muito baixo**, mas a [[Variance]] é **alta**. Após notar isso, focamos em diminuir a variance ao diminuir ao máximo o [[Residual Sum of Squares]], porém, ao fazer isso, surge mais um problema. Agora nossa [[Variance]] é **baixa** mas nosso [[Bias]] é alto. Portanto, chegamos na conclusão de que [[Bias]] e [[Variance]] são inversamente proporcionais, ou seja, quando um aumenta, a tendência é de que o outro diminui. À partir disso, no lugar de tentar diminuir ou aumentar eles de maneira singular, buscamos técnicas para diminuir ambos

# References

Introduction To Statistical Learning with Python