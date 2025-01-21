2024-11-01 10:44

Tags:[[ISLP]], [[Statistics]], [[Linear Regression]]

# P-VALUE

O p-value é diretamente proporcional à **Statistical Significance**, ou seja, o quão significativo é tal coisa para a estatística.

Ele é importante para não considerarmos valores que vem ao acaso, como por exemplo, jogar uma moeda pra cima 10 vezes e nas 10 vezes elas virem **Cara**. Essa situação ocorreu ao acaso, já que a chance de vir Cara e Coroa é a mesma, 50%. Não ter esses eventos que ocorrem ao acaso nos nossos modelos é muito importante, pois desconsidera os parâmetros que não tem nada a ver com o target-value

O treshold mais comum para o p-value é o **0,05** ou **5%**, ou seja, quando p-value é **maior do que 0.05** ele nos sugere de que a [[Null Hypothesis]] **está correta** e quando ele é **menor que 0.05**, sugere que ela **está errada**

É importante notar que o valor do p-value funciona como uma evidência e não algo 100% certo. Nós usamos afim de criar expectativas sobre aquela **Hipótese**

Resumo no meu jeito :

+ P-value menor que 0,05: Deu certoooo, o predictor ou o que você está medindo tem sim relaçãooo

+ P-value maior que 0,05: Vixi, deu ruim, o predictor ou o que você está medindo parece que não tem nada a ver

É também importante lembrar que o p-value é derivado do [[T-statistics]] e que ambos trabalham juntos

Pelas métricas apresentadas aqui, podemos perceber que o parâmetro TV, que no contexto significa os ADS passando nas TVs tem sim uma significância com o Y(Vendas)
![[Pasted image 20241104163241.png]]

# References

Introduction To Statistical Learning with Python
Chat gpt amigão :D