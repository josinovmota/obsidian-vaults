19-09-2026 14:35

Tags: [[Estatística]], [[Programming]]

# ML Zoomcamp 1 Intro - ML vs Rules

Agora chegamos num exemplo clássico de `classificação` aonde buscamos prever se um email é `spam` ou não. A primeira coisa que podemos pensar é: O que faz um email ser um `spam` ? . Assim como na psiquiatria, por exemplo, os profissionais focam mais naquilo que incomoda o paciente, aqui nos spams faremos na mesma forma. O `spam` será tudo que incomoda a pessoa e também é importante lembrar que `golpes` também devem ser considerados spam.

A primeira coisa que devemos pensar é como uma máquina `classificaria` algo como spam. Certo que hoje em dia temos `NLP`, mas à nível inicial, como uma máquina classificaria? E é aí que entra a `Probabilidade`. Podemos fazer uma lista de palavras ou frases, por exemplo `lista_legal = ['de graça', 'você ganhou a promoção']` e quanto mais dessas palavras houverem no email, maior a probabilidade do email ser um spam. Dentro da classificação podemos considerar um `treshold`, ou seja, se a probabilidade for maior que o treshold, consideramos um spam.