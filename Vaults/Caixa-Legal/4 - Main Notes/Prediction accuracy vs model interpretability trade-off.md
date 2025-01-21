2024-10-05 09:55

Tags:[[ISLP]], [[Statistics]], [[Statistical Learning]]

# Prediction accuracy vs model interpretability trade-off

Um modelo pode tanto ter uma **precisão boa** como uma **interpretabilidade boa**. Existem casos em que ambos são bons, mas na maioria das vezes existe um **trade-off** entre esses dois casos, ou seja, quando um é bom, o outro tende a ser pior e vice-versa. Modelo **não-flexíveis**, ou seja, modelos que geral predictions simples como as lineares tendem a ser mais fáceis de interpretar(Explico nos exemplos). Já os modelos **flexíveis** tendem a serem bem precisos, porém, tem uma interpretabilidade ruim(Explico nos exemplos) 

# Example

Digamos que estamos buscando entender a relação entre **Horas Estudadas** e **Nota no teste**. Se usarmos um modelo não-flexível como uma **Regressão Linear**, poderemos ver que existe um padrão muito simples de ser interpretado: Quanto mais horas a pessoa estudar, melhor ela será no teste. Isso em termos de **interpretabilidade** é ótimo, já que fica fácil entender que quando um é maior o outro também é maior. Porém, caímos em um problema. Devido a fadiga, pode ser que estudar muitas horas deixe o aluno fadigado e isso atrapalhe ele nos testes, tornando assim, depois de certo ponto, estudar ser ruim para o desempenho. Desse modo, podemos ver que a **Precisão** de um modelo não-flexível pode acabar nos traindo.

Agora estamos fazendo o mesmo problema usando modelos flexíveis, ou seja, modelos que capturam bem a disposição dos dados. Usando um modelo polinomial, podemos notar que à partir de certo ponto, quanto mais o aluno estudar, pior será pra ele. Isso evidencia uma boa precisão no nosso modelo, mas isso virá com um problema. Aqui podemos facilmente entender que o causador pode ser a fadiga, mas e se houverem outros motivos pra essa queda? O modelo não nos dirá de maneira direta, ele apenas vai mostrar que tal problema existe. Desse modo, podemos ver que existe um **trade-off** entre essas duas coisas

# References

Introduction To Statistical Learning with Python