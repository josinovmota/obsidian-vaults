2024-10-03 10:21

Tags:[[ISLP]], [[Statistics]], [[Statistical Learning]]

# Reducible and Irreducible Error

Sempre que buscamos fazer uma prediction, teremos o seguinte formato:

$Y = f(x) + e$ 

Onde:
+ $Y$ É o nosso target value
+ $f(x)$ É a nossa prediction
+ $e$ É o erro 

Existem dois tipos de erro, o **Reducible** que é todo aquele erro que podemos **Reduzir** por meio de, por exemplo, usar um outro modelo, usar apenas os predictors que tem relação com a resposta, entre outras técnicas

E o **Irreducible** que tem a ver com todas aquelas variáveis que não estão no nosso controle
 
# Example

Digamos que buscamos prever a chance de uma pessoa ter câncer baseado em um exame. Nesse teste recolhemos a idade e o peso da pessoa. Nós podemos reduzir o **Reducible Error** procurando ver se esses predictors realmente tem a ver com o câncer ou talvez procurando usar modelos mais não-lineares. Já o **Irreducible Error** vem de fatores que não estamos no controle depois de ter obtido os dados, sejam esses fatores: A pessoa estar usando algum acessório que aumenta a altura dela, ter comido muito antes de fazer o exame(que pode acabar alterando o peso). Tais coisas não estão mais no nosso controle dado que recebemos apenas os dados e são erros que junto aos **Reducible** sempre farão parte da nossa função $Y = f(x) + e$ 

# References

Introduction To Statistical Learning with Python