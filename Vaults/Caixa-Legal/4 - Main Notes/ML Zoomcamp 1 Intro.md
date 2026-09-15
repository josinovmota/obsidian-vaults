15-09-2026 19:34

Tags: [[Estatística]], [[Programming]]

# ML Zoomcamp 1 Intro

Problema inicial é: Por quanto eu deveria vender o meu carro. É de se esperar que exista um senso comum entre os valores dos carros. Esse senso é dado por características do veículo. Por exemplo: Se eu tenho um carro de 2011 e estou em 2026, muito provavelmente esse carro perdeu algum valor em relação a quando ele lançou. 

O que nós sabemos sobre os carros: O texto fala que umas das características mais notáveis na hora de decidir o preço de um carro é o `valor`, `mileage`, `year`, `manufacturer`, `model`. Baseado nessas características, é de se pensar que um profissional em carros consiga estimar um valor para um carro.

Só que aí surge um problema. Um `profissional` também tem características, ou seja, ele pode ficar doente, ele pode estar num dia ruim e isso afetar o resultado dele, ele pode ser subornado, vítima de engenharia social, entre muitos outros problemas. Aqui eu também não quero deixar de lado os problemas de um modelo de machine learning, mas, é de se pensar que ele são mais simples de ter controle do que uma `pessoa`. Portanto, para uma empresa, é melhor ter um modelo de machine learning do que um profissional humano. E para a gente também, já que vai ter mais empregos :P 

E aí entra a questão do que o profissional e o modelo fariam. Ambos receberiam `dados` e entregariam `resultado`. Isso é muito similar a uma função da programação. A imagem à seguir retrata isso:

![[Pasted image 20260915194320.png]]

E aí a gente entra na parte de: O que vai ser entregue ao profissional ou ao modelo. Dentro desse âmbito, temos uma divisão entre `Feature` e `Target`. Sendo `Feature`, tudo aquilo que vamos utilizar para prever ou inferir sobre o `Target`

Logo, podemos esperar que o profissional entregue resultados assim como o modelo. E aí fica a dúvida: Como podemos fazer pra saber quem errou menos? Ou seja, quem chegou mais próximo da `Target`. Isso é história para os próximos capítulos. Mas ambos usam os dados, sendo eles: `mileage`, `year`, `manufacturer`, `model`