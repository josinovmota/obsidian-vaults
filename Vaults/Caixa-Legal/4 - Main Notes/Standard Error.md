2024-11-03 15:11

Tags:[[ISLP]], [[Statistics]], [[Linear Regression]]

# Standard Error

O Standard Error é uma métrica importantíssima. Muitas das vezes em que procuramos fazer um modelo de Machine Learning nos deparamos com o problema de não ter dados que representem um todo. Por exemplo: Queremos fazer uma Regressão Linear que busca prever a Altura baseada na Idade. É muito difícil e inviável ter as alturas e pesos de **toda a população**, então resolvemos trabalhar com **Samples(amostras)**. Um dos maiores problemas de se usar samples é saber se elas conseguem representar bem o todo e é aí que entra o Standard Error - SE

Imagine que estamos querendo saber a média de altura de toda a população. Medir cada pessoa e anotar é muito trabalhoso. Dessa maneira, usaremos uma **Sample(amostra)** e precisamos nos certificar de que essa amostra pode representar bem o todo. Para isso, usaremos o [[Standard Error]] pois ele vai nos dizer, em média, o quão distante está a média da nossa **sample** da média de todas as alturas

Uma ideia importante de ter em mente é que quanto maior é a nossa sample, menor tende a ser o Standard Error, pois cada vez mais estamos nos aproximando do todo.

O [[Standard Error]] também é usado para computar o **95% Confidence Interval** 

# Example

Aqui nesse exemplo podemos ver que o Standard Error deu 2, ou seja, podemos esperar que a média da nossa sample pode variar em até 2 unidades da média do todo

![[Pasted image 20241102143559.png]]

# References

Introduction To Statistical Learning with Python
Statquest - https://www.youtube.com/watch?v=A82brFpdr9g