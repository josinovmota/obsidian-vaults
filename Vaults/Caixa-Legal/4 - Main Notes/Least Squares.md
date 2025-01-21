2024-11-01 10:27

Tags:[[ISLP]], [[Statistics]], [[Linear Regression]]

# Least Squares

Least Squares é o produto de um método que busca **minimizar** o [[Residual Sum of Squares]] do **Fit** de um modelo sobre os dados. Vamos usar a **Regressão Linear** como exemplo:

Uma regressão linear cria uma Linha que está o mais próxima possível dos dados usados para o treinamento dela, ou seja:
![[Pasted image 20241101102939.png]]

A fim de **Minimizar** o **Least Squares** precisamos que essa linha tenha o menor número de RSS(Soma da Distância entre a nossa prediction e os dados ao quadrado) aqui representados pela linha pontilhada:

![[Pasted image 20241101103154.png]]

Para minimizarmos o RSS entra o passo final que é o de Minimizar o Least Squares que é um método aonde são criadas várias linhas como essa em diferentes graus em relação aos eixos X e Y e é dada aquela que tem uma menor RSS
 
# References

Introduction To Statistical Learning with Python

Statquest - By Josh Starmer