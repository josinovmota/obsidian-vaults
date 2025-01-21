2024-10-03 09:56

Tags:[[ISLP]], [[Statistics]], [[Statistical Learning]]

# Input variables

Variáveis de input, também chamadas de **Independent Variables**, **Features**, entre outros nomes são a base do nosso modelo de Machine Learning. Assim como uma funções às vezes precisam de **parâmetros**, nos modelos precisamos dos **inputs**. Os inputs são normalmente caracterizados pela estrutura $X_{ij}$, onde:

+ $i$ é a posição de cada dado da nossa amostra, por exemplo: em uma amostra [1, 2, 3] nosso $X_0$ é o **1**, nosso $X_1$ é o **2** e assim por diante
+ $j$ é a posição do predictor referente aos dados, por exemplo: Temos uma lista de amostras e predictors respectivamente [1, 2, 3]  [Color, Taste, Brightness] o input $X_{12}$ seria a amostra **2** e o predictor **Brightness**
# Example

|     | Color | Taste | Brightness |
| --- | ----- | ----- | ---------- |
| 0   | Red   | Acid  | Low        |
| 1   | Green | Acid  | High       |
| 2   | Blue  | Acid  | Medium     |

+ $X_{02}$ = O id seria o **0** e o predictor referente seria **Brightness** **Low**
+ $X_{21}$ = O id será o **2** e o predictor referente seria **Taste** **Acid** 

# Meaning

Para prever quando as pessoas querem tomar sorvete, por exemplo, é necessário algumas [[Input variables]] como Temperatura no dia, Preço do sorvete, Disponibilidade do sorvete, entre outras

# References

Introduction To Statistical Learning with Python