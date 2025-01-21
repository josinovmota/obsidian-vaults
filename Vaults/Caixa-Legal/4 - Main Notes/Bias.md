2024-10-09 09:19

Tags:[[ISLP]], [[Statistics]], [[Statistical Learning]]

# Bias

Um dos exemplo mais básicos, porém muito simples de descrever o bias é dizer que ele significa a **Inabilidade Do Modelo Em Se Aproximar Da "True" Relationship**.

Essa frase é simples pois **Bias** é um conceito vasto e difícil de entender at first sight. Mas com vários exemplos e ideias fica fácil de entender.

Portanto, um modelo com um **Bias alto** tende a performar mal com os dados de treino e também tende a performar mal com os dados de Teste, porém, em ambos os casos ele é constante, ou seja, ele não fará predictions extremamente ruins, dadas que ao utilizar certo modelo, o criador desse modelo já tenha ideias por trás daquela escolha.

Paralelo a isso podemos entender o Bias como **Alto** caso o nosso modelo não capture bem a **True Relationship** dos dados e **Baixo** caso o nosso modelo crie predictions que se encaixam bem com a **True Relationship** dos dados

# Example

Nesse exemplo temos a true relationship sendo a seta em azul e a prediction do nosso modelo a seta reta vermelha. Podemos observar que a seta vermelha não representa bem a **Real Relação entre os dados**, ou seja, nessa prediction temos um alto **Bias**.
![[Pasted image 20241009092622.png]]

# Meaning

Ocorreu um problema. Nosso modelo, que é Paramétrico([[Parametric Methods]]) no sentido de performar bem quando a distribuição dos dados é linear obteve um [[Mean Squared Error - MSE]] alto. Ali podemos perceber que a linha formada pelo nosso modelo não capturava bem a disposição dos dados, tornando assim nossa [[Prediction]] ruim. Aqui podemos dizer que o nosso modelo teve um **Bias Alto** 

# References

Introduction To Statistical Learning with Python